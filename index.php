<?php
	$page=!isset($_GET['pg'])?"search":$_GET['pg'];
	if($page=="logout"){
		include("class.php");
		logout();
	}
	else{
		switch($page){
			case $page:
			include("top.php");
			include($page.".php");
			break;
			
			default:
			include("top.php");
			include("search.php");
			break;
		}
	}
?>