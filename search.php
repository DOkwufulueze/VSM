<?php
	include("class.php");
	$msg=!isset($_GET['msg'])?"":$_GET['msg'];
?>
	<form action="?pg=search" method="post" name="srch" enctype="multipart/form-data">
		<div style="clear:both;">
			Number of Years: <input type="text" name="years" id="years" size="5" /> <br />
			<input type="button" value="Enter" onclick="popYearsDivs()" />
		</div>
		<div id="yearsDiv" style="clear:both;">
			&nbsp;
		</div>
		<input type="button" onclick="computeR0()" value="Reproductive Number" /><br />
	</form>
	<div id="resHolder" style="width:100%;overflow:auto;">
		<div id="res" style="display:none;width:130%;border:1px solid #febaba;margin-top:20px;">
			&nbsp;
		</div>
	</div>
<?php	
	include("foot.php");
?>