declare var Vue:any;

    Vue.createApp({
        data() {
            return {
                workoutCounter: 3,
               
                rows: [{                    
                        weight:[101,102,103,104,105],
                        rep:[7,6,7,5,5], 
                        date: new Date().toISOString().slice(0, 10),
                        
    
                    }]
            };
        },
        methods: {
            setStartingWeight: function () {
                this.rows[0].weight = this.startWeight;
            },
            endWorkout: function () {
                // this.rows.weight = this.startingWeight
                this.workoutCounter ++;
                // this.rows[0].weight = this.rows[0].weight+5;
                let newWeight=[0,0,0,0,0]
                for (let i = 0; i < 5 ; i++) {
                    if (this.rows[0].rep[i]>5) {
                        newWeight[i] = this.row.weight[i]+=5;
                        
                    } 
                }

                this.rows.push({
                    weight: [newWeight[0],newWeight[1],newWeight[2],newWeight[3],newWeight[4]],
                    date: new Date().toISOString().slice(0, 10),
                    rep:[0,0,0,0,0],
                });
            }
        }        
    }).mount('main');
    