const cfgFile = require('./../../cfg.json');

const config = {
    get : (dotPath) => {
        const cfg = cfgFile[cfgFile.cfg.kit];
        let pathArray = dotPath.split('.');
        let currentItem = null;
        pathArray.forEach((item,index)=>{
            if(index === 0) currentItem = cfg[item];
            else currentItem = currentItem[item];
        })
        return currentItem;
    },
    getAll : ()=>{
        return cfgFile;
    }
}

export default config;
