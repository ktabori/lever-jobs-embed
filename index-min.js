window.loadLeverJobs=function(e){var t=window.location.href,n="?lever-";e.accountName=e.accountName.toLowerCase();var u=document.getElementById("lever-jobs-container")||document.body;if(0<=t.indexOf(n)){var r=t.split(n);"?lever-"+r[1]}var o={"&":"&amp;","<":"&lt;",">":"&gt;"};function a(e){return o[e]||e}function f(e){return void 0===e?"":e.replace(/[&<>]/g,a)}function g(e){return""==e||void 0===e?"uncategorized":(e=f(e)).replace(/\s+/gi,"")}var s,i,d,l="https://api.lever.co/v0/postings/"+e.accountName+"?group=team&mode=json&department="+e.department;if(e.includeCss){s="https://andreasmb.github.io/lever-jobs-embed/embed-css/style.css",i=document.head,(d=document.createElement("link")).type="text/css",d.rel="stylesheet",d.href=s,i.appendChild(d)}var p=new XMLHttpRequest;p.open("GET",l,!0),p.responseType="json",p.onload=function(){200==p.status?function(e){if(e){"string"==typeof e&&(e=JSON.parse(e));for(var t="",n=[],r=0;r<e.length;r++)if(e[r]&&e[r].postings&&0<e[r].postings.length){g(f(e[r].title||"Uncategorized"));for(j=0;j<e[r].postings.length;j++){var o=e[r].postings[j],a=o.categories.team||"Uncategorized",s=g(a),i=o.categories.department||"Uncategorized",d=g(i);o.hostedUrl;function l(e){return e.department==d}function p(e){return e.team==s}-1===n.findIndex(l)?(newDepartmentToAdd={department:d,departmentTitle:i,teams:[{team:s,teamTitle:a,postings:[]}]},n.push(newDepartmentToAdd)):(departmentIndex=n.findIndex(l),newTeamToAdd={team:s,teamTitle:a,postings:[]},-1===n[departmentIndex].teams.map(function(e){return e.team}).indexOf(s)&&n[departmentIndex].teams.push(newTeamToAdd)),departmentIndex=n.findIndex(l),teamIndex=n[departmentIndex].teams.findIndex(p),n[departmentIndex].teams[teamIndex].postings.push(o)}}n.sort(function(e,t){var n=e.department.toLowerCase(),r=t.department.toLowerCase();return n<r?-1:r<n?1:0});for(r=0;r<n.length;r++){if(2<=n.length)var m=!0;for(m&&(t+='<section class="lever-department" data-department="'+n[r].departmentTitle+'"><h3 class="lever-department-title">'+f(n[r].departmentTitle)+"</h3>"),j=0;j<n[r].teams.length;j++){t+='<ul class="lever-team" data-team="'+n[r].teams[j].teamTitle+'"><li><h4 class="lever-team-title">'+f(n[r].teams[j].teamTitle)+"</h4><ul>";for(var c=0;c<n[r].teams[j].postings.length;c++)t+='<li class="lever-job" data-department="'+n[r].departmentTitle+'" data-team="'+n[r].teams[j].postings[c].categories.team+'" data-location="'+n[r].teams[j].postings[c].categories.location+'"data-work-type="'+n[r].teams[j].postings[c].categories.commitment+'"><a class="lever-job-title" href="'+n[r].teams[j].postings[c].hostedUrl+'">'+f(n[r].teams[j].postings[c].text)+'</a><span class="lever-job-tag">'+(f(n[r].teams[j].postings[c].categories.location)||"")+"</span></li>";t+="</ul></li></ul>"}m&&(t+="</section>")}t+="</ul>",u.innerHTML=t,window.dispatchEvent(new Event("leverJobsRendered"))}}(p.response):(console.log("Error fetching jobs."),u.innerHTML="<p class='lever-error'>Error fetching jobs.</p>")},p.onerror=function(){console.log("Error fetching jobs."),u.innerHTML="<p class='lever-error'>Error fetching jobs.</p>"},p.send()},window.loadLeverJobs(window.leverJobsOptions),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=arguments[1],o=0;o<n;){var a=t[o];if(e.call(r,a,o,t))return o;o++}return-1},configurable:!0,writable:!0}),function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();
