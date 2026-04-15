(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=(e,t)=>{var n=0;return t.map(t=>{e[n++]=t.x,e[n++]=t.y,e[n++]=t.z}),e},t=t=>{var n=[],r=[];return t.faces.map(e=>{n.push(t.vertices[e.a],t.vertices[e.b],t.vertices[e.c]);var{color:i,vertexColors:a}=e;a.length===3?r.push(...a):r.push(i,i,i)}),{position:e(new Float32Array(n.length*3),n),color:e(new Float32Array(r.length*3),r)}},n=(e=0,t=0,n=0)=>({x:e,y:t,z:n}),r=(e,t,n,r)=>(e.x=t,e.y=n,e.z=r,e),i=(e,t)=>(e.x=t,e.y=t,e.z=t,e),a=e=>n(e.x,e.y,e.z),o=(e,t)=>(e.x+=t.x,e.y+=t.y,e.z+=t.z,e),s=(e,t,n)=>(e.x=t.x+n.x,e.y=t.y+n.y,e.z=t.z+n.z,e),c=(e,t,n)=>(e.x+=t.x*n,e.y+=t.y*n,e.z+=t.z*n,e),l=(e,t)=>(e.x-=t.x,e.y-=t.y,e.z-=t.z,e),u=(e,t,n)=>(e.x=t.x-n.x,e.y=t.y-n.y,e.z=t.z-n.z,e),d=(e,t)=>(e.x*=t.x,e.y*=t.y,e.z*=t.z,e),f=(e,t)=>(e.x*=t,e.y*=t,e.z*=t,e),p=(e,t)=>{var{x:n,y:r,z:i}=e,a=1/(t[3]*n+t[7]*r+t[11]*i+t[15]);return e.x=(t[0]*n+t[4]*r+t[8]*i+t[12])*a,e.y=(t[1]*n+t[5]*r+t[9]*i+t[13])*a,e.z=(t[2]*n+t[6]*r+t[10]*i+t[14])*a,e},m=(e,t)=>{var{x:n,y:r,z:i}=e,a=t.x,o=t.y,s=t.z,c=t.w,l=c*n+o*i-s*r,u=c*r+s*n-a*i,d=c*i+a*r-o*n,f=-a*n-o*r-s*i;return e.x=l*c+f*-a+u*-s-d*-o,e.y=u*c+f*-o+d*-a-l*-s,e.z=d*c+f*-s+l*-o-u*-a,e},h=(e,t)=>{var{x:n,y:r,z:i}=e;return e.x=t[0]*n+t[4]*r+t[8]*i,e.y=t[1]*n+t[5]*r+t[9]*i,e.z=t[2]*n+t[6]*r+t[10]*i,x(e)},g=(e,t)=>f(e,1/t),_=(e,t)=>(e.x=Math.min(e.x,t.x),e.y=Math.min(e.y,t.y),e.z=Math.min(e.z,t.z),e),v=(e,t)=>(e.x=Math.max(e.x,t.x),e.y=Math.max(e.y,t.y),e.z=Math.max(e.z,t.z),e),y=(e,t)=>e.x*t.x+e.y*t.y+e.z*t.z,b=e=>Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z),x=e=>g(e,b(e)||1),S=(e,t)=>f(x(e),t),C=(e,t,n,r)=>o(f(u(e,n,t),r),t),w=(e,t)=>{var{x:n,y:r,z:i}=e;return e.x=r*t.z-i*t.y,e.y=i*t.x-n*t.z,e.z=n*t.y-r*t.x,e},T=(e,t,n)=>{var r=t.x,i=t.y,a=t.z,o=n.x,s=n.y,c=n.z;return e.x=i*c-a*s,e.y=a*o-r*c,e.z=r*s-i*o,e},ee=(e,t)=>Math.sqrt(E(e,t)),E=(e,t)=>{var n=e.x-t.x,r=e.y-t.y,i=e.z-t.z;return n*n+r*r+i*i},D=(e,t)=>(e.x=t[12],e.y=t[13],e.z=t[14],e),O=n(1,0,0),k=n(0,1,0),te=n(0,0,1),A=1.001,j=(e,t,n)=>{var r=y(e,t);return r<0?r*=n:r/=n,c(e,t,-r)},M=n(),N=n(),P=n(),F=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),ne=(e,t)=>(e.set(t),e),re=(e,t,n,r)=>(b(u(P,t,n))||(P.z=1),b(T(M,r,x(P)))||(Math.abs(r.z)===1?P.x+=1e-4:P.z+=1e-4,T(M,r,x(P))),T(N,P,x(M)),e[0]=M.x,e[4]=N.x,e[8]=P.x,e[1]=M.y,e[5]=N.y,e[9]=P.y,e[2]=M.z,e[6]=N.z,e[10]=P.z,e),ie=(e,t,n)=>{var[r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v]=t,[y,b,x,S,C,w,T,ee,E,D,O,k,te,A,j,M]=n;return e.set([r*y+s*b+d*x+h*S,i*y+c*b+f*x+g*S,a*y+l*b+p*x+_*S,o*y+u*b+m*x+v*S,r*C+s*w+d*T+h*ee,i*C+c*w+f*T+g*ee,a*C+l*w+p*T+_*ee,o*C+u*w+m*T+v*ee,r*E+s*D+d*O+h*k,i*E+c*D+f*O+g*k,a*E+l*D+p*O+_*k,o*E+u*D+m*O+v*k,r*te+s*A+d*j+h*M,i*te+c*A+f*j+g*M,a*te+l*A+p*j+_*M,o*te+u*A+m*j+v*M]),e},ae=(e,t)=>(e[12]=t.x,e[13]=t.y,e[14]=t.z,e),oe=e=>{var[t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g]=e,_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return e.fill(0);var S=1/x;return e.set([_*S,(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,v*S,(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,y*S,(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,b*S,(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S]),e},se=(e,t,n,r)=>{var{x:i,y:a,z:o,w:s}=n,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=r.x,x=r.y,S=r.z;return e.set([(1-(m+g))*b,(f+y)*b,(p-v)*b,0,(f-y)*x,(1-(d+g))*x,(h+_)*x,0,(p+v)*S,(h-_)*S,(1-(d+m))*S,0,t.x,t.y,t.z,1]),e},ce=(e,t,n)=>Math.min(Math.max(e,t),n),I=(e,t)=>e+Math.random()*(t-e),L=e=>e*(.5-Math.random()),le=(e=0,t=0,n=0,r=1)=>({x:e,y:t,z:n,w:r}),ue=(e,t)=>(e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e),de=(e,t)=>{var{x:n,y:r,z:i}=t,a=Math.cos(n/2),o=Math.cos(r/2),s=Math.cos(i/2),c=Math.sin(n/2),l=Math.sin(r/2),u=Math.sin(i/2);return e.x=c*o*s+a*l*u,e.y=a*l*s-c*o*u,e.z=a*o*u+c*l*s,e.w=a*o*s-c*l*u,e},fe=(e,t,n)=>{var r=n/2,i=Math.sin(r);return e.x=t.x*i,e.y=t.y*i,e.z=t.z*i,e.w=Math.cos(r),e},pe=(e,t)=>{var n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u,f;return d>0?(f=.5/Math.sqrt(d+1),e.w=.25/f,e.x=(l-s)*f,e.y=(i-c)*f,e.z=(a-r)*f):n>o&&n>u?(f=2*Math.sqrt(1+n-o-u),e.w=(l-s)/f,e.x=.25*f,e.y=(r+a)/f,e.z=(i+c)/f):o>u?(f=2*Math.sqrt(1+o-n-u),e.w=(i-c)/f,e.x=(r+a)/f,e.y=.25*f,e.z=(s+l)/f):(f=2*Math.sqrt(1+u-n-o),e.w=(a-r)/f,e.x=(i+c)/f,e.y=(s+l)/f,e.z=.25*f),e},me=(e,t)=>2*Math.acos(Math.abs(ce(ge(e,t),-1,1))),he=(e,t,n)=>{var r=me(e,t);return r&&be(e,t,Math.min(1,n/r)),e},ge=(e,t)=>e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w,_e=e=>Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z+e.w*e.w),ve=e=>{var t=_e(e);return t?(t=1/t,e.x*=t,e.y*=t,e.z*=t,e.w*=t):(e.x=0,e.y=0,e.z=0,e.w=1),e},ye=(e,t)=>{var n=e.x,r=e.y,i=e.z,a=e.w,o=t.x,s=t.y,c=t.z,l=t.w;return e.x=n*l+a*o+r*c-i*s,e.y=r*l+a*s+i*o-n*c,e.z=i*l+a*c+n*s-r*o,e.w=a*l-n*o-r*s-i*c,e},be=(e,t,n)=>{if(n===0)return e;if(n===1)return ue(e,t);var{x:r,y:i,z:a,w:o}=e,s=o*t.w+r*t.x+i*t.y+a*t.z;if(s<0?(e.w=-t.w,e.x=-t.x,e.y=-t.y,e.z=-t.z,s=-s):ue(e,t),s>=1)return e.w=o,e.x=r,e.y=i,e.z=a,e;var c=1-s*s;if(c<=2**-52){var l=1-n;return e.w=l*o+n*e.w,e.x=l*r+n*e.x,e.y=l*i+n*e.y,e.z=l*a+n*e.z,ve(e)}var u=Math.sqrt(c),d=Math.atan2(u,s),f=Math.sin((1-n)*d)/u,p=Math.sin(n*d)/u;return e.w=o*f+e.w*p,e.x=r*f+e.x*p,e.y=i*f+e.y*p,e.z=a*f+e.z*p,e},xe=le(),Se=F(),Ce=()=>({parent:void 0,children:[],components:[],position:n(),quaternion:le(),scale:n(1,1,1),matrix:F(),matrixWorld:F(),modelViewMatrix:F(),visible:!0,castShadow:!1,receiveShadow:!1}),we=(e,t)=>{pe(e.quaternion,re(Se,t,e.position,k))},R=(e,t)=>(t.parent=e,e.children.push(t),e),Te=(e,t)=>{var n=e.children.indexOf(t);n>=0&&e.children.splice(n,1)},Ee=(e,t,n)=>(ye(e.quaternion,fe(xe,t,n)),e),De=(e,t)=>Ee(e,O,t),Oe=(e,t)=>Ee(e,k,t),ke=(e,t)=>Ee(e,te,t),Ae=(e,t)=>{t(e),e.children.map(e=>Ae(e,t))},je=e=>{se(e.matrix,e.position,e.quaternion,e.scale)},Me=e=>{je(e),e.parent?ie(e.matrixWorld,e.parent.matrixWorld,e.matrix):ne(e.matrixWorld,e.matrix),e.children.map(Me)},Ne=Math.PI/180,Pe=F(),Fe=(e=60,t=1,n=.1,r=2e3)=>{var i={...Ce(),fov:e,near:n,far:r,aspect:t,up:a(k),matrixWorldInverse:F(),projectionMatrix:F()};return Le(i),i},Ie=(e,t)=>{pe(e.quaternion,re(Pe,e.position,t,e.up))},Le=e=>{var{near:t,far:n}=e,r=t*Math.tan(Ne*.5*e.fov),i=-r,a=i*e.aspect,o=r*e.aspect,s=2*t/(o-a),c=2*t/(r-i),l=(o+a)/(o-a),u=(r+i)/(r-i),d=-(n+t)/(n-t),f=-2*n*t/(n-t);e.projectionMatrix.set([s,0,0,0,0,c,0,0,l,u,d,-1,0,0,f,0])},Re=e=>{Me(e),e.matrixWorldInverse.set(e.matrixWorld),oe(e.matrixWorldInverse)},ze=le(),Be=le(),Ve=e=>{var t=n(),r=n(),i={object:e,sensitivity:.002,enabled:!1,onMouseMove(n){i.enabled&&(t.x=ce(t.x-n.movementY*i.sensitivity,-Math.PI/2,Math.PI/2),r.y-=n.movementX*i.sensitivity,Object.assign(e.quaternion,ye(de(Be,r),de(ze,t))))}};return addEventListener(`mousemove`,i.onMouseMove),i},He=(e=-1,t=1,n=1,r=-1,i=.1,o=2e3)=>{var s={...Ce(),left:e,right:t,top:n,bottom:r,near:i,far:o,up:a(k),matrixWorldInverse:F(),projectionMatrix:F()};return Ue(s),s},Ue=e=>{var{left:t,right:n,top:r,bottom:i,near:a,far:o}=e,s=1/(n-t),c=1/(r-i),l=1/(o-a),u=(n+t)*s,d=(r+i)*c,f=(o+a)*l;e.projectionMatrix.set([2*s,0,0,0,0,2*c,0,0,0,0,-2*l,0,-u,-d,-f,1])},We=n(),Ge=()=>({camera:He(-5,5,5,-5,.5,500),matrix:F()}),Ke=(e,t)=>{var{camera:n,matrix:r}=e;D(n.position,t.matrixWorld),Ie(n,D(We,t.target.matrixWorld)),Re(n),r.set([.5,0,0,0,0,.5,0,0,0,0,.5,0,.5,.5,.5,1]),ie(r,ie(r,r,n.projectionMatrix),n.matrixWorldInverse)},qe=(e,t)=>({parent:void 0,update:e,...t}),Je=(e,t)=>(t.parent=e,e.components.push(t),e),Ye=(e,t)=>e.components.find(t),Xe=(e,t)=>e.components.filter(t),Ze=(e,...t)=>e.components.map(e=>e.update(...t));F();var Qe=n(),$e=n(),et=64,tt=(e,t)=>{var n=ee(e.position,t.position);return n<et?0:n<512?1:n<1024?2:3},nt=(e,t)=>y(x(u($e,t.position,e.position)),m(Object.assign(Qe,te),e.quaternion))>.3,rt=(e,t)=>{var n=tt(e,t);return!(n===3||(n===1||n===2)&&!nt(e,t))},z=new AudioContext,{sampleRate:it}=z,at=e=>2**((e-69)/12)*440,ot=(e,t=z.destination)=>{var n=new AudioBufferSourceNode(z,{buffer:e});n.connect(t),n.start()},st=(e,t,n)=>{for(var r=t*it,i=new AudioBuffer({length:r,sampleRate:it}),a=i.getChannelData(0),o=0;o<r;o++)a[o]=e(o/it,o,a)*n;return i},ct=(e,t,n)=>new Proxy({},{get(r,i){var a=r[i]||st(e(at(i)),t,n);return r[i]=a,a}}),lt=e=>t=>-1+2*(t%(1/e)*e%1),ut=e=>t=>t%(1/e)*e%1>.5?1:-1,dt=e=>()=>t=>Math.exp(-t*e),ft=()=>{var e=0;return()=>{var t=L(1),n=(e+.02*t)/1.02;return e=n,n*3.5}},pt=(e,t)=>n=>{var r=e(n),i=t(n);return(e,t,n)=>r(e,t,n)*i(e,t,n)},mt=(e,t,n)=>r=>(i,a,o)=>e(r+(i>n?t:0))(i,a,o),ht=(e,t,n,r,i)=>{var a=e+t+n+r;return()=>n=>n<e?n/e:n<e+t?1-(n-e)/t*(1-i):n<a-r?i:n<a?(a-n)/r*i:0},gt=new GainNode(z,{gain:.3}),_t=new GainNode(z,{gain:1-gt.gain.value}),vt=new ConvolverNode(z),yt=new GainNode(z);yt.connect(_t).connect(z.destination),yt.connect(vt).connect(gt).connect(z.destination),(async()=>{var e=1.5,t=.01,n=e+t,r=new OfflineAudioContext(1,n*it,it),i=new GainNode(r,{gain:0});i.gain.setValueAtTime(1,t).exponentialRampToValueAtTime(.01,n);var a=new AudioBufferSourceNode(r,{buffer:st(ft(),n,1)});a.connect(i).connect(r.destination),a.start(),vt.buffer=await r.startRendering()})();var bt=e=>ot(e,yt),xt=ct(pt(pt(lt,ft),dt(24)),.5,1),St=()=>bt(xt[16]),Ct=ct(pt(pt(ut,mt(ut,at(36)-at(31),.1)),ht(.003,.05,.01,.03,.5)),.3,.2),wt=()=>bt(Ct[31]),Tt=ct(pt(pt(lt,mt(ut,at(27)-at(15),.1)),ht(.001,.3,.4,.3,.7)),1,.4),Et=()=>bt(Tt[15]);addEventListener(`click`,()=>z.resume(),{once:!0});var Dt=(e,t,r)=>({a:e,b:t,c:r,color:n(1,1,1),vertexColors:[]}),Ot=e=>({a:e.a,b:e.b,c:e.c,color:a(e.color),vertexColors:e.vertexColors.map(a)}),kt=(...e)=>t=>e.reduce((e,t)=>t(e),t),B=e=>(...t)=>n=>e(n,...t),At=e=>e[Math.random()*e.length|0],jt=n(),Mt=()=>({vertices:[],faces:[]}),Nt=(e,t,r)=>{for(var i=e.vertices.length,a=0;a<t.length;)e.vertices.push(n(t[a++],t[a++],t[a++]));for(a=0;a<r.length;)e.faces.push(Dt(i+r[a++],i+r[a++],i+r[a++]));return e},Pt=(e,t)=>(e.vertices.map(e=>m(e,t)),e),Ft=(e,t,n,i)=>(r(jt,t,n,i),e.vertices.map(e=>o(e,jt)),e),It=(e,t)=>{var n=e.vertices.length;return e.vertices.push(...t.vertices.map(a)),e.faces.push(...t.faces.map(e=>{var t=Ot(e);return t.a+=n,t.b+=n,t.c+=n,t})),e},Lt=B(Ft),Rt=B(It),zt=(e,t,n)=>{var r=e/2,i=t/2,a=n/2,o=[r,i,a,r,i,-a,r,-i,a,r,-i,-a,-r,i,-a,-r,i,a,-r,-i,-a,-r,-i,a];return Nt(Mt(),o,[0,2,1,2,3,1,4,6,5,6,7,5,4,5,1,5,0,1,7,6,2,6,3,2,5,7,0,7,2,0,1,3,4,3,6,4])},Bt=[0],Vt=[1],Ht=[2],Ut=[4],Wt=[5],Gt=[7],Kt=[0,1],qt=[2,3],Jt=[4,5],Yt=[6,7],Xt=[0,2],Zt=[1,3],Qt=[4,6],$t=[5,7],en=[0,5],tn=[1,4],nn=[2,7],rn=[0,1,2,3],an=[4,5,6,7],on=[0,1,4,5],sn=[2,3,6,7],V=[0,2,5,7],H=[1,3,4,6],cn=[0,1,2,3,4,5,6,7],ln=[0,1],un=[2,3],dn=[4,5],fn=[6,7],pn=[8,9],mn=[10,11],U=n(),hn=n(),gn=n(),_n=(e,t,n)=>{Array.isArray(t)?r(e,...t):typeof t==`object`?Object.assign(e,n,t):typeof t==`number`&&i(e,t)},vn=(e,t,n)=>(i(n,0),t.map(t=>o(n,e.vertices[t])),g(n,t.length),n),yn=(e,t)=>(vn(e,t,U),Ft(e,-U.x,-U.y,-U.z)),bn=(e,t,n,r)=>(vn(e,t,hn),vn(n,r,gn),u(U,hn,gn),Ft(e,-U.x,-U.y,-U.z)),W=B(yn),G=B(bn),xn=(e,t=n())=>(n,...r)=>(r.map(([r,i])=>{_n(U,i,t),r.map(t=>e(n.vertices[t],U))}),n),K=B(xn(o)),Sn=B(xn(d,n(1,1,1))),Cn=((e,t=n())=>n=>(r,...i)=>(i.map(([i,a=t[n]])=>{Object.assign(U,t),U[n]=a,i.map(t=>e(r.vertices[t],U))}),r))(o),wn=B(Cn(`x`));Cn(`y`);var Tn=B(Cn(`z`)),En=(()=>{var e=n(),t=new Map([[rn,an],[on,sn],[V,H],[an,rn],[sn,on],[H,V]]);return(n,r,i)=>{_n(U,i,e);var a=t.get(r),s=zt();return r.map((e,t)=>{var r=a[t];Object.assign(s.vertices[a===rn||a===an?r^1:r],n.vertices[e]),o(Object.assign(s.vertices[e],n.vertices[e]),U)}),s}})(),q=B((e,...t)=>(t.flat().sort((e,t)=>e-t).reverse().map(t=>e.faces.splice(t,1)),e)),Dn=n(0,-800,0),On=(e=n(),t=1)=>({...Ce(),color:e,intensity:t,target:Ce(),shadow:Ge()}),kn=new WeakMap,An=(e,t,n)=>{var r=kn.get(e)||{};return kn.set(e,r),r[t]=r[t]||[],r[t].push(n),e},jn=(e,t,n)=>(kn.get(e)?.[t]?.map(e=>e(n)),e),Mn=e=>{var t=0,n=e;return(r,i=!0)=>{if(n+=r,n-t>e)return i&&(t=n),i}},Nn=()=>{var e={};return addEventListener(`keydown`,t=>e[t.code]=!0),addEventListener(`keyup`,t=>e[t.code]=!1),e},J=()=>({color:n(1,1,1),specular:n(1/15,1/15,1/15),shininess:30,emissive:n(),fog:!0}),Y=(e,t)=>({...Ce(),geometry:e,material:t}),Pn=n(),Fn=(e=n(1/0,1/0,1/0),t=n(-1/0,-1/0,-1/0))=>({min:e,max:t}),In=(e,t)=>(Object.assign(e.min,t.min),Object.assign(e.max,t.max),e),Ln=e=>(e.min.x=e.min.y=e.min.z=1/0,e.max.x=e.max.y=e.max.z-=1/0,e),Rn=e=>e.max.x<e.min.x||e.max.y<e.min.y||e.max.z<e.min.z,zn=(e,t)=>Rn(e)?i(t,0):f(s(t,e.min,e.max),.5),Bn=(e,t)=>Rn(e)?i(t,0):u(t,e.max,e.min),Vn=(e,t)=>(_(e.min,t),v(e.max,t),e),Hn=(e,t)=>(Me(t),Ae(t,t=>t.geometry?.vertices.map(n=>Vn(e,p(Object.assign(Pn,n),t.matrixWorld)))),e),Un=(e,t)=>(Ln(e),Hn(e,t),e),Wn=(e,t)=>e.min.x<=t.x&&t.x<=e.max.x&&e.min.y<=t.y&&t.y<=e.max.y&&e.min.z<=t.z&&t.z<=e.max.z,Gn=(e,t)=>!(e.max.x<=t.min.x||e.min.x>=t.max.x||e.max.y<=t.min.y||e.min.y>=t.max.y||e.max.z<=t.min.z||e.min.z>=t.max.z),Kn=(e,t)=>Vn(Vn(e,t.min),t.max),qn=(e,t)=>(o(e.min,t),o(e.max,t),e),Jn=(e,t,n)=>{e.a===t&&(e.vertexColors[0]=n),e.b===t&&(e.vertexColors[1]=n),e.c===t&&(e.vertexColors[2]=n)},Yn=B((e,...t)=>(t.map(([t,r])=>{var i=n();_n(i,r),e.faces.map(e=>t.map(t=>Jn(e,t,i)))}),e)),Xn=B((e,...t)=>(t.map(([t,n])=>t.map(t=>_n(e.faces[t].color,n))),e)),Zn=.01,Qn=le(),$n=n(),X=(e,...t)=>kt(...t)(zt(...e)),er=(...e)=>kt(...e.map(Rt))(Mt()),tr=(e,t,n)=>{var r=(t-e)/(n+1);return[...Array(n)].map((t,n)=>e+r*(n+1))},nr=(e,t,n,r)=>{u($n,t,e);var i=$n.x,a=$n.z;return X(i?[i,r,n]:[n,r,a],W(i?Jt:tn),Lt(e.x,e.y,e.z))},rr=(e,t,n=e)=>{var r=X([n,3/16*t,e],W(sn)),i=kt(()=>En(r,on,{y:3/4*t}),wn([Kt,-n/2]),q(fn))();return er(r,i,kt(()=>En(i,on,{y:1/16*t}),wn([Kt,-n/2]),q(fn))())},ir=zt(1,1,1),ar=J();i(ar.emissive,1);var or=J();i(or.color,0);var sr=(e,t)=>{var i=Ce(),a=5,s=zn(e,n()),l=Bn(e,n()),u=2,p=[...Array(t)].map(()=>{var e=Y(ir,ar);e.castShadow=!0,r(e.scale,I(4,l.x),I(4,2*l.y),I(4,l.z)),r(e.position,L(.5),L(.5),L(.5));var t=Y(ir,or);return r(t.scale,1-u/e.scale.x,1-u/e.scale.y,1-u/e.scale.z),e.scale.x*=-1,R(e,t),o(d(e.position,l),s),R(i,e),n(0,I(32,256),0)});return Je(i,qe(e=>{var t=0;i.children.map((n,r)=>{c(n.position,p[r],e),f(n.scale,1-a*e),b(n.scale)>Zn&&t++}),t||Te(i.parent,i)}))},cr=()=>{var e=12288,t=3072,n=512,r=(t-n)/2,i=128,a=512,o=5/6*r,s=1.5*n,c=.75*a,l=3072,u=X([r,i,e],W(rn),wn([$t,o],[cn,-n/2]),K([nn,{y:i}]),q(dn)),d=kt(()=>En(u,on,{y:a}),K([Qt,{x:o}],[en,{y:-a}]),q(un,fn))(),f=kt(()=>En(d,an,{x:-o}),K([$t,{x:o}],[Ut,{y:-a}]),q(ln,fn))(),p=X([r,i,e],W(an),wn([Xt,-o],[cn,n/2]),K([nn,{y:i}]),q(dn)),m=kt(()=>En(p,on,{y:a}),K([Zt,{x:-o}],[en,{y:-a}]),q(ln,fn))(),h=er(u,d,f,p,m,kt(()=>En(m,rn,{x:o}),K([Xt,{x:-o}],[Vt,{y:-a}]),q(un,fn))(),X([s,c,l],W(nn),K([cn,{z:-e/3}],[tn,{y:-c/3}])));return er(h,fr(h,2048,()=>X([I(16,128),I(16,128),I(16,64)],W(V))))},lr=X([.5,.5,1]),ur=[[1,1,1],[1,.75,0],[1,.5,0]].map(e=>{var t=J();return r(t.color,...e),r(t.emissive,...e),t}),dr=e=>{var t=Ce(),n=8,o=[...Array(e)].map(()=>{var e=Y(lr,At(ur));e.castShadow=!0,i(e.scale,I(1,8)),r(e.position,L(4),L(4),L(4)),R(t,e);var n=S(a(e.position),I(64,128));return we(e,n),n});return Je(t,qe(e=>{var r=0;t.children.map((t,i)=>{c(t.position,c(o[i],Dn,e),e),f(t.scale,1-n*e),b(t.scale)>Zn&&r++}),r||Te(t.parent,t)}))},fr=(()=>{var e=n(),t=n(),r=F(),a=n(),o=(n,r,i)=>b(w(u(e,i,r),u(t,n,r)))*.5,s=(n,r,i)=>x(w(u(e,i,r),u(t,n,r))),l=(e,t,n)=>{var r=Math.random(),a=Math.random();r+a>1&&(r=1-r,a=1-a);var o=1-r-a;return c(c(c(i($n,0),e,r),t,a),n,o)};return(e,t,n)=>{var i=0,c=e.faces.map(t=>(i+=o(e.vertices[t.a],e.vertices[t.b],e.vertices[t.c]),i)),u=e=>{for(var t=0,n=c.length-1;t<=n;){var r=Math.ceil((t+n)/2);if(!r||c[r-1]<=e&&c[r]>e)return r;e<c[r]?n=r-1:t=r+1}return-1};return er(...[...Array(t)].map(()=>{var t=u(Math.random()*i),o=e.faces[t],c=e.vertices[o.a],d=e.vertices[o.b],f=e.vertices[o.c],m=l(c,d,f);ae(re(r,a,s(c,d,f),k),m);var h=n();return h.vertices.map(e=>p(e,r)),h}))}})(),pr=()=>{var e=40,t=72,i=16,a=4,o=(e-a)/2,s=56,c=n(16,1,1),l=8;return er(X([e,t-s-a,i],W(sn),K([cn,{y:s+a}],[Kt,{x:-e/2}],[Jt,{x:e/2}],[en,{z:-i}],[Ht,{x:-e/2}],[Gt,{x:e/2}],[nn,{y:-2*a}])),X([o,s,i],W(qt),K([cn,{x:-a/2}],[Yt,{x:o}],[Kt,{y:-2*a}],[nn,{z:-i}],[Wt,{z:-i}])),X([o,s,i],W(Yt),K([cn,{x:a/2}],[qt,{x:-o}],[Jt,{y:-2*a}],[nn,{z:-i}],[Bt,{z:-i}])),X([l,l,l],e=>Pt(e,de(Qn,r($n,Math.PI/4,-Math.PI/4,0))),Xn([ln,c],[dn,c],[pn,c]),Lt(0,s-a/2,-i/4)))},mr=(e,t,n,r)=>{var i=e-4*r,a=n-4*r,o=q(ln,un,pn,mn),s=X([e-2*r,t,a],o),c=X([i,t,r],G(H,s,V),wn([Qt,-r],[Zt,r]),o),l=X([i,t,r],G(V,s,H),wn([$t,-r],[Xt,r]),o),u=[r,t,r],d=Yn([cn,[.4,.4,.5]]),f=r/2;return er(s,c,l,X([i,t,r],G(H,c,V),wn([$t,-f],[Xt,f]),q(ln,un,mn),d),X([i,t,r],G(V,l,H),wn([Qt,-f],[Zt,f]),q(ln,un,pn),d),X([r,t,a],G(an,s,rn),Tn([Zt,-f],[Xt,f]),q(un,pn,mn),d),X([r,t,a],G(rn,s,an),Tn([Qt,-f],[$t,f]),q(ln,pn,mn),d),X(u,G(Qt,s,Xt),K([rn,{z:f}],[V,{x:-r}],[Xt,{x:-f,z:f}]),d),X(u,G(Zt,s,$t),K([an,{z:f}],[V,{x:r}],[$t,{x:f,z:f}]),d),X(u,G($t,s,Zt),K([rn,{z:-f}],[H,{x:-r}],[Zt,{x:-f,z:-f}]),d),X(u,G(Xt,s,Qt),K([an,{z:-f}],[H,{x:r}],[Qt,{x:f,z:-f}]),d))},hr=()=>{var e=16,t=32,i=6,a=n(16,1,1),o=X([e,e,i],Sn([V,{x:.5,y:.5}]),Xn([pn,a]),q(mn));return Pt(er(o,X([e,e,t-i],G(V,o,H),Sn([H,{x:0,y:0}]),q(pn))),de(Qn,r($n,0,0,Math.PI/4)))},gr=(e,t)=>{for(var n=[],r=0;r<t;r++){var i=2*Math.PI*Math.random(),a=2*Math.random()-1,o=Math.sqrt(1-a*a),s=I(8,32);n.push(X([s,s,s],Lt(e*o*Math.cos(i),e*o*Math.sin(i),e*a)))}return er(...n)},_r=(e,t)=>{var r={physics:t,boundingBox:Un(Fn(),e),velocity:n(),collide(){}};return qe(t=>c(e.position,r.velocity,t),r)},vr=(e,t)=>Je(e,_r(e,t)),yr=e=>Ye(e,br),br=e=>e.physics,xr=e=>{var t=[];return Ae(e,e=>{t.push(...Xe(e,br))}),t},Sr=(()=>{var e=n();return(t,n,i,a)=>{var s=a.max.x-i.min.x,u=i.max.x-a.min.x,d=a.max.y-i.min.y,p=i.max.y-a.min.y,m=a.max.z-i.min.z,h=i.max.z-a.min.z,g=0;s>0&&u>0&&(g=s<u?s:-u);var _=0;d>0&&p>0&&(_=d<p?d:-p);var v=0;m>0&&h>0&&(v=m<h?m:-h);var y=Math.abs(g),C=Math.abs(_),w=Math.abs(v);y<C&&y<w?r(e,g,0,0):C<w?r(e,0,_,0):r(e,0,0,v);var T=t.parent,ee=n.parent;t.physics===1?(c(ee.position,e,-A),j(n.velocity,x(e),A)):n.physics===1?(c(T.position,e,A),j(t.velocity,x(e),A)):(f(e,.5),b(e)<1.001&&S(e,A),o(T.position,e),l(ee.position,e))}})(),Cr=(()=>{var e=n(),t=n();return(n,a,o,s,c)=>{if(Gn(s,c)){n.allsolid=!0,n.fraction=0;return}i(e,1/0),u(t,o.velocity,a.velocity);var l=t.x,d=t.y,f=t.z,p=c.max.x-s.min.x,m=s.max.x-c.min.x,h=c.max.y-s.min.y,g=s.max.y-c.min.y,_=c.max.z-s.min.z,v=s.max.z-c.min.z,y=0,b=1/0;if(l<0){if(p<0)return;p>0&&(b=Math.min(-p/l,b)),m<0&&(e.x=m/l,y=Math.max(e.x,y))}else if(l>0){if(m<0)return;m>0&&(b=Math.min(m/l,b)),p<0&&(e.x=-p/l,y=Math.max(e.x,y))}if(!(y>b)){if(d<0){if(h<0)return;h>0&&(b=Math.min(-h/d,b)),g<0&&(e.y=g/d,y=Math.max(e.y,y))}else if(d>0){if(g<0)return;g>0&&(b=Math.min(g/d,b)),h<0&&(e.y=-h/d,y=Math.max(e.y,y))}if(!(y>b)){if(f<0){if(_<0)return;_>0&&(b=Math.min(-_/f,b)),v<0&&(e.z=v/f,y=Math.max(e.z,y))}else if(f>0){if(v<0)return;v>0&&(b=Math.min(v/f,b)),_<0&&(e.z=-_/f,y=Math.max(e.z,y))}y>b||(n.fraction=y,e.x<e.y&&e.x<e.z?r(n.normal,Math.sign(l),0,0):e.y<e.z?r(n.normal,0,Math.sign(d),0):r(n.normal,0,0,Math.sign(f)))}}}})(),wr=(e,t)=>qn(In(e,t.boundingBox),t.parent.position),Tr=(()=>{var e=Fn(),t=Fn(),n=Fn();return r=>{for(var i=0;i<r.length;i++)for(var a=r[i],o=i+1;o<r.length;o++){var s=r[o];if(!(a.physics===1&&s.physics===1)&&!(a.physics===4&&s.physics===4)){var c,l;if(!((a.physics===4||s.physics===4)&&(a.physics===4?(c=a,l=s):(c=s,l=a),Wn(wr(e,l),c.parent.position)&&c.collide(l.parent)===!1))&&Gn(wr(t,a),wr(n,s))){if(a.collide(s.parent)===!1||s.collide(a.parent)===!1)continue;jn(a.parent,`collide`,s.parent),jn(s.parent,`collide`,a.parent),Sr(a,s,t,n)}}}}})(),Er=270,Dr=100,Or=10,kr=1,Ar=6,jr=320,Mr=800,Nr=a(k),Pr=(e,t)=>({object:e,body:t,scene:void 0,command:n(),dt:0,gravity:Mr,speed:jr,viewForward:n(),viewRight:n(),jump:0,walking:!1}),Fr=e=>{e.command.y<10&&(e.jump=!1),Yr(e),e.walking?Wr(e):Gr(e),Yr(e)},Ir=()=>({allsolid:!1,fraction:1,endpos:n(),normal:n()}),Lr=(e,t)=>(e.allsolid=t.allsolid,e.fraction=t.fraction,Object.assign(e.endpos,t.endpos),Object.assign(e.normal,t.normal),e),Rr=(()=>{var e=Ir();return t=>(Lr(t,e),t)})(),zr=(()=>{var e=Fn(),t=Fn(),r=Fn(),i=n(),a=n(),o=Ir();return(n,s,c,l,d)=>{Rr(c),Object.assign(i,s.velocity),Object.assign(s.velocity,u(a,d,l)),Kn(qn(In(r,s.boundingBox),d),qn(In(e,s.boundingBox),l));for(var f=0;f<n.length;f++){var p=n[f];Gn(r,qn(In(t,p.boundingBox),p.parent.position))&&(Cr(Rr(o),s,p,e,t),o.fraction<c.fraction&&Lr(c,o))}Object.assign(s.velocity,i),C(c.endpos,l,d,c.fraction)}})(),Br=(e,t,n,r)=>{zr(xr(e.scene).filter(t=>t!==e.body&&t.physics!==4),e.body,t,n,r)},Vr=5,Hr=(()=>{var e=n(),t,r=[...Array(Vr)].map(()=>n()),a=n(),s=Ir(),l=n(),u=n(),d=n();return(n,p)=>{p&&(Object.assign(u,n.body.velocity),u.y-=n.gravity*n.dt,n.body.velocity.y=(n.body.velocity.y+u.y)*.5,n.walking&&j(n.body.velocity,Nr,A));var m=n.dt;n.walking?(t=1,Object.assign(r[0],Nr)):t=0,x(Object.assign(r[t],n.body.velocity)),t++;var h,g=4;for(h=0;h<g;h++){if(c(Object.assign(l,n.object.position),n.body.velocity,m),Br(n,s,n.object.position,l),s.allsolid)return n.body.velocity.y=0,!0;if(s.fraction>0&&Object.assign(n.object.position,s.endpos),s.fraction===1)break;if(m-=m*s.fraction,t>=Vr)return i(n.body.velocity,0),!0;for(var _=0;_<t;_++)if(y(s.normal,r[_])>.99){o(n.body.velocity,s.normal);break}if(!(_<t)){for(Object.assign(r[t],s.normal),t++,_=0;_<t;_++)if(!(y(n.body.velocity,r[_])>=.1)){j(Object.assign(a,n.body.velocity),r[_],A),p&&j(Object.assign(d,u),r[_],A);for(var v=0;v<t;v++)if(v!==_&&!(y(a,r[v])>=.1)&&(j(a,r[v],A),p&&j(d,r[v],A),!(y(a,r[_])>=0))){f(Object.assign(a,x(T(e,r[_],r[v]))),y(e,n.body.velocity)),p&&f(Object.assign(d,e),y(e,u));for(var b=0;b<t;b++)if(!(b===_||b===v)&&!(y(a,r[b])>=.1))return i(n.body.velocity,0),!0}Object.assign(n.body.velocity,a),p&&Object.assign(u,d);break}}}return p&&Object.assign(n.body.velocity,u),h!==0}})(),Ur=e=>e.command.y<10?!1:e.jump?(e.command.y=0,!1):(e.walking=!1,e.jump=!0,e.body.velocity.y=Er,wt(),!0),Wr=(()=>{var e=n(),t=n();return n=>{if(Ur(n)){Gr(n);return}Kr(n);var r=n.command.z,a=n.command.x,o=qr(n);n.viewForward.y=0,n.viewRight.y=0,c(c(i(e,0),x(j(n.viewForward,Nr,A)),r),x(j(n.viewRight,Nr,A)),a);var s=b(Object.assign(t,e));x(t),s*=o,Jr(n,t,s,Or),j(n.body.velocity,Nr,A),!(!n.body.velocity.x&&!n.body.velocity.z)&&Hr(n,!1)}})(),Gr=(()=>{var e=n(),t=n();return n=>{Kr(n);var r=n.command.z,a=n.command.x,o=qr(n);n.viewForward.y=0,n.viewRight.y=0,c(c(i(e,0),x(n.viewForward),r),x(n.viewRight),a),e.y=0,Object.assign(t,e);var s=b(t);x(t),s*=o,Jr(n,t,s,kr),n.walking&&j(n.body.velocity,Nr,A),Hr(n,!0)}})(),Kr=(()=>{var e=n();return t=>{var n=t.body.velocity;Object.assign(e,n),t.walking&&(e.y=0);var r=b(e);if(r<1){n.x=0,n.z=0;return}var i=0;t.walking&&(i+=(r<Dr?Dr:r)*Ar*t.dt);var a=r-i;a<0&&(a=0),a/=r,f(n,a)}})(),qr=e=>{var t=Math.max(Math.abs(e.command.x),Math.abs(e.command.y),Math.abs(e.command.z));if(!t)return 0;var n=b(e.command);return e.speed*t/(127*n)},Jr=(e,t,n,r)=>{var i=n-y(e.body.velocity,t);if(!(i<=0)){var a=r*e.dt*n;a>i&&(a=i),c(e.body.velocity,t,a)}},Yr=(()=>{var e=n(),t=Ir();return n=>{if(Object.assign(e,n.object.position),e.y-=.25,Br(n,t,n.object.position,e),t.fraction===1){n.walking=!1;return}n.walking=!0}})(),Xr=Nn(),Zr=!1,Qr=le(),$r=n(),ei=n(),ti=(e,t,a)=>{var s=Ce();R(t,s);var l=n(.2,.2,.3),d=On(n(1,1,1));r(d.position,64,256,-64),R(s,d),a.far=16384;var h=Ce();R(h,a),R(s,h);var g=30,_=56,v=vr(Y(zt(g,_,g),J()),2);v.position.y+=_/2,v.visible=!1,Object.assign(h.position,v.position),R(s,v);var C=yr(v);C.update=()=>{};var T=Pr(v,C);T.scene=s;var E=100,D=0,O=()=>{var e=512,t=p(Object.assign($r,h.position),d.shadow.camera.matrixWorldInverse);Object.assign(d.shadow.camera,{left:t.x-e,right:t.x+e,top:t.y+e,bottom:t.y-e}),Ue(d.shadow.camera)};Me(d),Ke(d.shadow,d),O();var A=e=>{var t=J();r(t.color,.7,.7,.75);var n=vr(Y(e,t),1);return n.castShadow=!0,n.receiveShadow=!0,R(s,n),n};[[[160,128,256],[-512,0,128],[W(Yt)]]].map(([e,t,n=[W(sn)]])=>r(A(X(e,...n)).position,...t)),[[[1024,16,768,8],[0,0,0]],[[128,8,256,8],[256,48,-240]],[[128,8,172,8],[-256,16,-192]],[[160,8,246,8],[128,160,0]],[[512,8,352,8],[0,32,-544]],[[128,8,128,8],[256,64,0]],[[128,8,160,8],[320,96,144]],[[480,8,128,8],[0,128,256]],[[128,24,128,8],[-160,12,0]],[[128,24,128,8],[-160,96,0]]].map(([e,t])=>r(A(mr(...e)).position,...t)),[].map(([e,t,r,i])=>A(nr(n(...e),n(...t),r,i))),tr(256,0,4).map(e=>[-340,0,e]).map(e=>r(A(rr(24,128)).position,...e));var j=J();i(j.emissive,1),j.fog=!1,R(h,Y(gr(15360,512),j));var M=J();i(M.specular,1),M.fog=!1;var N=Y(cr(),M);r(N.position,512,1536,-6144),Oe(N,-Math.PI/2),De(N,-Math.PI/8),ke(N,-Math.PI/4),R(s,N);var P=()=>{var e=J(),t=Y(pr(),e);return i(e.color,.5),i(e.specular,1),t.castShadow=!0,t.receiveShadow=!0,t},F=(e,t)=>{var n=t,r,i=yr(e);return An(e,`collide`,t=>{if(yr(t).physics===4)if(n--,clearTimeout(r),n<=0){Et(),le(e.position);var a=sr(i.boundingBox,16);Object.assign(a.position,e.position),Object.assign(a.quaternion,e.quaternion),R(s,a),Te(s,e)}else e.material.emissive.x=1,r=setTimeout(()=>e.material.emissive.x=0,48)}),e},ne=(e,t)=>{var n=0;return Je(e,qe(r=>{n+=r,n>t&&Te(e.parent,e)}))},re=()=>{var e=J();i(e.color,.5),i(e.specular,1);var t=Y(hr(),e);return t.castShadow=!0,t.receiveShadow=!0,t},ie=()=>{var e=zt(2,2,8),t=J();r(t.emissive,2,.5,.5);var n=ne(vr(Y(e,t),4));return n.castShadow=!0,n},ae=(e=2)=>{E-=e,E<=0&&(document.exitPointerLock(),document.querySelector(`.e`).hidden=!1)},oe=()=>{var e=0,t=2,r=52,a=e,o=n(),l=n(),d=Ir(),p=160,h=10,g=100,_=6,C=Mn(1.1),w=Je(F(vr(P(),2),5),qe(n=>{a===e&&rt(w,v);var T=yr(w);c(T.velocity,Dn,n);var ee=tt(w,v),E=a===t||rt(w,v)?u($r,v.position,w.position):i($r,0);if(E.y=0,x(E),b(E)&&(fe(Qr,k,Math.atan2(E.x,E.z)),he(w.quaternion,Qr,Math.PI*n),S(Object.assign(ei,E),p),Object.assign(o,w.position),c(Object.assign(l,o),ei,16*n),Object.assign(o,l),l.y-=.25,zr(pe,T,d,o,l),d.allsolid),ee!==0){var D=T.velocity.y;T.velocity.y=0;var O=b(T.velocity),A=Math.max(O-Math.max(O,g)*_*n,0);S(T.velocity,A);var j=y(T.velocity,E);T.velocity.y=D;var M=p-j;if(M>0){var N=Math.min(h*n*p,M);c(T.velocity,E,N)}}var P=Object.assign(ei,w.position);if(P.y+=r,C(n,rt(w,v))){var F=ie();Object.assign(F.position,P),we(F,v.position);var ne=yr(F);f(m(Object.assign(ne.velocity,te),F.quaternion),400),R(s,F),ne.collide=e=>{if(e.isEnemy)return!1;e===v&&ae(),le(F.position),Te(s,F)}}}));return w.isEnemy=!0,w.isPhantom=!0,An(w,`collide`,e=>{yr(e).physics===4&&(a=t)}),w},se=()=>{var e=0,t=2,r=e,a=n(),l=n(),d=n(),p=Ir(),h=400,g=10,_=20,C=.3,w=Mn(1.3),T=I(64,128),E=32,D=Je(F(vr(re(),2),2),qe(n=>{r===e&&rt(D,v)&&(r=t);var O=yr(D);f(Object.assign(a,O.velocity),-.5);var A=tt(D,v),j=r===t||rt(D,v)?u($r,v.position,D.position):i($r,0);x(j),b(j)&&(fe(Qr,k,Math.atan2(j.x,j.z)),he(D.quaternion,Qr,Math.PI*n),S(Object.assign(ei,j),h));var M=O.velocity.y;if(M<=32&&(Object.assign(l,D.position),Object.assign(d,l),d.y-=E,zr(pe,O,p,l,d),p.fraction!==1)){var N=Math.max(16,-M*.5);a.y+=N*(1-p.fraction)}if(A!==0&&ee(D.position,v.position)>T){var P=b(O.velocity),F=Math.max(P-Math.max(P,_)*C*n,0);S(O.velocity,F);var ne=h-y(O.velocity,j);if(ne>0){var re=Math.min(g*n*h,ne);c(O.velocity,j,re)}}var oe=Object.assign(ei,D.position);if(w(n,rt(D,v))){var se=ie();Object.assign(se.position,oe),we(se,v.position);var ce=yr(se);f(m(Object.assign(ce.velocity,te),se.quaternion),400),R(s,se),ce.collide=e=>{if(e.isEnemy)return!1;e===v&&ae(),le(se.position),Te(s,se)}}o(O.velocity,a)}));return D.isEnemy=!0,D.isScanner=!0,An(D,`collide`,e=>{yr(e).physics===4&&(r=t)}),D},le=e=>{var t=dr(4);Object.assign(t.position,e),R(s,t)},ue=Mn(.1),de,pe,me=Mn(7),ge=Mn(3);return Je(s,qe(e=>{if(de=xr(s),pe=de.filter(e=>e.physics===1),pe.map(e=>e.parent),Tr(de),T.dt=e,i(T.command,0),(Xr.KeyW||Xr.ArrowUp)&&T.command.z++,(Xr.KeyS||Xr.ArrowDown)&&T.command.z--,(Xr.KeyA||Xr.ArrowLeft)&&T.command.x--,(Xr.KeyD||Xr.ArrowRight)&&T.command.x++,Xr.Space&&T.command.y++,f(T.command,127),r(T.viewForward,0,0,-1),r(T.viewRight,1,0,0),m(r(T.viewForward,0,0,-1),a.quaternion),x(w(r(T.viewRight,0,-1,0),T.viewForward)),Fr(T),Object.assign(h.position,v.position),O(),E=ce(E+1*e,0,100),document.querySelector(`.h`).textContent=Math.round(E),document.querySelector(`.s`).textContent=D,v.position.y<=-2048&&ae(100),ue(e,Zr)){St();var t=zt(2,2,8),n=J();r(n.emissive,.5,.5,2);var l=ne(vr(Y(t,n),4),4);l.castShadow=!0,we(l,c(r($r,L(1),L(1),L(1)),m(Object.assign(ei,te),a.quaternion),-16));var u=yr(l);c(u.velocity,m(Object.assign($r,te),l.quaternion),800),o(m(r(l.position,g/4,-_/8,0),a.quaternion),v.position),R(s,l),u.collide=e=>{if(e===v)return!1;le(l.position),Te(s,l),e.isPhantom&&(D+=100),e.isScanner&&(D+=50)}}if(me(e)){var d=oe();r(d.position,I(-160,150),I(128,32),I(-512,-640)),R(s,d)}if(ge(e)){var p=se();r(p.position,I(-160,160),I(128,32),I(-512,-720)),R(s,p)}})),addEventListener(`mousedown`,()=>Zr=!0),addEventListener(`mouseup`,()=>Zr=!1),{ambient:l,directional:d}},ni=(e,t)=>{document.addEventListener(`pointerlockchange`,()=>e.enabled=t===document.pointerLockElement),addEventListener(`click`,()=>t.requestPointerLock())},ri=(e,t,n)=>{var r=e.createProgram(),i=(t,n)=>{var i=e.createShader(t);e.shaderSource(i,n),e.compileShader(i),e.attachShader(r,i)};return i(e.VERTEX_SHADER,t),i(e.FRAGMENT_SHADER,n),e.linkProgram(r),r},ii=(e,t)=>{var n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),n},ai=(e,t,n,r)=>{e.bindBuffer(e.ARRAY_BUFFER,n),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,r,e.FLOAT,!1,0,0)},oi=(e,t,n)=>e.uniformMatrix4fv(t,!1,n),si=(e,t,n)=>e.uniform3f(t,n.x,n.y,n.z),ci=(e,t)=>{for(var n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),i=0;i<r;i++){var{name:a}=e.getActiveAttrib(t,i);n[a]=e.getAttribLocation(t,a)}return n},li=(e,t)=>{for(var n={},r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),i=0;i<r;i++){var{name:a}=e.getActiveUniform(t,i);n[a]=e.getUniformLocation(t,a)}return n},ui=`#version 300 es

precision highp float;
precision highp int;

vec4 packDepthToRGBA(float v) {
  vec4 r = vec4(
    fract(
      v *
      // PackFactors
      vec3(256 * 256 * 256, 256 * 256, 256)
    ),
    v
  );
  r.yzw -=
    r.xyz *
    // ShiftRight8
    1. / 256.;
  return
    r *
    // PackUpscale
    256. / 255.;
}

in vec2 vHighPrecisionZW;

out vec4 color;

void main() {
  color = packDepthToRGBA(
    // fragCoordZ
    .5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + .5
  );
}`,di=`#version 300 es

precision highp float;
precision highp int;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
in vec3 position;

out vec2 vHighPrecisionZW;

void main() {
  gl_Position =
    projectionMatrix *
    // mvPosition
    modelViewMatrix * vec4(position, 1);
  vHighPrecisionZW = gl_Position.zw;
}`,fi=`#version 300 es

precision highp float;
precision highp int;

#define saturate(a) clamp(a, 0., 1.)

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;

in vec3 vColor;

uniform bool fog;
uniform vec3 fogColor;
in vec3 vFogPosition;
uniform float fogNear;
uniform float fogFar;

uniform bool receiveShadow;
uniform vec3 ambient;

struct DirectionalLight {
  vec3 direction;
  vec3 color;
};

uniform DirectionalLight directionalLight;

in vec3 vViewPosition;

uniform sampler2D directionalShadowMap;
in vec4 vDirectionalShadowCoord;

out vec4 color;

void main() {
  vec3 diffuseColor = diffuse * vColor;

  vec3 normal = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  vec3 viewDir = normalize(vViewPosition);

  vec4 shadowCoord = vDirectionalShadowCoord;
  shadowCoord.xyz /= shadowCoord.w;
  vec3 irradiance =
    // dotNL
    saturate(dot(normal, directionalLight.direction)) *
    directionalLight.color *
    // getShadow
    (receiveShadow &&
    all(
      bvec2(
        all(
          bvec4(
            shadowCoord.x >= 0.,
            shadowCoord.x <= 1.,
            shadowCoord.y >= 0.,
            shadowCoord.y <= 1.
          )
        ),
        shadowCoord.z <= 1.
      )
    )
      ? // texture2DCompare
        step(
          shadowCoord.z,
          // unpackRGBAToDepth
          dot(
            texture(directionalShadowMap, shadowCoord.xy),
            // UnpackFactors
            // UnpackDownscale
            255. / 256. /
            // PackFactors
            vec4(256 * 256 * 256, 256 * 256, 256, 1.)
          )
        )
      : 1.);
  vec3 halfDir = normalize(directionalLight.direction + viewDir);
  float dotVH = saturate(dot(viewDir, halfDir));
  float fresnel = exp2((-5.55473 * dotVH - 6.98316) * dotVH);

  color = vec4(
    mix(
      // outgoingLight
      // directDiffuse
      irradiance * diffuseColor +
      // indirectDiffuse
      ambient * diffuseColor +
      // directSpecular
      irradiance *
        // F_Schlick
        (specular * (1. - fresnel) + fresnel) *
        // G_BlinnPhong_Implicit
        .25 *
        // D_BlinnPhong
        (shininess * .5 + 1.) *
        pow(
          // dotNH
          saturate(dot(normal, halfDir)),
          shininess
       ) +
      emissive,
      fogColor,
      // fogFactor
      fog
        ? smoothstep(
            fogNear,
            fogFar,
            // fogDepth
            length(vFogPosition)
          )
        : 0.
    ),
    1
  );
}`,pi=`#version 300 es

precision highp float;
precision highp int;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
in vec3 position;
out vec3 vViewPosition;

in vec3 color;
out vec3 vColor;

out vec3 vFogPosition;

uniform mat4 directionalShadowMatrix;
out vec4 vDirectionalShadowCoord;

void main() {
  vColor.xyz = color.xyz;

  vec4 mvPosition = modelViewMatrix * vec4(position, 1);

  gl_Position = projectionMatrix * mvPosition;
  vViewPosition = -mvPosition.xyz;

  vDirectionalShadowCoord =
    directionalShadowMatrix *
    // worldPosition
    modelMatrix * vec4(position, 1);

  vFogPosition = mvPosition.xyz;
}`,Z=canvas.getContext(`webgl2`);Z.clearColor(0,0,0,0),Z.enable(Z.DEPTH_TEST),Z.enable(Z.CULL_FACE),Z.depthFunc(Z.LEQUAL);var mi=!1,Q=Ce();Q.fogColor=n(),Q.fogNear=1,Q.fogFar=1e3;var hi=Fe(90);ni(Ve(hi),canvas);var{ambient:gi,directional:_i}=ti(Z,Q,hi),vi=ri(Z,pi,fi),yi=ri(Z,di,ui),bi=ci(Z,vi),$=li(Z,vi),xi=ci(Z,yi),Si=li(Z,yi),Ci=Z.createTexture(),wi=1024;Z.bindTexture(Z.TEXTURE_2D,Ci),Z.texImage2D(Z.TEXTURE_2D,0,Z.RGBA8,wi,wi,0,Z.RGBA,Z.UNSIGNED_BYTE,null),Z.texParameteri(Z.TEXTURE_2D,Z.TEXTURE_MAG_FILTER,Z.NEAREST),Z.texParameteri(Z.TEXTURE_2D,Z.TEXTURE_MIN_FILTER,Z.NEAREST),Z.texParameteri(Z.TEXTURE_2D,Z.TEXTURE_WRAP_S,Z.CLAMP_TO_EDGE),Z.texParameteri(Z.TEXTURE_2D,Z.TEXTURE_WRAP_T,Z.CLAMP_TO_EDGE);var Ti=Z.createFramebuffer();Z.bindFramebuffer(Z.FRAMEBUFFER,Ti),Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ci,0);var Ei=Z.createRenderbuffer();Z.bindRenderbuffer(Z.RENDERBUFFER,Ei),Z.renderbufferStorage(Z.RENDERBUFFER,Z.DEPTH_COMPONENT16,wi,wi),Z.framebufferRenderbuffer(Z.FRAMEBUFFER,Z.DEPTH_ATTACHMENT,Z.RENDERBUFFER,Ei);var Di=1/60,Oi=Di,ki,Ai=()=>{var e=(performance.now()||0)*.001;ki||=e;var t=Math.min(e-ki,.1);for(Oi+=t,ki=e;Oi>=Di;)Ae(Q,e=>{Ze(e,Di,Q)}),Oi-=Di},ji=new WeakMap,Mi=(e,t,n,r)=>{var i=ji.get(n)||{};ji.set(n,i);var a=i[e]||ii(Z,n[e]);i[e]=a,ai(Z,t,a,r)},Ni=new WeakMap,Pi=e=>{var n=Ni.get(e)||t(e);return Ni.set(e,n),n},Fi=e=>{var{geometry:t}=e;oi(Z,Si.modelViewMatrix,ie(e.modelViewMatrix,_i.shadow.camera.matrixWorldInverse,e.matrixWorld)),oi(Z,Si.projectionMatrix,_i.shadow.camera.projectionMatrix);var n=Pi(t);Mi(`position`,xi.position,n,3),Z.drawArrays(Z.TRIANGLES,0,n.position.length/3)},Ii=e=>{var{geometry:t,material:n}=e;Z.uniform1i($.fog,n.fog),si(Z,$.fogColor,Q.fogColor),Z.uniform1f($.fogNear,Q.fogNear),Z.uniform1f($.fogFar,Q.fogFar),si(Z,$.diffuse,n.color),si(Z,$.specular,n.specular),Z.uniform1f($.shininess,n.shininess),si(Z,$.emissive,n.emissive),Z.uniform1i($.receiveShadow,e.receiveShadow),oi(Z,$.modelMatrix,e.matrixWorld),oi(Z,$.modelViewMatrix,ie(e.modelViewMatrix,hi.matrixWorldInverse,e.matrixWorld)),oi(Z,$.projectionMatrix,hi.projectionMatrix);var r=Pi(t);Mi(`position`,bi.position,r,3),Mi(`color`,bi.color,r,3),Z.drawArrays(Z.TRIANGLES,0,r.position.length/3)},Li=n(),Ri=n(),zi=()=>{Me(Q),hi.matrixWorldInverse.set(hi.matrixWorld),oe(hi.matrixWorldInverse),Z.useProgram(yi),Z.bindFramebuffer(Z.FRAMEBUFFER,Ti),Z.viewport(0,0,wi,wi),Z.clearColor(1,1,1,1),Z.clear(Z.COLOR_BUFFER_BIT|Z.DEPTH_BUFFER_BIT),Z.frontFace(Z.CW),Ke(_i.shadow,_i),Ue(_i.shadow.camera),Ae(Q,e=>{e.visible&&e.geometry&&e.castShadow&&Fi(e)}),Z.bindFramebuffer(Z.FRAMEBUFFER,null),Z.useProgram(vi),Z.viewport(0,0,canvas.width,canvas.height),Z.clearColor(0,0,0,0),Z.clear(Z.COLOR_BUFFER_BIT|Z.DEPTH_BUFFER_BIT),Z.frontFace(Z.CCW),si(Z,$.ambient,gi),D(Ri,_i.matrixWorld),D(Li,_i.target.matrixWorld),h(l(Ri,Li),hi.matrixWorldInverse);var e=f(Object.assign(Li,_i.color),_i.intensity);si(Z,$[`directionalLight.direction`],Ri),si(Z,$[`directionalLight.color`],e),oi(Z,$.directionalShadowMatrix,_i.shadow.matrix),Ae(Q,e=>{e.visible&&e.geometry&&e.material&&Ii(e)})},Bi=()=>{Ai(),zi(),mi&&requestAnimationFrame(Bi)},Vi=(e,t)=>{canvas.width=e*devicePixelRatio,canvas.height=t*devicePixelRatio,canvas.style.width=e+`px`,canvas.style.height=t+`px`,Z.viewport(0,0,canvas.width,canvas.height),hi.aspect=e/t,Le(hi)};Vi(innerWidth,innerHeight),Bi(),addEventListener(`resize`,()=>{Vi(innerWidth,innerHeight),zi()}),addEventListener(`keypress`,e=>{e.code===`KeyP`&&(mi=!mi,mi?Bi():document.exitPointerLock())}),addEventListener(`click`,()=>{mi||(mi=!0,Bi())});