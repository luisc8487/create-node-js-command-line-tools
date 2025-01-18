#!/usr/bin/env node

const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const path = require("path");

// METYHOD #2 
// const lstat = util.promisify(fs.lstat);

// METHOD #3 
const {lstat} = fs.promises;
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }
const statPromises = filenames.map((filename) =>{
  return lstat(filename);
});
const allStats = await Promise.all(statPromises);

for(let stats of allStats){
  const index = allStats.indexOf(stats);

  if(stats.isFile()){
    console.log(chalk.blue(filenames[index]));
  }else{
    console.log(chalk.red.bold(filenames[index]));
  }

  // console.log(filenames[index], stats.isFile());
}
  // METHOD #1 

  // const lstat = () =>{
  //   return new Promise((resolve, reject)=>{
  //     fs.lstat(filenames, (err, stats)=>{
  //       if(err){
  //         reject(err);
  //       }

  //       resolve(stats);
  //     });
  //   });
  // };
  // console.log(filenames);



  // BAD CODE OPTION #1
  // const allStats = new Array(filenames.length).fill(null);
  // for(let filename of filenames){
  //   const index = filenames.indexOf(filename);
  //   fs.lstat(filename, (err, stats)=>{
  //     if(err){
  //       console.log(err);
  //     }
  //     allStats[index] = stats;

  //     const ready = allStats.every((stats) => {
  //       return stats
  //     });

  //     if(ready){
  //       allStats.forEach((stats, index) => {
  //         console.log(filenames[index], stats.isFile());
  //       })
  //     }
  //     // console.log(filename, stats.isFile());
  //   });
  // }
});
