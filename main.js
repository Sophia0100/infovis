src="http://d3js.org/d3.v3.min.js"

$(document).ready(function() {
	var start = new Date();

	/*var publicationsJSON = [{"id":"pub_1","year":"2015","authors":[{"name":"Daniel Buschek","url":"http://www.medien.ifi.lmu.de/team/daniel.buschek/"},{"name":"Alexander De Luca","url":"http://www.medien.ifi.lmu.de/team/alexander.de.luca/"},{"name":"Florian Alt","url":"http://www.medien.ifi.lmu.de/team/florian.alt/"}],"title":{"url":"/forschung/publikationen/detail?pub=buschek2015chi","name":"Improving Accuracy, Applicability and Usability of Keystroke Biometrics on Mobile Touchscreen Devices"},"description":{"html":""},"additionalLinks":[],"bibfile":null,"downloads":[],"award":false},{"id":"pub_2","year":"2015","authors":[{"name":"Daniel Buschek","url":"http://www.medien.ifi.lmu.de/team/daniel.buschek/"},{"name":"Florian Alt","url":"http://www.medien.ifi.lmu.de/team/florian.alt/"}],"title":{"url":"/forschung/publikationen/detail?pub=buschek2015iui","name":"TouchML: A Machine Learning Toolkit for Modelling Spatial Touch Targeting Behaviour"},"description":{"html":""},"additionalLinks":[],"bibfile":null,"downloads":[],"award":false},{"id":"pub_3","year":"2015","authors":[{"name":"Simon Stusak","url":"http://www.medien.ifi.lmu.de/team/simon.stusak/"}],"title":{"url":"/forschung/publikationen/detail?pub=stusakTEI2015GSC","name":"Exploring the Potential of Physical Visualizations"},"description":{"html":"Graduate Student Consortium at the 9th International ACM Conference on Tangible, Embedded and Embodied Interaction (TEI '15), Standford, USA, January 15-19, 2015"},"additionalLinks":[],"bibfile":null,"downloads":[],"award":false},{"id":"pub_5","year":"2014","authors":[{"name":"Alexander Wiethoff","url":"http://www.medien.ifi.lmu.de/team/alexander.wiethoff/"},{"name":"Thomas Bauer"},{"name":"Sven Gehring"}],"title":{"url":"/forschung/publikationen/detail?pub=wiethoff2014mab","name":"Investigating Multi-User Interactions on Interactive   Media Facades "},"description":{"html":"In Proceedings of the 3rd International ACM Conference Media Architecture Biennale, MAB '14. Aarhus, Denmark November 19 - 22, 2014.  "},"additionalLinks":[],"bibfile":null,"downloads":["/pubdb/publications/pub/wiethoff2014mab/wiethoff2014mab.pdf"],"award":false},{"id":"pub_6","year":"2014","authors":[{"name":"Simon Stusak","url":"http://www.medien.ifi.lmu.de/team/simon.stusak/"},{"name":"Aurélien Tabard","url":"http://www.medien.ifi.lmu.de/team/aurelien.tabard/"},{"name":"Franziska Sauka"},{"name":"Rohit Ashok Khot"},{"name":"Andreas Butz","url":"http://www.medien.ifi.lmu.de/team/andreas.butz/"}],"title":{"url":"/forschung/publikationen/detail?pub=stusak2014vis","name":"Activity Sculptures: Exploring the Impact of Physical Visualizations on Running Activity"},"description":{"html":"IEEE Transactions on Visualization and Computer Graphics (Proceedings Scientific Visualization / Information Visualization 2014), vol. 20, no. 12, pp. 2201-2210, Dec. 2014, doi:10.1109/TVCG.2014.2352953"},"additionalLinks":[],"bibfile":"/pubdb/publications/pub/stusak2014vis/stusak2014vis.bib","downloads":["/pubdb/publications/pub/stusak2014vis/stusak2014vis.pdf"],"award":false},{"id":"pub_7","year":"2014","authors":[{"name":"Alexander Wiethoff","url":"http://www.medien.ifi.lmu.de/team/alexander.wiethoff/"},{"name":"Marius Hoggenmueller"}],"title":{"url":"/forschung/publikationen/detail?pub=wiethoff2014nordichi","name":"Orkhestra - On the design of interactive media architecture for public environments"},"description":{"html":"In Extended Abstracts of the 8th Nordic Conference on Human-Computer Interaction, NordiCHI'14. Helsinki, Finland, October 26-30, 2014."},"additionalLinks":[],"bibfile":null,"downloads":["/pubdb/publications/pub/wiethoff2014nordichi/wiethoff2014nordichi.pdf"],"award":false}]
		authorsJSON = [{"name":"Daniel Buschek","publications":["pub_1","pub_2","pub_11","pub_53","pub_91","pub_92"],"url":"http://www.medien.ifi.lmu.de/team/daniel.buschek/"},{"name":"Alexander De Luca","publications":["pub_1","pub_8","pub_11","pub_21","pub_46","pub_59","pub_60","pub_78","pub_80","pub_83","pub_88","pub_89","pub_90","pub_112","pub_113","pub_117","pub_126","pub_140","pub_170","pub_209","pub_220","pub_242","pub_244","pub_276","pub_293","pub_299","pub_310","pub_323","pub_331","pub_358","pub_373","pub_375","pub_376","pub_379","pub_382","pub_398","pub_417","pub_438","pub_441","pub_442","pub_456","pub_464","pub_467","pub_489","pub_492","pub_501","pub_502","pub_517","pub_518","pub_523","pub_524","pub_530","pub_532","pub_555","pub_571","pub_594","pub_617","pub_637"],"url":"http://www.medien.ifi.lmu.de/team/alexander.de.luca/"},{"name":"Florian Alt","publications":["pub_1","pub_2","pub_12","pub_22","pub_28","pub_29","pub_30","pub_31","pub_33","pub_34","pub_35","pub_39","pub_47","pub_48","pub_49","pub_52","pub_54","pub_63","pub_64","pub_73","pub_76","pub_97","pub_98","pub_99","pub_100","pub_101","pub_132","pub_134","pub_135","pub_146","pub_147","pub_158","pub_159","pub_164","pub_165","pub_167","pub_172","pub_173","pub_174","pub_175","pub_176","pub_178","pub_179","pub_195","pub_196","pub_218","pub_224","pub_226","pub_227","pub_228","pub_229","pub_236","pub_245","pub_249","pub_272","pub_277","pub_288","pub_308","pub_309","pub_315","pub_316","pub_317","pub_318","pub_333","pub_336","pub_347","pub_364","pub_370","pub_384","pub_389","pub_404","pub_405","pub_406","pub_447","pub_552","pub_566"],"url":"http://www.medien.ifi.lmu.de/team/florian.alt/"},{"name":"Simon Stusak","publications":["pub_3","pub_6","pub_10","pub_11","pub_36","pub_50","pub_55","pub_80","pub_93","pub_114"],"url":"http://www.medien.ifi.lmu.de/team/simon.stusak/"},{"name":"Alexander Wiethoff","publications":["pub_5","pub_7","pub_19","pub_20","pub_26","pub_95","pub_96","pub_102","pub_107","pub_118","pub_127","pub_144","pub_150","pub_152","pub_183","pub_193","pub_194","pub_199","pub_200","pub_208","pub_231","pub_238","pub_243","pub_256","pub_260","pub_261","pub_290","pub_292","pub_301","pub_302","pub_312","pub_326","pub_338","pub_354","pub_391"],"url":"http://www.medien.ifi.lmu.de/team/alexander.wiethoff/"},{"name":"Thomas Bauer","publications":["pub_5"]},{"name":"Sven Gehring","publications":["pub_5","pub_20","pub_107","pub_150","pub_199","pub_238","pub_243"]},{"name":"Aurélien Tabard","publications":["pub_6","pub_58","pub_71","pub_79","pub_80","pub_93","pub_131","pub_317"],"url":"http://www.medien.ifi.lmu.de/team/aurelien.tabard/"},{"name":"Franziska Sauka","publications":["pub_6"]},{"name":"Rohit Ashok Khot","publications":["pub_6"]},{"name":"Andreas Butz","publications":["pub_6","pub_11","pub_13","pub_15","pub_17","pub_18","pub_23","pub_24","pub_25","pub_32","pub_44","pub_45","pub_50","pub_57","pub_58","pub_66","pub_67","pub_68","pub_69","pub_71","pub_74","pub_75","pub_77","pub_80","pub_82","pub_83","pub_84","pub_85","pub_87","pub_93","pub_94","pub_96","pub_103","pub_104","pub_105","pub_106","pub_110","pub_111","pub_114","pub_125","pub_131","pub_133","pub_136","pub_141","pub_143","pub_151","pub_153","pub_154","pub_157","pub_166","pub_169","pub_183","pub_185","pub_187","pub_188","pub_201","pub_208","pub_216","pub_217","pub_222","pub_233","pub_238","pub_239","pub_255","pub_257","pub_260","pub_267","pub_268","pub_269","pub_270","pub_274","pub_290","pub_295","pub_301","pub_302","pub_303","pub_322","pub_323","pub_324","pub_326","pub_329","pub_339","pub_340","pub_341","pub_343","pub_351","pub_359","pub_365","pub_366","pub_367","pub_374","pub_382","pub_388","pub_391","pub_394","pub_407","pub_408","pub_409","pub_422","pub_423","pub_434","pub_466","pub_467","pub_469","pub_470","pub_474","pub_505","pub_510","pub_511","pub_520","pub_527","pub_531","pub_549","pub_560","pub_573","pub_574","pub_576","pub_577","pub_608","pub_609","pub_610","pub_612","pub_613","pub_619","pub_624","pub_638","pub_643","pub_644","pub_645","pub_649","pub_650","pub_651","pub_652","pub_653","pub_663","pub_668","pub_669","pub_672","pub_673","pub_674","pub_678","pub_681","pub_682","pub_688","pub_693","pub_694","pub_695","pub_703","pub_704","pub_705","pub_706","pub_708","pub_712","pub_713","pub_715","pub_721","pub_722","pub_723","pub_726","pub_730","pub_731","pub_736","pub_739","pub_742","pub_743","pub_745","pub_747","pub_748","pub_750"],"url":"http://www.medien.ifi.lmu.de/team/andreas.butz/"},{"name":"Marius Hoggenmueller","publications":["pub_7","pub_26"]},{"name":"Emanuel von Zezschwitz","publications":["pub_8","pub_11","pub_21","pub_46","pub_50","pub_59","pub_78","pub_80","pub_88","pub_89","pub_94","pub_112","pub_113","pub_114","pub_117","pub_140","pub_143","pub_148","pub_306","pub_417"],"url":"http://www.medien.ifi.lmu.de/team/emanuel.von.zezschwitz/"},{"name":"Heinrich Hussmann","publications":["pub_8","pub_9","pub_11","pub_27","pub_32","pub_37","pub_42","pub_46","pub_50","pub_59","pub_60","pub_72","pub_78","pub_80","pub_88","pub_90","pub_94","pub_113","pub_114","pub_117","pub_122","pub_140","pub_143","pub_170","pub_182","pub_188","pub_202","pub_217","pub_219","pub_221","pub_225","pub_242","pub_244","pub_263","pub_264","pub_274","pub_275","pub_276","pub_289","pub_291","pub_299","pub_310","pub_312","pub_331","pub_338","pub_344","pub_349","pub_350","pub_355","pub_356","pub_357","pub_358","pub_360","pub_363","pub_386","pub_390","pub_393","pub_398","pub_403","pub_411","pub_412","pub_417","pub_418","pub_419","pub_420","pub_429","pub_452","pub_480","pub_489","pub_501","pub_503","pub_507","pub_514","pub_526","pub_529","pub_532","pub_540","pub_543","pub_554","pub_563","pub_580","pub_603","pub_607","pub_618","pub_646","pub_647","pub_648","pub_655","pub_656","pub_661","pub_662","pub_667","pub_671","pub_676","pub_679","pub_680","pub_686","pub_689","pub_690","pub_691","pub_692","pub_697","pub_698","pub_699","pub_700","pub_701","pub_702","pub_709","pub_710","pub_711","pub_714","pub_717","pub_718","pub_719","pub_720","pub_725","pub_727","pub_728","pub_729","pub_733","pub_734","pub_735","pub_738","pub_740","pub_741"],"url":"http://www.medien.ifi.lmu.de/team/heinrich.hussmann/"}];	
	*/
	// create a new pubDB json object
	var converter = new pubDB.json();
 
	// initialize -> get a jQuery object of html contents in callback function
	converter.init(function(dbObject) {
		// pass dbObject to buildJSON method -> get a json object back (<- created on client side)
		converter.buildPublicationJSON(dbObject, function(pubData) {
			publicationsJSON = pubData;
			//console.log(JSON.stringify(publicationsJSON));

			converter.buildAuthorJSON(pubData, function(authorData) {
				authorsJSON = authorData;
				//console.log(JSON.stringify(authorsJSON));


				$('img').hide();
				$('span').text(new Date() - start + "ms");

				$('h2').show();
				$('#publications').val(JSON.stringify(publicationsJSON)).show();
				$('#authors').val(JSON.stringify(authorsJSON)).show();
			});
		});
	});

	/*('img').hide();
	$('span').text(new Date() - start + "ms");

	$('h2').show();
	$('#publications').val(JSON.stringify(publicationsJSON)).show();
	$('#authors').val(JSON.stringify(authorsJSON[0])).show();*/
	

	// $.get("http://localhost:3000/publications", function(data) {
	// 		console.log("server", new Date() - start);
	// })
	
	/*#################   Code der Bubbleseite ###############*/
	

var jahr = "Du siehst alle Jahre";
var autor = "Du siehst alle Autoren, wenn du in ein Jahr klickst";
var infotext = "zusammen geschrieben mit// Link// etc";
//d3.select("#jahr").text(function(d) {return "Jahr: " + jahr});
//d3.select("#autor").text(function(d) {return "Autor: " + autor});
d3.select("#infotext").text(function(d) {return infotext});

var clickedPub = "pub_1";

var margin = 20,
    diameter = 640;

var color = d3.scale.linear()
    .domain([-1, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);

var pack = d3.layout.pack()
    .padding(2)
    .size([diameter - margin, diameter - margin])
    .value(function(d) { return d.size; })

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
  .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

d3.json("staticData.json", function(error, root) {
  if (error) return console.error(error);

  var focus = root,
      nodes = pack.nodes(root),
      view;

  var circle = svg.selectAll("circle")
      .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
      .style("fill", function(d) { return d.children ? color(d.depth) : null; })
      .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

  var text = svg.selectAll("text")
      .data(nodes)
    .enter().append("text")
      .attr("class", "label")
      .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
      .style("display", function(d) { return d.parent === root ? null : "none"; })
      .text(function(d) { return d.name; });

  var node = svg.selectAll("circle,text");

  d3.select("body")
      .style("background", color(-1))
      .on("click", function() { zoom(root); });
  
  
  
  
  /*### klick auf Leaf soll infos zeigen ##*/

	$( ".node--leaf" ).click(function() {

		var clickedPub = this.__data__.name;
		
		var person = this.__data__.parent.name;
		var jahr = this.__data__.parent.parent.name;
		var mit = "";
	
		for(var i=0; i < publicationsJSON.length; i++) {
			if (publicationsJSON[i].id == clickedPub) {
				
				for(var j=0; j < publicationsJSON[j].authors.length; j++){
						mit = mit + ", " + publicationsJSON[i].authors[j].name
						+ "(" +  publicationsJSON[i].authors[j].url + ")";
				}
				
				
				var infotext = "Publikation: " + clickedPub 
									+ " ### Jahr: " + publicationsJSON[i].year 
									+ " ### Autoren: " 
			//						 + person + " mit " 
									 + mit;
				console.log(publicationsJSON[i].year);
				d3.select("#infotext").text(infotext);
			}
		}
		//d3.select("#infotext").text(function(d) {return infotext});
		
	});

  /*### klick ende ##*/
  
  
  /*####### Hover gleiche Leafs  #########*/
  
  /*die erste Funktion wird ausgeführt, wenn die Maus drauf geht. die zweite, wenn sie wieder runter geht*/
	$( ".node--leaf" ).hover(function() {
  		var leaf = this.__data__.name;
  		
  		$( ".node--leaf" ).each(function() {
  			if(this.__data__.name == leaf) {
  				this.style.fill = "yellow";
  			}
  		});
  		/*for(var i=0; i < publicationsJSON.length; i++){
			
			if (circle.node.node--leaf.__data__.name == leaf){ 
				alert("es gibt mich doppelt");
			}
		}*/
		
  	}, function() {
  		var leaf = this.__data__.name;
  		$( ".node--leaf" ).each(function() {
  			
  				this.style.fill = "white";
  			
  		});
  	});
/*###### ende hover gleiche Leafs  #####*/  
  
  
  /*########  route anzeigen beim Klick/zoomen (alle Ebenen)  ########*/
  $( ".node" ).click(function() {
	
		var route = this.__data__.name;
		var parent = this.__data__.parent.name;
		
/*		if(this.__data__.parent.class == ".node--root"){
				d3.select("#info").text("Du befindest Dich hier: " + route);
		} else if(this.__data__.child.class == ".node--leaf"){
				parent = this.__data__.parent.__data__.parent.name + " - " + parent;
				d3.select("#info").text("Du befindest Dich hier: " + parent + " - " + route);
		}*/
		
		d3.select("#info").text("Du befindest Dich hier: " + parent + " - " + route);

	});
  
  
  /*#####  maus zeigt auf..  ####*/
  
  $( ".node" ).hover(function(){
  		//anzeigen wie die Node heißt
		d3.select("#maus").text(this.__data__.name);  
  	
  	});

  
  
  zoomTo([root.x, root.y, root.r * 2 + margin]);

  function zoom(d) {
  	
    var focus0 = focus; focus = d;

    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.selectAll("text")
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
        .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
        
        
<!--    d3.select("#jahr").append("p").text(function(d) {return "42"});-->
  //  d3.select("#jahr").text(function(d) {return "Jahr: " + publicationsJSON[0]});
 <!--    d3.select("#autor").html(function(d) {return "Autor: " + d});
    -->
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }
  
  
 // document.getElementById("info").appendChild(infotext);
  
});

d3.select(self.frameElement).style("height", diameter + "px");

<!-- d3.select(".node--leaf").style("fill", "#8B0000" );-->

	
});
	