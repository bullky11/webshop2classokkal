 import Webitemshirt from "./Webitemshirt.js";
 import SHIRTS from "./Termekek.js";
$(function(){
   const ARTICLE=$("article")
   for (let index = 0; index < SHIRTS.length; index++) {
    const polo1=new Webitemshirt(ARTICLE,SHIRTS[index]);
   }
   
  
 
})