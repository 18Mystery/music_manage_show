import{ch as e,aZ as n}from"./index-CIrkHTpR.js";const s=async(t={})=>e.post(`${n.url}/api/user/signin`,t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(a=>a.data),o=async(t={})=>e.get(`${n.url}/api/verify/test`,{params:t}).then(a=>a.data),p=async(t={})=>e.get(`${n.url}/api/user/list`,{params:t}).then(a=>a.data),c=async(t={})=>e.post(`${n.url}/api/photo/upload`,t,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>a.data),d=async(t={})=>e.post(`${n.url}/api/photo/delete`,t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(a=>a.data),i=async(t={})=>e.post(`${n.url}/api/user/info`,t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(a=>a.data),u=async()=>e.get("http://ip-api.com/json").then(t=>t.data).catch(t=>{console.error("无法获取IP地址信息：",t)}),l=async(t={})=>e.post(`${n.url}/api/banner/add`,t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(a=>a.data),h=async(t={})=>e.post(`${n.url}/api/banner/remove`,t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(a=>a.data),y=async(t={})=>e.get(`${n.url}/api/banner/list`,{params:t}).then(a=>a.data);export{c as a,l as b,i as c,u as d,y as g,d as p,h as r,s,o as t,p as u};
