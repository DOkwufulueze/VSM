<?php
	include("class.php");
	$query=!isset($_GET['query'])?"":$_GET['query'];
	srch(($query));
?>