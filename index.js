const youtuber = {
    list: {
        business:{
            youtuber: [
                { name: "しまぶー", age: 20, teachProgramming() {}},
                { name: "Ras", age: 23, teachProgramming() {}} 
            ],
            teach() {}
        },
        entertainment: {
            youtuber: [{ name:"渋谷ハル"},{ name: "ヒカキン"}],
            makeSmile() {}
        }
    },
    plan() {},
    uploadVideo() {}
};
const thisYoutuber = youtuber.list.business.youtuber[0];
 
console.log (thisYoutuber.name + "は" + thisYoutuber.age + "歳です！来年は" + (thisYoutuber.age+1) + "歳です！！"); 