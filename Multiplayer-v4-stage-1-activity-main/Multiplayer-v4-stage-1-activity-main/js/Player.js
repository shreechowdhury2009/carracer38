class Player {
  constructor() {
   
  }
getcount(){
  var playerCountref = database.ref("playercount")
  playerCountref.on("value",(data)=>{
    playerCount=data.val()
  })
}
updateCount(count){
  database.ref("/").update({
   playerCount:count
  })
}
  
}
