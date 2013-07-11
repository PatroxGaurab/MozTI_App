<?php   

   function dbconnection($sercon)
   {      
      $dbconn = mysql_select_db("a1722818_moztiat", $sercon)
      //$dbconn = mysql_select_db("teststaffir", $sercon)  
      or die("Database connection not completed");      
      return $dbconn;      
   }   

   function serconnection()
   {		
      $user='a1722818_gaurab';
      $pwd='joypatra)(#1a';
      $server='mysql13.000webhost.com';      
      $sercon=mysql_connect($server, $user,$pwd)
      or die("Server connection not completed");      
      return $sercon;      
   }  
   
?>
