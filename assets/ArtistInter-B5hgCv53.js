import{a as h,B as n,c as w,f as m,D as t,E as x,g as c,G as E,o as C}from"./index-CIrkHTpR.js";import{E as y}from"./el-pagination-B3aWTkaG.js";import{a as z,b as B}from"./el-table-column-_zCzBF_m.js";/* empty css                 */import"./isEqual-Dui4OJo0.js";import"./index-8iLFy1R2.js";const A={class:"user-list"},N={class:"page"},G=h({__name:"ArtistInter",setup(P){const s=n([]);let u=n(0),r=n(1),a=n(11);const _=async(o=1,l=10)=>{await E.getArtistPlayCount({page:o,pageSize:l}).then(e=>{let{code:p,total:i,result:f}=e;if(console.log(e),p==200){let v=f.map((g,b)=>(g.index=b+1,g));s.value=v,u.value=i,console.log(s.value)}else console.log("获取歌手交互数据列表失败")})},d=o=>{r.value=o,_(r.value,a.value)};return _(r.value,a.value),(o,l)=>{const e=B,p=z,i=y;return C(),w("div",A,[l[0]||(l[0]=m("h3",null,"歌手交互数据列表",-1)),t(p,{data:s.value,style:{width:"100%"}},{default:x(()=>[t(e,{prop:"index",label:"序号",width:"320"}),t(e,{label:"歌手名称",prop:"artist_name"}),t(e,{label:"关注次数",prop:"follow_count"})]),_:1},8,["data"]),m("div",N,[t(i,{"page-size":c(a),"pager-count":c(a),layout:"prev, pager, next",total:c(u),onChange:d},null,8,["page-size","pager-count","total"])])])}}});export{G as default};
