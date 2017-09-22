// JavaScript Document
var parentNodeCount = 0;
   var nodeCount = 0;
    
	function MsgOkCancel() 
	{ 
		var fRet; 
		fRet = confirm('do you want to delete this record ?'); 
 
	} 
    function onParentNodeImageClick(node) {
       var divNode = document.getElementById(node.name.replace("parentNodeImage","parentNodeDiv"));
       var imageNode = node;
   
       if (divNode.style.display == "none"){
           imageNode.src = "icon_minus.jpeg";
           divNode.style.display = "";
       }
       else {
           imageNode.src = "icon_plus.jpeg";
           divNode.style.display = "none";
       }
   }
   function onParentNodeTextClick(node) {
       var divNode = document.getElementById(node.name.replace("parentNodeText","parentNodeDiv"));
       var imageNode = document.getElementsByName(node.name.replace("parentNodeText","parentNodeImage"))[0];
   
       if (divNode.style.display == 'none') {
           //imageNode.src = "minus.png";
		   imageNode.src =  "icon_minus.jpeg";
           divNode.style.display = 'block';
       }
       else {
           imageNode.src = "icon_plus.jpeg";
           divNode.style.display = 'none';
       }
	 //  MsgOkCancel();
   }
   
   function onNodeTextClick(node) {
       var imageNode = document.getElementsByName(node.name.replace("nodeText","nodeImage"))[0];
       setSelectedNode(imageNode);
   }
   function onNodeImageClick(node, url, target){
       var imageNode = node
       setSelectedNode(imageNode);
   }
   
   function setSelectedNode(imageNode){
       for (index = 0; index < this.nodeCount; index++) {
         //  document.getElementsByName("nodeImage" + index)[0].src = "page.jpeg";
        document.getElementsByName("nodeImage" + index)[0].src = "";
       }
      // imageNode.src = "pageSelected.jpeg";
  	 imageNode.src = "";
  
  }
   function expandAll(){
       for (index = 0; index < this.parentNodeCount; index++) {
           document.getElementById("parentNodeDiv" + index).style.display = "";
           document.getElementsByName("parentNodeImage" + index)[0].src = "icon_minus.jpeg";  
       }
   }
   function collapseAll(){
       for (index = 0; index < this.parentNodeCount; index++) {
           document.getElementById("parentNodeDiv" + index).style.display = "none";
           document.getElementsByName("parentNodeImage" + index)[0].src = "icon_plus.jpeg";
       }
   }
   
   function startParentNode(text){
       document.write('<table border="0" cellpadding="1" cellspacing="0">');
       document.write('  <tr>');
       document.write('    <td><img src="icon_plus.jpeg"; name="parentNodeImage' + parentNodeCount + '" onclick="onParentNodeImageClick(this)" style="cursor:pointer;"/></td>');
       document.write('    <td><a class="parentTreeNode" name="parentNodeText' + parentNodeCount + '" onclick="onParentNodeTextClick(this)" style="cursor:pointer;">');
       document.write(text);
       document.write('</a>');
       document.write('  </td>');
       document.write('  </tr>');
       document.write('  <tr>');
       document.write('    <td></td><!-- SPACING -->');
       document.write('    <td><DIV id="parentNodeDiv' + parentNodeCount + '" style="display:none">'); 
       this.parentNodeCount = this.parentNodeCount + 1;
   }
   function endParentNode(){
       document.write('</DIV></td>');
       document.write('  </tr>');
       document.write('</table>');
   }
   function addNode(text, url, target){
       document.write('<table border="0" cellpadding="1" cellspacing="0">');
       document.write('  <tr>');
       document.write('    <td>');
       document.write('<a href="' + url + '" target="' + target + '" onfocus="this.hideFocus=true;" style="outline-style:none;">');
  //     document.write('<img src="icon_system.png" border="0" name="nodeImage' + this.nodeCount + '" onclick="onNodeImageClick(this);" />');
         document.write('<img src="" border="0" name="nodeImage' + this.nodeCount + '" onclick="onNodeImageClick(this);" />');
       document.write('</a>');
       document.write('    </td>');
       document.write('    <td><a name="nodeText' + this.nodeCount + '" onclick="onNodeTextClick(this);" href="' + url + '" target="' + target + '" class="normalTreeNode" onfocus="this.hideFocus=true;" style="outline-style:none;">' + text + '</a></td>');
       document.write('  </tr>');
       document.write('</table>');
       this.nodeCount = this.nodeCount + 1;
   }
   function addExpandCollapseAll(){
       document.write('<table width="100%" border="0">');
       document.write('  <tr>');
       document.write('    <td align="right" width="50%"><a onclick="expandAll();" class="expandCollapse" style="cursor:pointer;">Expand All</a></td>');
      document.write('    <td alight="left" width="50%"><a onclick="collapseAll();" class="expandCollapse" style="cursor:pointer;">Collapse All</a></td>');
      document.write('  </tr>');
      document.write('</table>');  
  }