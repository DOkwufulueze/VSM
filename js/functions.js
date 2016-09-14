var monthsArray=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var mn=0;
var yr=0;

function popYearsDivs(){
	var years=document.getElementById("years").value ;
	var yearsDiv=document.getElementById("yearsDiv") ;
	var output="<div style='clear:both;margin-bottom:10px;width:100%;height:400px;overflow:auto;'>";
	for(var i=0;i<years;i++){
		output+="<div id='year"+i+"' style='clear:both;margin-bottom:30px;width:200%;height:auto;overflow:auto;'>Year "+(i+1)+" <input type='text' size='10' onkeyup=\"popMonthDivs(this.value,'"+i+"','monthsForYear"+i+"')\" placeholder='Month No.' /><br /><!--div style='clear:both'><div style='clear:none;float:left;width:100px;'>MONTH</div><div style='clear:none;float:left;width:100px;'>MEN (S)</div><div style='clear:none;float:left;margin-left:10px;width:100px;'>WOMEN (S)</div><div style='clear:none;float:left;margin-left:10px;width:130px;'>CHILDREN (S)</div><div style='clear:none;float:left;margin-left:10px;width:100px;'>MEN (I)</div><div style='clear:none;float:left;margin-left:10px;width:100px;'>WOMEN (I)</div><div style='clear:none;float:left;margin-left:10px;width:130px;'>CHILDREN (I)</div><div style='clear:none;float:left;margin-left:10px;width:100px;'>MEN (R)</div><div style='clear:none;float:left;margin-left:10px;width:100px;'>WOMEN (R)</div><div style='clear:none;float:left;margin-left:10px;width:130px;'>CHILDREN (R)</div><div style='clear:none;float:left;margin-left:10px;width:130px;'>MOSQUITO (S)</div><div style='clear:none;float:left;margin-left:10px;width:130px;'>MOSQUITO (I)</div></div--><div id='monthsForYear"+i+"' style='clear:both;'> &nbsp; </div></div>";
	}
	yearsDiv.innerHTML=output;
}

