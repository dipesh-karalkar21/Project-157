AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
      
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "hulk",
          title: "World War Hulk",
          url: "./assests/Hulk.jpg",
        },
        {
          id: "deadpool",
          title: "Deapool Bad Blood",
          url: "./assests/Deadpool.jpg",
        },
  
        {
          id: "ironman",
          title: "Invincible Iron Man",
          url: "./assests/Ironman.webp",
        },
        {
          id: "spiderman",
          title: "The Amazing Spiderman",
          url: "./assests/Spiderman.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        const rectEl = this.rect(position,item.id , item);
  
        const borderEl = this.border(item);
  
        const textEl = this.text(item,position);
        
        
       rectEl.appendChild(borderEl);
       rectEl.appendChild(textEl);
       this.placesContainer.appendChild(rectEl);
  
      }
    },
  rect:function(position , id , item){
      
      const entity = document.createElement("a-entity");
      entity.setAttribute("id",id);
      entity.setAttribute("visible",true);
      entity.setAttribute("geometry",{
        primitive : "plane",
        height : 28,
        width : 20,   
      });
      entity.setAttribute("position",position);
      entity.setAttribute("material",{
        src : item.url,
      })
      return entity;
    },
    border:function(item){
      const entity = document.createElement("a-entity");
      entity.setAttribute("visible",true);
      entity.setAttribute("geometry",{
        primitive : "plane",
        height : 30,
        width : 22   
      });
      entity.setAttribute("material",{
        src : item.url,
        opacity : 0.9,
      })    
      return entity;
    },
    text:function(item,position){
      const pos = position;
      pos.y = -25;
      const entity = document.createElement("a-entity");
      entity.setAttribute("visible",true);
      entity.setAttribute("position" , pos );
      entity.setAttribute("text",{
        value : item.title ,
        color : "black",
        width : 65,
        align : "center",
        font : "exo2bold",
  
      })
      return entity;
    },
    
  });
  