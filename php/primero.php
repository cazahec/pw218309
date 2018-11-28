<?php
$servidor="localhost";
$usuario ="root";
$password="";
$basedatos="pw09";

$conexion=mysqli_connect($servidor,$usuario,$password,$basedatos);
$sql="select ncontrol,nombre,apellido, edad from alumnos";
$resultado=mysqli_query($conexion.$sql);
$arregloDatos = array();
if(mysqli_num_rows($resultado)>0){
	while($registro=mysqli_fetch_array($resultado)){
		$arregloDatos[] = $registro;

	}
}
//print(arregloDatos);//en pantalla
//si quiereo json
print json_encode($arregloDatos);

?>