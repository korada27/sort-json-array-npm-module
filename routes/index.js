var express = require('express');
var router = express.Router();
var sortJsonArray = require('sort-json-array');

/* GET home page. */
router.get('/getData', function(req, res) 
 {
  
  var page=req.query.page;

var example=[
	
		
{
"CatalogItemId": 1,
"CatalogItemName": "1st Avenue",
"CatalogItemDescription": "Details of 1st Avenue",
"Collection": "Flatiron Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/1002020999G15S001_1st-avenue_red_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_09_5S?$tile=InterfaceInc/1002005999G15S001_1st-avenue_flannel&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/1002005999G15S001_1st-avenue_flannel_va1?wid=184&hei=184&align=-1,0",
"Color": "Flannel 8141"
},
{
"CatalogItemId": 2,
"CatalogItemName": "2nd Avenue",
"CatalogItemDescription": "Details of 2nd Avenue",
"Collection": "Flatiron Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/1003008999G15S001_2nd-avenue_grand_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_09_5S?$tile=InterfaceInc/1003008999G15S001_2nd-avenue_grand&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/1003008999G15S001_2nd-avenue_grand_va1?wid=184&hei=184&align=-1,0",
"Color": "Grand 8168"
},
{
"CatalogItemId": 3,
"CatalogItemName": "3nd Avenue",
"CatalogItemDescription": "Details of 3rd Avenue",
"Collection": "Flatiron Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/1004003999G15S001_3rd-avenue_greene_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_09_5S?$tile=InterfaceInc/1004008999G15S001_3rd-avenue_grand&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/1004008999G15S001_3rd-avenue_grand_va1?wid=184&hei=184&align=-1,0",
"Color": "Grand 8180"
},
{
"CatalogItemId": 4,
"CatalogItemName": "A Peeling",
"CatalogItemDescription": "Details of a Peeling",
"Collection": "Patina 102778",
"InstallationViewImage": "http://s7d4.scene7.com/is/image/InterfaceInc/7048009999G15S001_a-peeling_patina_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_09_5S?$tile=InterfaceInc/7048009999G15S001_a-peeling_patina&",
"DetailViewImage": "http://s7d4.scene7.com/is/image/InterfaceInc/7048009999G15S001_a-peeling_patina_va1?wid=184&hei=184&align=-1,0",
"Color": null
},
{
"CatalogItemId": 5,
"CatalogItemName": "AE310",
"CatalogItemDescription": "Details",
"Collection": "Aerial Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7921007999G15S001_ae310_smoke_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_09_5S?$tile=InterfaceInc/7921007999G15S001_ae310_smoke&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7921007999G15S001_ae310_smoke_va1?wid=184&hei=184&align=-1,0",
"Color": "Smoke 104627"
},
{
"CatalogItemId": 6,
"CatalogItemName": "AE311",
"CatalogItemDescription": "Details",
"Collection": "Aerial Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7922016999G17S001_ae311_mushroom-vb_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_15_7S?$tile=InterfaceInc/7922002999G17S001_ae311_fog&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7922002999G17S001_ae311_fog_va1?wid=184&hei=184&align=-1,0",
"Color": "Fog 104669"
},
{
"CatalogItemId": 7,
"CatalogItemName": "AE312",
"CatalogItemDescription": "Details",
"Collection": "Aerial Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/8148001999G15S001_ae312_mistaccent_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_05_5S?$tile=InterfaceInc/8148007999G15S001_ae312_smokeaccent&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/8148007999G15S001_ae312_smokeaccent_va1?wid=184&hei=184&align=-1,0",
"Color": "Smoke/accent 105411"
},
{
"CatalogItemId": 8,
"CatalogItemName": "AE313",
"CatalogItemDescription": "Details",
"Collection": "Aerial Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/8187005999G17S001_ae313_greigehoney_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_15_7S?$tile=InterfaceInc/8187005999G17S001_ae313_greigehoney&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/8187005999G17S001_ae313_greigehoney_va1?wid=184&hei=184&align=-1,0",
"Color": "Greige/Honey 104883"
},
{
"CatalogItemId": 9,
"CatalogItemName": "AE315",
"CatalogItemDescription": "Details",
"Collection": "Aerial Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/9209001999G17S001_ae315_mushroom-grass_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_15_7S?$tile=InterfaceInc/9209002999G17S001_ae315_fog-citron&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/9209002999G17S001_ae315_fog-citron_va1?wid=184&hei=184&align=-1,0",
"Color": "Fog/Citron 105809"
},
{
"CatalogItemId": 10,
"CatalogItemName": "AE317",
"CatalogItemDescription": "Details",
"Collection": "Aerial Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/9210011999G17S001_ae317_emerald-vb_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_15_7S?$tile=InterfaceInc/9210011999G17S001_ae317_emerald&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/9210011999G17S001_ae317_emerald_va1?wid=184&hei=184&align=-1,0",
"Color": "Emerald 105831"
},
{
"CatalogItemId": 11,
"CatalogItemName": "Above Board",
"CatalogItemDescription": "Details",
"Collection": "Board Games Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/1010016999G15S001_above-board_magnolia_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_25_5S?$tile=InterfaceInc/1010016999G15S001_above-board_magnolia&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/1010016999G15S001_above-board_magnolia_va1?wid=184&hei=184&align=-1,0",
"Color": "Magnolia 100767"
},
{
"CatalogItemId": 12,
"CatalogItemName": "Accent Flannel",
"CatalogItemDescription": "Details",
"Collection": "Flannel & Accent",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/1015012999G15S001_accent-flannel_brownplain_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_05_5S?$tile=InterfaceInc/1015012999G15S001_accent-flannel_brownplain&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/1015012999G15S001_accent-flannel_brownplain_va1?wid=184&hei=184&align=-1,0",
"Color": "Brown/Plain 6510"
},
{
"CatalogItemId": 13,
"CatalogItemName": "Afternoon Light",
"CatalogItemDescription": "Details",
"Collection": "Evensong Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/8221006999G17S001_afternoon-light_sunrise-light_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_15_7S?$tile=InterfaceInc/8221006999G17S001_afternoon-light_sunrise-light&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/8221006999G17S001_afternoon-light_sunrise-light_va1?wid=184&hei=184&align=-1,0",
"Color": "Sunrise Light 105299"
},
{
"CatalogItemId": 14,
"CatalogItemName": "Alliteration",
"CatalogItemDescription": "Details",
"Collection": "Palindrome & Alliteration",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/6709006999G15S001_alliteration_mineral-persimmon_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_25_5S?$tile=InterfaceInc/6709006999G15S001_alliteration_mineralpersimmon&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/6709006999G15S001_alliteration_mineralpersimmon_va1?wid=184&hei=184&align=-1,0",
"Color": "Mineral/Persimmon 9724"
},
{
"CatalogItemId": 15,
"CatalogItemName": "B601",
"CatalogItemDescription": "Details",
"Collection": "Net Effect Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7414008999G15S001_b601_driftwood_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_05_5S?$tile=InterfaceInc/7414008999G15S001_b601_driftwood&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7414008999G15S001_b601_driftwood_va1?wid=184&hei=184&align=-1,0",
"Color": "Driftwood 102911"
},
{
"CatalogItemId": 16,
"CatalogItemName": "B602",
"CatalogItemDescription": "Details",
"Collection": "Net Effect Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7416002999G15S001_b602_north-sea_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_09_5S?$tile=InterfaceInc/7416002999G15S001_b602_north-sea&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7416002999G15S001_b602_north-sea_va1?wid=184&hei=184&align=-1,0",
"Color": "North Sea 102913"
},
{
"CatalogItemId": 17,
"CatalogItemName": "B603",
"CatalogItemDescription": "Details",
"Collection": "Net Effect Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7418002999G15S001_b603_north-sea_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_09_5S?$tile=InterfaceInc/7418002999G15S001_b603_north-sea&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7418002999G15S001_b603_north-sea_va1?wid=184&hei=184&align=-1,0",
"Color": "North Sea 102921"
},
{
"CatalogItemId": 18,
"CatalogItemName": "B701",
"CatalogItemDescription": "Details",
"Collection": "Net Effect Collection",
"InstallationViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7431001999G17A001_b701_black-sea_rs",
"ConfigurationViewImage": "https://interfaceinc.scene7.com/is/image/InterfaceInc/install_15_7S?$tile=InterfaceInc/7431001999G17S001_b701_black-sea&",
"DetailViewImage": "https://s7d4.scene7.com/is/image/InterfaceInc/7431001999G17S001_b701_black-sea_va1?wid=184&hei=184&align=-1,0",
"Color": "Black Sea 102888"
},
{
"CatalogItemId": 19,
"CatalogItemName": "1st Avenue - 2",
"CatalogItemDescription": "1st Avenue Details of CanadaSummer",
"Collection": null,
"InstallationViewImage": null,
"ConfigurationViewImage": null,
"DetailViewImage": null,
"Color": null
},
{
"CatalogItemId": 20,
"CatalogItemName": "2nd Avenue - 2",
"CatalogItemDescription": "2nd Avenue Details of CanadaSummer",
"Collection": null,
"InstallationViewImage": null,
"ConfigurationViewImage": null,
"DetailViewImage": null,
"Color": null
}];

example=sortJsonArray(example, 'CatalogItemName','asc');

  var c= example.length;
 console.log(c);
 
 var totalrows=c;
 var pagesize=8;
 var currentpage=1;
 var finalArray = [], 
	finalList = [];

		 var r=example
		while (example.length > 0) {
	    finalArray.push(r.splice(0, pagesize)); //splitting data into pages 
		}

if(typeof req.query.page !== 'undefined') {
		currentpage = +req.query.page;
}
		finalList = finalArray[+currentpage - 1]; //Show list of data from page 
		 
		
		 if(finalList==undefined){
			 res.send("No Data Found on this page")
		 }
		 else{
			 res.json(finalList);
		 }

 });


module.exports = router;