function popMonthDivs(months,year,monthsForYear){
	var output="";
	mn=months;
	yr=year;
	monthsDiv=document.getElementById(monthsForYear) ;
	for(var i=0;i<months;i++){
		output+="<div id='month"+i+"year"+year+"' style='clear:both;margin-bottom:30px;width:100%;overflow:auto;'><div style='clear:both'><div style='clear:none;float:left;width:100px;'>"+monthsArray[i]+"</div> <div style='clear:none;float:left;margin-left:10px;width:100px;'><input type='text' size='10' id='menS"+i+""+year+"' name='menS"+i+""+year+"' placeholder='MEN (S)' title="+monthsArray[i]+" /></div><div style='clear:none;float:left;margin-left:10px;width:100px;'><input type='text' size='10' id='womenS"+i+""+year+"' name='womenS"+i+""+year+"' placeholder='WOMEN (S)' title="+monthsArray[i]+" /></div><div style='clear:none;float:left;margin-left:10px;width:130px;'><input type='text' size='13' id='childrenS"+i+""+year+"' name='childrenS"+i+""+year+"' placeholder='CHILDREN (S)' title="+monthsArray[i]+" /></div><div style='clear:none;float:left;margin-left:10px;width:100px;'><input type='text' size='10' id='menI"+i+""+year+"' name='menI"+i+""+year+"' placeholder='MEN (I)' title="+monthsArray[i]+" /></div><div style='clear:none;float:left;margin-left:10px;width:100px;'><input type='text' size='10' id='womenI"+i+""+year+"' name='womenI"+i+""+year+"' placeholder='WOMEN (I)' title="+monthsArray[i]+" /></div><div style='clear:none;float:left;margin-left:10px;width:130px;'><input type='text' size='13' id='childrenI"+i+""+year+"' name='childrenI"+i+""+year+"' placeholder='CHILDREN (I)' title="+monthsArray[i]+" /></div><div style='clear:none;float:left;margin-left:10px;width:100px;'><input type='text' size='10' id='menR"+i+""+year+"' name='menR"+i+""+year+"' placeholder='MEN (R)' title="+monthsArray[i]+" /></div><div style='clear:none;float:left;margin-left:10px;width:100px;'><input type='text' size='10' id='womenR"+i+""+year+"' name='womenR"+i+""+year+"' placeholder='WOMEN (R)' title="+monthsArray[i]+" /></div><div style='clear:none;float:left;margin-left:10px;width:130px;'><input type='text' size='13' id='childrenR"+i+""+year+"' name='childrenR"+i+""+year+"' placeholder='CHILDREN (R)' title="+monthsArray[i]+" /></div><div style='clear:none;float:left;margin-left:10px;width:130px;'><input type='text' size='13' id='mosquitoS"+i+""+year+"' name='mosquitoS"+i+""+year+"' placeholder='MOSQUITO (S)' title="+monthsArray[i]+" /></div><div style='clear:none;float:left;margin-left:10px;width:130px;'><input type='text' size='13' id='mosquitoI"+i+""+year+"' name='mosquitoI"+i+""+year+"' placeholder='MOSQUITO (I)' title="+monthsArray[i]+" /></div></div><div style='clear:both;float:left;'>CONSTANTS (MEN): &alpha; <input type='text' size='5' id='alpham"+i+""+year+"' name='alpham"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&beta;<sub>m</sub> <input type='text' size='5' id='betam"+i+""+year+"' name='betam"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&delta;<sub>m</sub> <input type='text' size='5' id='deltam"+i+""+year+"' name='deltam"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&rho;<sub>m</sub> <input type='text' size='5' id='rhom"+i+""+year+"' name='rhom"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&omega; <input type='text' size='5' id='omegam"+i+""+year+"' name='omegam"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;b<sub>m</sub> <input type='text' size='5' id='bm"+i+""+year+"' name='bm"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;d<sub>m</sub> <input type='text' size='5' id='dm"+i+""+year+"' name='dm"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;</div><div style='clear:both;float:left;margin-top:10px;'>CONSTANTS (WOMEN): &alpha; <input type='text' size='5' id='alphaw"+i+""+year+"' name='alphaw"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&beta;<sub>w</sub> <input type='text' size='5' id='betaw"+i+""+year+"' name='betaw"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&delta;<sub>w</sub> <input type='text' size='5' id='deltaw"+i+""+year+"' name='deltaw"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&rho;<sub>w</sub> <input type='text' size='5' id='rhow"+i+""+year+"' name='rhow"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&omega; <input type='text' size='5' id='omegaw"+i+""+year+"' name='omegaw"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;b<sub>w</sub> <input type='text' size='5' id='bw"+i+""+year+"' name='bw"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;d<sub>w</sub> <input type='text' size='5' id='dw"+i+""+year+"' name='dw"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;</div><div style='clear:both;float:left;margin-top:10px;'>CONSTANTS (CHILDREN): &alpha; <input type='text' size='5' id='alphac"+i+""+year+"' name='alphac"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&beta;<sub>c</sub> <input type='text' size='5' id='betac"+i+""+year+"' name='betac"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&delta;<sub>c</sub> <input type='text' size='5' id='deltac"+i+""+year+"' name='deltac"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&rho;<sub>c</sub> <input type='text' size='5' id='rhoc"+i+""+year+"' name='rhoc"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&omega; <input type='text' size='5' id='omegac"+i+""+year+"' name='omegac"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;b<sub>c</sub> <input type='text' size='5' id='bc"+i+""+year+"' name='bc"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;d<sub>c</sub> <input type='text' size='5' id='dc"+i+""+year+"' name='dc"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;</div><div style='clear:both;float:left;margin-top:10px;'>CONSTANTS (ALL): &alpha; <input type='text' size='5' id='alphah"+i+""+year+"' name='alphah"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&beta;<sub>h</sub> <input type='text' size='5' id='betah"+i+""+year+"' name='betah"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&delta;<sub>h</sub> <input type='text' size='5' id='deltah"+i+""+year+"' name='deltah"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&rho;<sub>h</sub> <input type='text' size='5' id='rhoh"+i+""+year+"' name='rhoh"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;&omega; <input type='text' size='5' id='omegah"+i+""+year+"' name='omegah"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;b<sub>h</sub> <input type='text' size='5' id='bh"+i+""+year+"' name='bh"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;d<sub>h</sub> <input type='text' size='5' id='dh"+i+""+year+"' name='dh"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;</div><div style='clear:both;float:left;margin-top:10px;'>CONSTANTS (MOSQUITO): &beta;<sub>v</sub> <input type='text' size='5' id='betav"+i+""+year+"' name='betav"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;b<sub>v</sub> <input type='text' size='5' id='bv"+i+""+year+"' name='bv"+i+""+year+"' placeholder='' title="+monthsArray[i]+" />&nbsp;&nbsp;d<sub>v</sub> <input type='text' size='5' id='dv"+i+""+year+"' name='dv"+i+""+year+"' placeholder='' title="+monthsArray[i]+" /></div></div>";
	}
	monthsDiv.innerHTML=output;
}

