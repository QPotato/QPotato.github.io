var Fish = {
    fish2time : function(fish){
        f = Fish.fishList.find(function(v) { return v.fname == fish;});
        return WeatherFinder.findWeather(f.zone, f.weather, f.prevWeather, f.time);
    },
    fishList : [
        {   
            fname : "Capsized_Squeaker",
            zone : "The Fringes", 
            weather : ["Fair Skies", "Clear Skies"],
            prevWeaher : [""], 
            time : [16]
        },
        {   
            fname : "Bulls_Bite",
            zone : "The Peaks", 
            weather : ["Clouds", "Dust Storms", "Wind", "Fog"],
            prevWeaher : [""], 
            time : [0, 8, 16]
        },
        {   
            fname : "Meditator",
            zone : "The Peaks", 
            weather : ["Clouds", "Dust Storms", "Wind", "Fog"],
            prevWeaher : [""], 
            time : [0, 8, 16]
        },
        {   
            fname : "Deemster",
            zone : "The Peaks", 
            weather : ["Wind"],
            prevWeaher : [""], 
            time : [0, 8]
        },
        {   
            fname : "Liopleurodon",
            zone : "The Ruby Sea", 
            weather : ["Thunder"],
            prevWeaher : [""], 
            time : [0, 8, 16]
        },
        {   
            fname : "Swordfish",
            zone : "The Ruby Sea", 
            weather : ["Clouds"],
            prevWeaher : [""], 
            time : [8]
        },
        {   
            fname : "Whitehorse",
            zone : "The Lochs", 
            weather : ["Clear Skies", "Clouds"],
            prevWeaher : [""], 
            time : [16]
        },
        {   
            fname : "Sculptor",
            zone : "The Lochs", 
            weather : ["Thunder", "Thunderstorms"],
            prevWeaher : [""], 
            time : [8, 16]
        },
        {   
            fname : "Hak_Bitterling",
            zone : "The Azim Steppe", 
            weather : ["Rain"],
            prevWeaher : [""], 
            time : [0]
        },
        {   
            fname : "Raitonfish",
            zone : "Yanxia", 
            weather : ["Rain", "Showers"],
            prevWeaher : [""], 
            time : [0, 8]
        },
        {   
            fname : "Silken_Koi",
            zone : "Yanxia", 
            weather : ["Rain"],
            prevWeaher : [""], 
            time : [0, 8, 16]
        }
    ]
};
