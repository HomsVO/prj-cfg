import cfgFile from './../../cfg.json';

const config = {
    get : (dotPath) => {
        const cfg = cfgFile[cfgFile.cfg.env];
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