function computeR0(){
	var res="res";
	computeReproductiveNumber(mn,yr,res)
}

function computeReproductiveNumber(mn,yr,res){
	var output="<div style='clear:both;font-weight:bold;'>Reproductive Number</div><div style='clear:both'><div style='clear:none;float:left;width:100px;'>MONTH</div><div style='clear:none;float:left;width:200px;'>MEN</div><div style='clear:none;float:left;margin-left:10px;width:200px;'>WOMEN</div><div style='clear:none;float:left;margin-left:10px;width:230px;'>CHILDREN</div><div style='clear:none;float:left;margin-left:10px;width:230px;'>ALL</div></div>";
	
	var output2="<div style='clear:both;font-weight:bold;'>Rate of Infection</div><div style='clear:both'><div style='clear:none;float:left;width:100px;'>MONTH</div><div style='clear:none;float:left;width:200px;'>MEN</div><div style='clear:none;float:left;margin-left:10px;width:200px;'>WOMEN</div><div style='clear:none;float:left;margin-left:10px;width:230px;'>CHILDREN</div><div style='clear:none;float:left;margin-left:10px;width:230px;'>ALL</div></div>";
	months=mn;
	year=yr;
	resDiv=document.getElementById(res) ;
	var alpham=0;
	var betam=0;
	var deltam=0;
	var rhom=0;
	var omegam=0;
	var bm=0;
	var dm=0;
	
	var alphaw=0;
	var betaw=0;
	var deltaw=0;
	var rhow=0;
	var omegaw=0;
	var bw=0;
	var dw=0;
	
	var alphac=0;
	var betac=0;
	var deltac=0;
	var rhoc=0;
	var omegac=0;
	var bc=0;
	var dc=0;
	
	var alphah=0;
	var betah=0;
	var deltah=0;
	var rhoh=0;
	var omegah=0;
	var bh=0;
	var dh=0;
	
	var betav=0;
	var bv=0;
	var dv=0;
	
	var n=0;
	var nMen=0;
	var nWomen=0;
	var nChildren=0;
	var nMosquito=0;
	
	var nSMen=0;
	var nSWomen=0;
	var nSChildren=0;
	var nSMosquito=0;
	
	var nIMen=0;
	var nIWomen=0;
	var nIChildren=0;
	var nIMosquito=0;
	
	var nRMen=0;
	var nRWomen=0;
	var nRChildren=0;
	
	var R0=0;
	var R0Men=0;
	var R0Women=0;
	var R0Children=0;
	for(var i=0;i<months;i++){
		alpham=(document.getElementById("alpham"+i+""+year).value==""||isNaN(document.getElementById("alpham"+i+""+year).value==""))?0:document.getElementById("alpham"+i+""+year).value;
		betam=(document.getElementById("betam"+i+""+year).value==""||isNaN(document.getElementById("betam"+i+""+year).value==""))?0:document.getElementById("betam"+i+""+year).value;
		deltam=(document.getElementById("deltam"+i+""+year).value==""||isNaN(document.getElementById("deltam"+i+""+year).value==""))?0:document.getElementById("deltam"+i+""+year).value;
		rhom=(document.getElementById("rhom"+i+""+year).value==""||isNaN(document.getElementById("rhom"+i+""+year).value==""))?0:document.getElementById("rhom"+i+""+year).value;
		omegam=(document.getElementById("omegam"+i+""+year).value==""||isNaN(document.getElementById("omegam"+i+""+year).value==""))?0:document.getElementById("omegam"+i+""+year).value;
		bm=(document.getElementById("bm"+i+""+year).value==""||isNaN(document.getElementById("bm"+i+""+year).value==""))?0:document.getElementById("bm"+i+""+year).value;
		dm=(document.getElementById("dm"+i+""+year).value==""||isNaN(document.getElementById("dm"+i+""+year).value==""))?0:document.getElementById("dm"+i+""+year).value;
		
		alphaw=(document.getElementById("alphaw"+i+""+year).value==""||isNaN(document.getElementById("alphaw"+i+""+year).value==""))?0:document.getElementById("alphaw"+i+""+year).value;
		betaw=(document.getElementById("betaw"+i+""+year).value==""||isNaN(document.getElementById("betaw"+i+""+year).value==""))?0:document.getElementById("betaw"+i+""+year).value;
		deltaw=(document.getElementById("deltaw"+i+""+year).value==""||isNaN(document.getElementById("deltaw"+i+""+year).value==""))?0:document.getElementById("deltaw"+i+""+year).value;
		rhow=(document.getElementById("rhow"+i+""+year).value==""||isNaN(document.getElementById("rhow"+i+""+year).value==""))?0:document.getElementById("rhow"+i+""+year).value;
		omegaw=(document.getElementById("omegaw"+i+""+year).value==""||isNaN(document.getElementById("omegaw"+i+""+year).value==""))?0:document.getElementById("omegaw"+i+""+year).value;
		bw=(document.getElementById("bw"+i+""+year).value==""||isNaN(document.getElementById("bw"+i+""+year).value==""))?0:document.getElementById("bw"+i+""+year).value;
		dw=(document.getElementById("dw"+i+""+year).value==""||isNaN(document.getElementById("dw"+i+""+year).value==""))?0:document.getElementById("dw"+i+""+year).value;
		
		alphac=(document.getElementById("alphac"+i+""+year).value==""||isNaN(document.getElementById("alphac"+i+""+year).value==""))?0:document.getElementById("alphac"+i+""+year).value;
		betac=(document.getElementById("betac"+i+""+year).value==""||isNaN(document.getElementById("betac"+i+""+year).value==""))?0:document.getElementById("betac"+i+""+year).value;
		deltac=(document.getElementById("deltac"+i+""+year).value==""||isNaN(document.getElementById("deltac"+i+""+year).value==""))?0:document.getElementById("deltac"+i+""+year).value;
		rhoc=(document.getElementById("rhoc"+i+""+year).value==""||isNaN(document.getElementById("rhoc"+i+""+year).value==""))?0:document.getElementById("rhoc"+i+""+year).value;
		omegac=(document.getElementById("omegac"+i+""+year).value==""||isNaN(document.getElementById("omegac"+i+""+year).value==""))?0:document.getElementById("omegac"+i+""+year).value;
		bc=(document.getElementById("bc"+i+""+year).value==""||isNaN(document.getElementById("bc"+i+""+year).value==""))?0:document.getElementById("bc"+i+""+year).value;
		dc=(document.getElementById("dc"+i+""+year).value==""||isNaN(document.getElementById("dc"+i+""+year).value==""))?0:document.getElementById("dc"+i+""+year).value;
		
		betav=(document.getElementById("betav"+i+""+year).value==""||isNaN(document.getElementById("betav"+i+""+year).value==""))?0:document.getElementById("betav"+i+""+year).value;
		bv=(document.getElementById("bv"+i+""+year).value==""||isNaN(document.getElementById("bv"+i+""+year).value==""))?0:document.getElementById("bv"+i+""+year).value;
		dv=(document.getElementById("dv"+i+""+year).value==""||isNaN(document.getElementById("dv"+i+""+year).value==""))?0:document.getElementById("dv"+i+""+year).value;
		
		alphah=(document.getElementById("alphah"+i+""+year).value==""||isNaN(document.getElementById("alphah"+i+""+year).value==""))?0:document.getElementById("alphah"+i+""+year).value;
		betah=(document.getElementById("betah"+i+""+year).value==""||isNaN(document.getElementById("betah"+i+""+year).value==""))?0:document.getElementById("betah"+i+""+year).value;
		deltah=(document.getElementById("deltah"+i+""+year).value==""||isNaN(document.getElementById("deltah"+i+""+year).value==""))?0:document.getElementById("deltah"+i+""+year).value;
		rhoh=(document.getElementById("rhoh"+i+""+year).value==""||isNaN(document.getElementById("rhoh"+i+""+year).value==""))?0:document.getElementById("rhoh"+i+""+year).value;
		omegah=(document.getElementById("omegah"+i+""+year).value==""||isNaN(document.getElementById("omegah"+i+""+year).value==""))?0:document.getElementById("omegah"+i+""+year).value;
		bh=(document.getElementById("bh"+i+""+year).value==""||isNaN(document.getElementById("bh"+i+""+year).value==""))?0:document.getElementById("bh"+i+""+year).value;
		dh=(document.getElementById("dh"+i+""+year).value==""||isNaN(document.getElementById("dh"+i+""+year).value==""))?0:document.getElementById("dh"+i+""+year).value;
		
		n=(document.getElementById("menS"+i+""+year).value==""||isNaN(document.getElementById("menS"+i+""+year).value==""))?0:document.getElementById("menS"+i+""+year).value + (document.getElementById("womenS"+i+""+year).value==""||isNaN(document.getElementById("womenS"+i+""+year).value==""))?0:document.getElementById("womenS"+i+""+year).value + (document.getElementById("childrenS"+i+""+year).value==""||isNaN(document.getElementById("childrenS"+i+""+year).value==""))?0:document.getElementById("childrenS"+i+""+year).value + (document.getElementById("menI"+i+""+year).value==""||isNaN(document.getElementById("menI"+i+""+year).value==""))?0:document.getElementById("menI"+i+""+year).value + (document.getElementById("womenI"+i+""+year).value==""||isNaN(document.getElementById("womenI"+i+""+year).value==""))?0:document.getElementById("womenI"+i+""+year).value + (document.getElementById("childrenI"+i+""+year).value==""||isNaN(document.getElementById("childrenI"+i+""+year).value==""))?0:document.getElementById("childrenI"+i+""+year).value + (document.getElementById("menR"+i+""+year).value==""||isNaN(document.getElementById("menR"+i+""+year).value==""))?0:document.getElementById("menR"+i+""+year).value + (document.getElementById("womenR"+i+""+year).value==""||isNaN(document.getElementById("womenR"+i+""+year).value==""))?0:document.getElementById("womenR"+i+""+year).value + (document.getElementById("childrenR"+i+""+year).value==""||isNaN(document.getElementById("childrenR"+i+""+year).value==""))?0:document.getElementById("childrenR"+i+""+year).value ;
		
		nSMen=(document.getElementById("menS"+i+""+year).value==""||isNaN(document.getElementById("menS"+i+""+year).value==""))?0:document.getElementById("menS"+i+""+year).value;
		nIMen=(document.getElementById("menI"+i+""+year).value==""||isNaN(document.getElementById("menI"+i+""+year).value==""))?0:document.getElementById("menI"+i+""+year).value;
		nRMen=(document.getElementById("menR"+i+""+year).value==""||isNaN(document.getElementById("menR"+i+""+year).value==""))?0:document.getElementById("menR"+i+""+year).value;
		
		nSWomen=(document.getElementById("womenS"+i+""+year).value==""||isNaN(document.getElementById("womenS"+i+""+year).value==""))?0:document.getElementById("womenS"+i+""+year).value;
		nIWomen=(document.getElementById("womenI"+i+""+year).value==""||isNaN(document.getElementById("womenI"+i+""+year).value==""))?0:document.getElementById("womenI"+i+""+year).value;
		nRWomen=(document.getElementById("womenR"+i+""+year).value==""||isNaN(document.getElementById("womenR"+i+""+year).value==""))?0:document.getElementById("womenR"+i+""+year).value;
		
		nSChildren=(document.getElementById("childrenS"+i+""+year).value==""||isNaN(document.getElementById("childrenS"+i+""+year).value==""))?0:document.getElementById("childrenS"+i+""+year).value;
		nIChildren=(document.getElementById("childrenI"+i+""+year).value==""||isNaN(document.getElementById("childrenI"+i+""+year).value==""))?0:document.getElementById("childrenI"+i+""+year).value;
		nRChildren=(document.getElementById("childrenR"+i+""+year).value==""||isNaN(document.getElementById("childrenR"+i+""+year).value==""))?0:document.getElementById("childrenR"+i+""+year).value;
		
		nSMosquito=(document.getElementById("mosquitoS"+i+""+year).value==""||isNaN(document.getElementById("mosquitoS"+i+""+year).value==""))?0:document.getElementById("mosquitoS"+i+""+year).value;
		nIMosquito=(document.getElementById("mosquitoI"+i+""+year).value==""||isNaN(document.getElementById("mosquitoI"+i+""+year).value==""))?0:document.getElementById("mosquitoI"+i+""+year).value;
		
		nMen=(document.getElementById("menS"+i+""+year).value==""||isNaN(document.getElementById("menS"+i+""+year).value==""))?0:document.getElementById("menS"+i+""+year).value + (document.getElementById("menI"+i+""+year).value==""||isNaN(document.getElementById("menI"+i+""+year).value==""))?0:document.getElementById("menI"+i+""+year).value + (document.getElementById("menR"+i+""+year).value==""||isNaN(document.getElementById("menR"+i+""+year).value==""))?0:document.getElementById("menR"+i+""+year).value;
		
		nWomen=(document.getElementById("womenS"+i+""+year).value==""||isNaN(document.getElementById("womenS"+i+""+year).value==""))?0:document.getElementById("womenS"+i+""+year).value + (document.getElementById("womenI"+i+""+year).value==""||isNaN(document.getElementById("womenI"+i+""+year).value==""))?0:document.getElementById("womenI"+i+""+year).value + (document.getElementById("womenR"+i+""+year).value==""||isNaN(document.getElementById("womenR"+i+""+year).value==""))?0:document.getElementById("womenR"+i+""+year).value;
		
		nChildren=(document.getElementById("childrenS"+i+""+year).value==""||isNaN(document.getElementById("childrenS"+i+""+year).value==""))?0:document.getElementById("childrenS"+i+""+year).value + (document.getElementById("childrenI"+i+""+year).value==""||isNaN(document.getElementById("childrenI"+i+""+year).value==""))?0:document.getElementById("childrenI"+i+""+year).value + (document.getElementById("childrenR"+i+""+year).value==""||isNaN(document.getElementById("childrenR"+i+""+year).value==""))?0:document.getElementById("childrenR"+i+""+year).value;
		
		nMosquito=(document.getElementById("mosquitoS"+i+""+year).value==""||isNaN(document.getElementById("mosquitoS"+i+""+year).value==""))?0:document.getElementById("mosquitoS"+i+""+year).value + (document.getElementById("mosquitoI"+i+""+year).value==""||isNaN(document.getElementById("mosquitoI"+i+""+year).value==""))?0:document.getElementById("mosquitoI"+i+""+year).value ;
		
		R0Men=((eval(betam)*eval(betav)*eval(bm)*eval(bv))*(eval(dm)+eval(omegam)))/((eval(dm)*eval(dv)*eval(dv))*(eval(dm)+eval(omegam)+eval(alpham))*(eval(dm)+eval(rhom)+eval(deltam)));
		
		R0Women=((eval(betaw)*eval(betav)*eval(bw)*eval(bv))*(eval(dw)+eval(omegaw)))/((eval(dw)*eval(dv)*eval(dv))*(eval(dw)+eval(omegaw)+eval(alphaw))*(eval(dw)+eval(rhow)+eval(deltaw)));
		
		R0Children=((eval(betac)*eval(betav)*eval(bc)*eval(bv))*(eval(dc)+eval(omegac)))/((eval(dc)*eval(dv)*eval(dv))*(eval(dc)+eval(omegac)+eval(alphac))*(eval(dc)+eval(rhoc)+eval(deltac)));
		
		R0=((eval(betah)*eval(betav)*eval(bh)*eval(bv))*(eval(dh)+eval(omegah)))/((eval(dh)*eval(dv)*eval(dv))*(eval(dh)+eval(omegah)+eval(alphah))*(eval(dh)+eval(rhoh)+eval(deltah)));
		
		var roiMen=eval(betam)*eval(nSMen)*eval(nIMosquito);
		var roiWomen=eval(betaw)*eval(nSWomen)*eval(nIMosquito);
		var roiChildren=eval(betac)*eval(nSChildren)*eval(nIMosquito);
		var roi=eval(betah)*eval(n)*eval(nIMosquito);
		
		output+="<div id='resmonth"+i+"year"+year+"' style='clear:both;margin-bottom:10px;width:100%;overflow:auto;'><div style='clear:both'><div style='clear:none;float:left;width:100px;'>"+monthsArray[i]+"</div> <div style='clear:none;float:left;margin-left:10px;width:200px;' id='men"+i+""+year+"' name='men"+i+""+year+"' >"+R0Men+"</div><div style='clear:none;float:left;margin-left:10px;width:200px;' id='women"+i+""+year+"' name='women"+i+""+year+"' >"+R0Women+"</div><div style='clear:none;float:left;margin-left:10px;width:230px;' id='children"+i+""+year+"' name='children"+i+""+year+"' >"+R0Children+"</div><div style='clear:none;float:left;margin-left:10px;width:230px;' id='all"+i+""+year+"' name='all"+i+""+year+"' >"+R0+"</div></div></div>";
		
		output2+="<div id='resmonth2"+i+"year"+year+"' style='clear:both;margin-bottom:10px;width:100%;overflow:auto;'><div style='clear:both'><div style='clear:none;float:left;width:100px;'>"+monthsArray[i]+"</div> <div style='clear:none;float:left;margin-left:10px;width:200px;' id='men"+i+""+year+"' name='men"+i+""+year+"' >"+roiMen+"</div><div style='clear:none;float:left;margin-left:10px;width:200px;' id='women"+i+""+year+"' name='women"+i+""+year+"' >"+roiWomen+"</div><div style='clear:none;float:left;margin-left:10px;width:230px;' id='children"+i+""+year+"' name='children"+i+""+year+"' >"+roiChildren+"</div><div style='clear:none;float:left;margin-left:10px;width:230px;' id='all"+i+""+year+"' name='all"+i+""+year+"' >"+roi+"</div></div></div>";
	}
	resDiv.innerHTML=output2+"<div style='clear:both;margin-bottom:40px;'> &nbsp;</div>"+output;
	resDiv.style.display="block";
	/*$(document).ready(function(){
		$("#"+resDiv).show(1000);
	});*/
}