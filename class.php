<?php
	$collection = array(
		0 => "test 1",
		1 => "test 2",
		2 => "test 3"
	);

	function db(){
		@mysql_connect("localhost","root","")or die(mysql_error());
		@mysql_select_db("vsm")or die(mysql_error());
	}
	
	function tfidf($term_frequency,$total_document_count,$documents_with_term){
		$tfidf = $term_frequency * log( $total_document_count / $documents_with_term, 2); // tf * idf
		return $tfidf;
	}
	
	function getIndex($queryStr) {
		$collection=$GLOBALS['collection'];
		$collection[]=$queryStr;
        $dictionary = array();
        $docCount = array();

        foreach($collection as $docID => $doc) {//1<=$docId<=3 the number of documents indexed
			$terms = explode(' ', $doc);//$terms is an array containing the terms in each $collection subscript that are separated by the whitespace character
			$docCount[$docID] = count($terms);//$docCount contains the number of items in $terms (the number of terms in in each $collection subscript that are separated by the whitespace character)

			foreach($terms as $term) {
				if(!isset($dictionary[$term])) {//if this term had not been encountered before
					$dictionary[$term] = array('df' => 0, 'postings' => array());//dictionary contains two subscripts[df,postings] (df is a data type, postings is an array)
				}
				if(!isset($dictionary[$term]['postings'][$docID])) {// 
					$dictionary[$term]['df']++;
					$dictionary[$term]['postings'][$docID] = array('tf' => 0);//dictionary[][][] contains another array which saves the frequency of the term in the document
				}
				$dictionary[$term]['postings'][$docID]['tf']++;//dictionary[][][][] actually contains a four dimensional array. Frequency of the term in the document is incremented
			}
        }

        return array('docCount' => $docCount, 'dictionary' => $dictionary);//a two dimensional array containing [number of terms in each document(subscript)] and dictionary[][][][]
	}
	
	function getTfidf($term,$queryStr,$docSize) {
        $index = getIndex($queryStr);
        $docCount = count($index['docCount']);
        $entry = $index['dictionary'][$term];
		foreach($entry['postings'] as  $docID => $postings) {
			if($docSize!=$docID){
				echo "TFIDF(Document $docID and term $term) : " .
						($postings['tf'] * log($docCount / $entry['df'], 2));
				echo "<br />";
			}
        }
	}
	
	function normalise($doc) {
        foreach($doc as $entry) {
            $total += $entry*$entry;
        }
        $total = sqrt($total);
        foreach($doc as &$entry) {
			$entry = $entry/$total;
        }
        return $doc;
	}
	
	function cosineSim($docA, $docB) {
        $result = 0;
        foreach($docA as $key => $weight) {
			$result += $weight * $docB[$key];
        }
        return $result;
	}
	
	function srch($queryStr){
		$collection=$GLOBALS['collection'];
		$collection[]=$queryStr;
        $query=array();
		if($queryStr==""){
			echo ":::Please enter a search phrase.";
		}
		else{
			$query = preg_split("/[\s,:\"]+/",$queryStr);
			$index = getIndex($queryStr);
			$matchDocs = array();
			$tfCalc=array();
			$idfCalc=array();
			$docCount = count($index['docCount']);//number of documents
			$i=0;
			foreach($query as $qterm){
				$entry = $index['dictionary'][$qterm];
				foreach($entry['postings'] as $docID => $posting){
					$matchDocs[$docID]=0;
					$tfCalc[$docID]=0;
					$idfCalc[$docID]=0;
				}
			}

			//echo count($matchDocs);
			foreach($query as $qterm){
				$entry = $index['dictionary'][$qterm];
				foreach($entry['postings'] as $docID => $posting) {//checking each extant document
					$matchDocs[$docID]+=$posting['tf']*log($docCount / $entry['df'], 2);
					$tfCalc[$docID]+=$posting['tf'];
				}
			}

			// length normalise
			foreach($matchDocs as $docID => $score) {
				$matchDocs[$docID] = $score/$index['docCount'][$docID];
			}
			arsort($matchDocs); // high to low
			//var_dump($matchDocs);
			$docSize=count($collection)-1;
			$docSize2=count($matchDocs)-1;
			foreach($matchDocs as $docID => $score) {
				if($docID!=($docSize)){
					echo urlencode("<div style='background:#ffffff;clear:both;margin-bottom:30px;'>Document Name: ".$docID."<br />".substr($collection[$docID],0,100)."<br />Matched Terms in Document: ".$tfCalc[$docID]."<br />Score(TF * IDF): $score <br />Number of Terms in Document: ".$index['docCount'][$docID]."<br /></div>");
				}
			}
			echo urlencode("<div style='background:auto;clear:both;margin-bottom:20px;'>Search String: <span class='vals'>$queryStr</span> <br />Number of existing Documents: <span class='vals'>".($docCount-1)."</span><br />Number of Matching Documents: <span class='vals'>".$docSize2."</span><br />See analysis below.</div><div style='overflow:auto;height:300px;width:100%;clear:both'><div>".showAnalysis($queryStr,$docSize)."</div></div>");
			//echo urlencode("<div style='background:auto;clear:both;margin-bottom:20px;'>Search String: <span class='vals'>$queryStr</span> <br />Number of existing Documents: <span class='vals'>".($docCount-1)."</span><br />Number of Matching Documents: <span class='vals'>".$docSize."</span><br />See analysis below.</div>");
		}
	}
	
	function showAnalysis($queryStr,$docSize){
		if($queryStr!=""){
			$query = preg_split("/[\s,:\"]+/",$queryStr);
			$index = getIndex($queryStr);
			foreach($query as $qterm){
				$entry = $index['dictionary'][$qterm];
				foreach($entry['postings'] as $docID => $posting) {//checking each extant document
					echo getTfidf($qterm,$queryStr,$docSize)."<br />";
				}
			}
		}
	}
	
	function sbmFile(){
		db();
		$file=$_FILES['file']['name'];
		$oldFile=$_FILES['file']['name'];
		$fileSize=$_FILES['file']['size'];
		$fileType=$_FILES['file']['type'];
		$fileLoc=$_FILES['file']['tmp_name'];
		$uploads="C:/wamp/www/VSM/documents/";
		if($file!=""){
			if($fileSize>120000){
				echo "<script>document.location.href='.?pg=search&msg=:::Upload file is greater than 120KB.'</script>";
			}
			else{
				$q=mysql_query("SELECT * FROM documents WHERE old_document_name='$oldFile'") or die(mysql_error());
				$n=mysql_num_rows($q);
				if($n>0){
					echo "<script>document.location.href='.?pg=search&msg=:::Document already Exists.'</script>";
				}
				else if($n==0){
					list($txt, $ext) = explode(".", $file);
					$file=time().".".$ext;
					if(move_uploaded_file($fileLoc,$uploads.$file)){
						if(mysql_query("INSERT INTO documents(document_name,old_document_name) VALUES('$file','$oldFile') ")){
							echo "<script>document.location.href='.?pg=search&msg=:::$oldFile Successfully uploaded.'</script>";
						}
						else{
							if(unlink($uploads.$file)){
								echo "<script>document.location.href='.?pg=search&msg=:::$oldFile could not be uploaded now.'</script>";
							}
							else{
								echo "<script>document.location.href='.?pg=search&msg=:::There's problem with the server, please try again later.'</script>";
							}
						}
					}
					else{
						echo "<script>document.location.href='.?pg=search&msg=:::Sorry. Unable to upload File'</script>";
					}
				}
			}
		}
		else{
			echo "<script>document.location.href='.?pg=search&msg=:::Please select a file to upload.'</script>";
		}
	}
?>