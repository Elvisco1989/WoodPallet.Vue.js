Vue.createApp({
    data(){
        return{
            woodPallet:{
                "Id":null,
                "Brand":null,
                "Price":null,
                "Quality":null,
                

            },
            woodStock:[{"Id":1,
            "Brand":"Biowood",
            "Price":4995,
            "Quality":4},{"Id":2,
            "Brand":"Biowood",
            "Price":5195,
            "Quality":4},
            {"Id":3,
            "Brand":"BilligPille",
            "Price":4125,
            "Quality":5},
            {"Id":4,
            "Brand":"GoldenWoodPellet",
            "Price":5995,
            "Quality":5},
            {"Id":5,
            "Brand":"GoldenWoodPellet",
            "Price":5795,
            "Quality":5}],

            targetid:null,
            foundwood:null
        }

    },
    methods:{
        GetWoodById(){
            this.foundwood = this.woodStock.find(w=>w.Id===this.targetid)
            if (!this.foundwood) {
                console.log("Wood not found"); // Or do something with the found wood object
            } 
            this.targetid = null
        },
        CreatewoodPallet(){
            this.woodStock.push({Id:this.woodPallet.Id,Brand:this.woodPallet.Brand,Price:this.woodPallet.Price,Quality:this.woodPallet.Quality});

           this.woodPallet.Id=null
           this.woodPallet.Price=null
           this.woodPallet.Brand=null
           this.woodPallet.Quality=null

        }
    }
}).mount("#app")