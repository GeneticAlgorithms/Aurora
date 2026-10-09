(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const nl="180",Nd=0,Gl=1,Fd=2,ku=1,zd=2,ti=3,Ci=0,un=1,Bn=2,Ti=0,Tr=1,Cr=2,Vl=3,Wl=4,Bd=5,Ki=100,Od=101,kd=102,Hd=103,Gd=104,Vd=200,Wd=201,qd=202,Xd=203,Wo=204,qo=205,Yd=206,$d=207,Kd=208,Zd=209,jd=210,Jd=211,Qd=212,ef=213,tf=214,Xo=0,Yo=1,$o=2,Dr=3,Ko=4,Zo=5,jo=6,Jo=7,Hu=0,nf=1,rf=2,Ai=0,af=1,sf=2,of=3,lf=4,cf=5,uf=6,hf=7,Gu=300,Pr=301,Ir=302,Qo=303,e0=304,Es=306,t0=1e3,Ji=1001,n0=1002,Un=1003,df=1004,Ma=1005,Tn=1006,qs=1007,Qi=1008,Vn=1009,Vu=1010,Wu=1011,oa=1012,il=1013,tr=1014,ai=1015,pa=1016,rl=1017,al=1018,la=1020,qu=35902,Xu=35899,Yu=1021,$u=1022,Ln=1023,ca=1026,ua=1027,Ku=1028,sl=1029,Zu=1030,ol=1031,ll=1033,ss=33776,os=33777,ls=33778,cs=33779,i0=35840,r0=35841,a0=35842,s0=35843,o0=36196,l0=37492,c0=37496,u0=37808,h0=37809,d0=37810,f0=37811,p0=37812,m0=37813,g0=37814,v0=37815,x0=37816,_0=37817,y0=37818,b0=37819,M0=37820,S0=37821,w0=36492,E0=36494,T0=36495,A0=36283,R0=36284,C0=36285,D0=36286,ff=3200,pf=3201,mf=0,gf=1,wi="",gn="srgb",Lr="srgb-linear",ps="linear",vt="srgb",ar=7680,ql=519,vf=512,xf=513,_f=514,ju=515,yf=516,bf=517,Mf=518,Sf=519,P0=35044,Xl="300 es",Hn=2e3,ms=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,I0=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function wf(i,e){return(i%e+e)%e}function Ys(i,e,t){return(1-t)*i+t*e}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ma{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const p=a[s+0],g=a[s+1],x=a[s+2],b=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=g,e[t+2]=x,e[t+3]=b;return}if(d!==b||l!==p||c!==g||u!==x){let v=1-o;const f=l*p+c*g+u*x+d*b,A=f>=0?1:-1,R=1-f*f;if(R>Number.EPSILON){const P=Math.sqrt(R),L=Math.atan2(P,f*A);v=Math.sin(v*L)/P,o=Math.sin(o*L)/P}const w=o*A;if(l=l*v+p*w,c=c*v+g*w,u=u*v+x*w,d=d*v+b*w,v===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=a[s],p=a[s+1],g=a[s+2],x=a[s+3];return e[t]=o*x+u*d+l*g-c*p,e[t+1]=l*x+u*p+c*d-o*g,e[t+2]=c*x+u*g+o*p-l*d,e[t+3]=u*x-o*d-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(a/2),p=l(n/2),g=l(r/2),x=l(a/2);switch(s){case"XYZ":this._x=p*u*d+c*g*x,this._y=c*g*d-p*u*x,this._z=c*u*x+p*g*d,this._w=c*u*d-p*g*x;break;case"YXZ":this._x=p*u*d+c*g*x,this._y=c*g*d-p*u*x,this._z=c*u*x-p*g*d,this._w=c*u*d+p*g*x;break;case"ZXY":this._x=p*u*d-c*g*x,this._y=c*g*d+p*u*x,this._z=c*u*x+p*g*d,this._w=c*u*d-p*g*x;break;case"ZYX":this._x=p*u*d-c*g*x,this._y=c*g*d+p*u*x,this._z=c*u*x-p*g*d,this._w=c*u*d+p*g*x;break;case"YZX":this._x=p*u*d+c*g*x,this._y=c*g*d+p*u*x,this._z=c*u*x-p*g*d,this._w=c*u*d-p*g*x;break;case"XZY":this._x=p*u*d-c*g*x,this._y=c*g*d-p*u*x,this._z=c*u*x+p*g*d,this._w=c*u*d+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-l)*g,this._y=(a-c)*g,this._z=(s-r)*g}else if(n>o&&n>d){const g=2*Math.sqrt(1+n-o-d);this._w=(u-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(a+c)/g}else if(o>d){const g=2*Math.sqrt(1+o-n-d);this._w=(a-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+d-n-o);this._w=(s-r)/g,this._x=(a+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-n*c,this._z=a*u+s*c+n*l-r*o,this._w=s*u-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*s+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=s*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=a*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),u=2*(o*t-a*r),d=2*(a*n-s*t);return this.x=t+l*c+s*d-o*u,this.y=n+l*u+o*c-a*d,this.z=r+l*d+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $s.copy(this).projectOnVector(e),this.sub($s)}reflect(e){return this.sub($s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new V,Yl=new ma;class it{constructor(e,t,n,r,a,s,o,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],g=n[5],x=n[8],b=r[0],v=r[3],f=r[6],A=r[1],R=r[4],w=r[7],P=r[2],L=r[5],N=r[8];return a[0]=s*b+o*A+l*P,a[3]=s*v+o*R+l*L,a[6]=s*f+o*w+l*N,a[1]=c*b+u*A+d*P,a[4]=c*v+u*R+d*L,a[7]=c*f+u*w+d*N,a[2]=p*b+g*A+x*P,a[5]=p*v+g*R+x*L,a[8]=p*f+g*w+x*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*a*u+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,p=o*l-u*a,g=c*a-s*l,x=t*d+n*p+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=d*b,e[1]=(r*c-u*n)*b,e[2]=(o*n-r*s)*b,e[3]=p*b,e[4]=(u*t-r*l)*b,e[5]=(r*a-o*t)*b,e[6]=g*b,e[7]=(n*l-c*t)*b,e[8]=(s*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ks.makeScale(e,t)),this}rotate(e){return this.premultiply(Ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new it;function Ju(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ef(){const i=gs("canvas");return i.style.display="block",i}const $l={};function ha(i){i in $l||($l[i]=!0,console.warn(i))}function Tf(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Kl=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Af(){const i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===vt&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===vt&&(r.r=Ar(r.r),r.g=Ar(r.g),r.b=Ar(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ha("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ha("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:e,whitePoint:n,transfer:ps,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}const ut=Af();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let sr;class Rf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{sr===void 0&&(sr=gs("canvas")),sr.width=e.width,sr.height=e.height;const r=sr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=si(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cf=0;class cl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Zs(r[s].image)):a.push(Zs(r[s]))}else a=Zs(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Zs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Df=0;const js=new V;class rn extends kr{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Ji,r=Ji,a=Tn,s=Qi,o=Ln,l=Vn,c=rn.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Ri(),this.name="",this.source=new cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(js).x}get height(){return this.source.getSize(js).y}get depth(){return this.source.getSize(js).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t0:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case n0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case t0:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case n0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Gu;rn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],g=l[5],x=l[9],b=l[2],v=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-b)<.01&&Math.abs(x-v)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+b)<.1&&Math.abs(x+v)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,w=(g+1)/2,P=(f+1)/2,L=(u+p)/4,N=(d+b)/4,D=(x+v)/4;return R>w&&R>P?R<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(R),r=L/n,a=N/n):w>P?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=L/r,a=D/r):P<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),n=N/a,r=D/a),this.set(n,r,a,t),this}let A=Math.sqrt((v-x)*(v-x)+(d-b)*(d-b)+(p-u)*(p-u));return Math.abs(A)<.001&&(A=1),this.x=(v-x)/A,this.y=(d-b)/A,this.z=(p-u)/A,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pf extends kr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new rn(r);this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new cl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends Pf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qu extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class If extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ga{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Dn):Dn.fromBufferAttribute(a,s),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),wa.subVectors(this.max,$r),or.subVectors(e.a,$r),lr.subVectors(e.b,$r),cr.subVectors(e.c,$r),pi.subVectors(lr,or),mi.subVectors(cr,lr),Bi.subVectors(or,cr);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Bi.z,Bi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Bi.z,0,-Bi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Bi.y,Bi.x,0];return!Js(t,or,lr,cr,wa)||(t=[1,0,0,0,1,0,0,0,1],!Js(t,or,lr,cr,wa))?!1:(Ea.crossVectors(pi,mi),t=[Ea.x,Ea.y,Ea.z],Js(t,or,lr,cr,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new V,new V,new V,new V,new V,new V,new V,new V],Dn=new V,Sa=new ga,or=new V,lr=new V,cr=new V,pi=new V,mi=new V,Bi=new V,$r=new V,wa=new V,Ea=new V,Oi=new V;function Js(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Oi.fromArray(i,a);const o=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Lf=new ga,Kr=new V,Qs=new V;class Ts{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lf.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const t=Kr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Kr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Qs)),this.expandByPoint(Kr.copy(e.center).sub(Qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Kn=new V,eo=new V,Ta=new V,gi=new V,to=new V,Aa=new V,no=new V;class eh{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){eo.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(eo);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ta),o=gi.dot(this.direction),l=-gi.dot(Ta),c=gi.lengthSq(),u=Math.abs(1-s*s);let d,p,g,x;if(u>0)if(d=s*l-o,p=s*o-l,x=a*u,d>=0)if(p>=-x)if(p<=x){const b=1/u;d*=b,p*=b,g=d*(d+s*p+2*o)+p*(s*d+p+2*l)+c}else p=a,d=Math.max(0,-(s*p+o)),g=-d*d+p*(p+2*l)+c;else p=-a,d=Math.max(0,-(s*p+o)),g=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-s*a+o)),p=d>0?-a:Math.min(Math.max(-a,-l),a),g=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-a,-l),a),g=p*(p+2*l)+c):(d=Math.max(0,-(s*a+o)),p=d>0?a:Math.min(Math.max(-a,-l),a),g=-d*d+p*(p+2*l)+c);else p=s>0?-a:a,d=Math.max(0,-(s*p+o)),g=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(eo).addScaledVector(Ta,p),g}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),r=Kn.dot(Kn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(a=(e.min.y-p.y)*u,s=(e.max.y-p.y)*u):(a=(e.max.y-p.y)*u,s=(e.min.y-p.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,r,a){to.subVectors(t,e),Aa.subVectors(n,e),no.crossVectors(to,Aa);let s=this.direction.dot(no),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;gi.subVectors(this.origin,e);const l=o*this.direction.dot(Aa.crossVectors(gi,Aa));if(l<0)return null;const c=o*this.direction.dot(to.cross(gi));if(c<0||l+c>s)return null;const u=-o*gi.dot(no);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,r,a,s,o,l,c,u,d,p,g,x,b,v){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,u,d,p,g,x,b,v)}set(e,t,n,r,a,s,o,l,c,u,d,p,g,x,b,v){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=g,f[7]=x,f[11]=b,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ur.setFromMatrixColumn(e,0).length(),a=1/ur.setFromMatrixColumn(e,1).length(),s=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const p=s*u,g=s*d,x=o*u,b=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=g+x*c,t[5]=p-b*c,t[9]=-o*l,t[2]=b-p*c,t[6]=x+g*c,t[10]=s*l}else if(e.order==="YXZ"){const p=l*u,g=l*d,x=c*u,b=c*d;t[0]=p+b*o,t[4]=x*o-g,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=g*o-x,t[6]=b+p*o,t[10]=s*l}else if(e.order==="ZXY"){const p=l*u,g=l*d,x=c*u,b=c*d;t[0]=p-b*o,t[4]=-s*d,t[8]=x+g*o,t[1]=g+x*o,t[5]=s*u,t[9]=b-p*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const p=s*u,g=s*d,x=o*u,b=o*d;t[0]=l*u,t[4]=x*c-g,t[8]=p*c+b,t[1]=l*d,t[5]=b*c+p,t[9]=g*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const p=s*l,g=s*c,x=o*l,b=o*c;t[0]=l*u,t[4]=b-p*d,t[8]=x*d+g,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*d+x,t[10]=p-b*d}else if(e.order==="XZY"){const p=s*l,g=s*c,x=o*l,b=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+b,t[5]=s*u,t[9]=g*d-x,t[2]=x*d-g,t[6]=o*u,t[10]=b*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uf,e,Nf)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),vi.crossVectors(n,pn),vi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),vi.crossVectors(n,pn)),vi.normalize(),Ra.crossVectors(pn,vi),r[0]=vi.x,r[4]=Ra.x,r[8]=pn.x,r[1]=vi.y,r[5]=Ra.y,r[9]=pn.y,r[2]=vi.z,r[6]=Ra.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],g=n[13],x=n[2],b=n[6],v=n[10],f=n[14],A=n[3],R=n[7],w=n[11],P=n[15],L=r[0],N=r[4],D=r[8],y=r[12],M=r[1],C=r[5],z=r[9],H=r[13],$=r[2],G=r[6],K=r[10],Q=r[14],X=r[3],le=r[7],me=r[11],_e=r[15];return a[0]=s*L+o*M+l*$+c*X,a[4]=s*N+o*C+l*G+c*le,a[8]=s*D+o*z+l*K+c*me,a[12]=s*y+o*H+l*Q+c*_e,a[1]=u*L+d*M+p*$+g*X,a[5]=u*N+d*C+p*G+g*le,a[9]=u*D+d*z+p*K+g*me,a[13]=u*y+d*H+p*Q+g*_e,a[2]=x*L+b*M+v*$+f*X,a[6]=x*N+b*C+v*G+f*le,a[10]=x*D+b*z+v*K+f*me,a[14]=x*y+b*H+v*Q+f*_e,a[3]=A*L+R*M+w*$+P*X,a[7]=A*N+R*C+w*G+P*le,a[11]=A*D+R*z+w*K+P*me,a[15]=A*y+R*H+w*Q+P*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],g=e[14],x=e[3],b=e[7],v=e[11],f=e[15];return x*(+a*l*d-r*c*d-a*o*p+n*c*p+r*o*g-n*l*g)+b*(+t*l*g-t*c*p+a*s*p-r*s*g+r*c*u-a*l*u)+v*(+t*c*d-t*o*g-a*s*d+n*s*g+a*o*u-n*c*u)+f*(-r*o*u-t*l*d+t*o*p+r*s*d-n*s*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],g=e[11],x=e[12],b=e[13],v=e[14],f=e[15],A=d*v*c-b*p*c+b*l*g-o*v*g-d*l*f+o*p*f,R=x*p*c-u*v*c-x*l*g+s*v*g+u*l*f-s*p*f,w=u*b*c-x*d*c+x*o*g-s*b*g-u*o*f+s*d*f,P=x*d*l-u*b*l-x*o*p+s*b*p+u*o*v-s*d*v,L=t*A+n*R+r*w+a*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return e[0]=A*N,e[1]=(b*p*a-d*v*a-b*r*g+n*v*g+d*r*f-n*p*f)*N,e[2]=(o*v*a-b*l*a+b*r*c-n*v*c-o*r*f+n*l*f)*N,e[3]=(d*l*a-o*p*a-d*r*c+n*p*c+o*r*g-n*l*g)*N,e[4]=R*N,e[5]=(u*v*a-x*p*a+x*r*g-t*v*g-u*r*f+t*p*f)*N,e[6]=(x*l*a-s*v*a-x*r*c+t*v*c+s*r*f-t*l*f)*N,e[7]=(s*p*a-u*l*a+u*r*c-t*p*c-s*r*g+t*l*g)*N,e[8]=w*N,e[9]=(x*d*a-u*b*a-x*n*g+t*b*g+u*n*f-t*d*f)*N,e[10]=(s*b*a-x*o*a+x*n*c-t*b*c-s*n*f+t*o*f)*N,e[11]=(u*o*a-s*d*a-u*n*c+t*d*c+s*n*g-t*o*g)*N,e[12]=P*N,e[13]=(u*b*r-x*d*r+x*n*p-t*b*p-u*n*v+t*d*v)*N,e[14]=(x*o*r-s*b*r-x*n*l+t*b*l+s*n*v-t*o*v)*N,e[15]=(s*d*r-u*o*r+u*n*l-t*d*l-s*n*p+t*o*p)*N,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,d=o+o,p=a*c,g=a*u,x=a*d,b=s*u,v=s*d,f=o*d,A=l*c,R=l*u,w=l*d,P=n.x,L=n.y,N=n.z;return r[0]=(1-(b+f))*P,r[1]=(g+w)*P,r[2]=(x-R)*P,r[3]=0,r[4]=(g-w)*L,r[5]=(1-(p+f))*L,r[6]=(v+A)*L,r[7]=0,r[8]=(x+R)*N,r[9]=(v-A)*N,r[10]=(1-(p+b))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=ur.set(r[0],r[1],r[2]).length();const s=ur.set(r[4],r[5],r[6]).length(),o=ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const c=1/a,u=1/s,d=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,t.setFromRotationMatrix(Pn),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=Hn,l=!1){const c=this.elements,u=2*a/(t-e),d=2*a/(n-r),p=(t+e)/(t-e),g=(n+r)/(n-r);let x,b;if(l)x=a/(s-a),b=s*a/(s-a);else if(o===Hn)x=-(s+a)/(s-a),b=-2*s*a/(s-a);else if(o===ms)x=-s/(s-a),b=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=Hn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-r),p=-(t+e)/(t-e),g=-(n+r)/(n-r);let x,b;if(l)x=1/(s-a),b=s/(s-a);else if(o===Hn)x=-2/(s-a),b=-(s+a)/(s-a);else if(o===ms)x=-1/(s-a),b=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ur=new V,Pn=new Et,Uf=new V(0,0,0),Nf=new V(1,1,1),vi=new V,Ra=new V,pn=new V,jl=new Et,Jl=new ma;class li{constructor(e=0,t=0,n=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(lt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ff=0;const Ql=new V,hr=new ma,Zn=new Et,Ca=new V,Zr=new V,zf=new V,Bf=new ma,ec=new V(1,0,0),tc=new V(0,1,0),nc=new V(0,0,1),ic={type:"added"},Of={type:"removed"},dr={type:"childadded",child:null},io={type:"childremoved",child:null};class $t extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new V,t=new li,n=new ma,r=new V(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new it}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(ec,e)}rotateY(e){return this.rotateOnAxis(tc,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ec,e)}translateY(e){return this.translateOnAxis(tc,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Zr,Ca,this.up):Zn.lookAt(Ca,Zr,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(Zn),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ic),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Of),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ic),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),p=s(e.skeletons),g=s(e.animations),x=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}$t.DEFAULT_UP=new V(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new V,jn=new V,ro=new V,Jn=new V,fr=new V,pr=new V,rc=new V,ao=new V,so=new V,oo=new V,lo=new _t,co=new _t,uo=new _t;class En{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){In.subVectors(r,t),jn.subVectors(n,t),ro.subVectors(e,t);const s=In.dot(In),o=In.dot(jn),l=In.dot(ro),c=jn.dot(jn),u=jn.dot(ro),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const p=1/d,g=(c*l-o*u)*p,x=(s*u-o*l)*p;return a.set(1-g-x,x,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Jn.x),l.addScaledVector(s,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return lo.setScalar(0),co.setScalar(0),uo.setScalar(0),lo.fromBufferAttribute(e,t),co.fromBufferAttribute(e,n),uo.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(lo,a.x),s.addScaledVector(co,a.y),s.addScaledVector(uo,a.z),s}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),jn.subVectors(e,t),In.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),In.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return En.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;fr.subVectors(r,n),pr.subVectors(a,n),ao.subVectors(e,n);const l=fr.dot(ao),c=pr.dot(ao);if(l<=0&&c<=0)return t.copy(n);so.subVectors(e,r);const u=fr.dot(so),d=pr.dot(so);if(u>=0&&d<=u)return t.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(fr,s);oo.subVectors(e,a);const g=fr.dot(oo),x=pr.dot(oo);if(x>=0&&g<=x)return t.copy(a);const b=g*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(pr,o);const v=u*x-g*d;if(v<=0&&d-u>=0&&g-x>=0)return rc.subVectors(a,r),o=(d-u)/(d-u+(g-x)),t.copy(r).addScaledVector(rc,o);const f=1/(v+b+p);return s=b*f,o=p*f,t.copy(n).addScaledVector(fr,s).addScaledVector(pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Da={h:0,s:0,l:0};function ho(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=wf(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=ho(s,a,e+1/3),this.g=ho(s,a,e),this.b=ho(s,a,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=gn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const n=nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return ut.workingToColorSpace(Yt.copy(this),e),Math.round(lt(Yt.r*255,0,255))*65536+Math.round(lt(Yt.g*255,0,255))*256+Math.round(lt(Yt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,a=Yt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case n:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-n)/d+2;break;case a:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=gn){ut.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Da);const n=Ys(xi.h,Da.h,t),r=Ys(xi.s,Da.s,t),a=Ys(xi.l,Da.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ht;ht.NAMES=nh;let kf=0;class Hr extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Tr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=qo,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vs extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new V,Pa=new et;let Hf=0;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=P0,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),a=xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==P0&&(e.usage=this.usage),e}}class ih extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rh extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gf=0;const wn=new Et,fo=new $t,mr=new V,mn=new ga,jr=new ga,qt=new V;class hn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ju(e)?rh:ih)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new it().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return fo.lookAt(e),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];mn.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(mn.min,jr.min),mn.expandByPoint(qt),qt.addVectors(mn.max,jr.max),mn.expandByPoint(qt)):(mn.expandByPoint(jr.min),mn.expandByPoint(jr.max))}mn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)qt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(qt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qt.fromBufferAttribute(o,c),l&&(mr.fromBufferAttribute(e,c),qt.add(mr)),r=Math.max(r,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new V,l[D]=new V;const c=new V,u=new V,d=new V,p=new et,g=new et,x=new et,b=new V,v=new V;function f(D,y,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),p.fromBufferAttribute(a,D),g.fromBufferAttribute(a,y),x.fromBufferAttribute(a,M),u.sub(c),d.sub(c),g.sub(p),x.sub(p);const C=1/(g.x*x.y-x.x*g.y);isFinite(C)&&(b.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(C),v.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(C),o[D].add(b),o[y].add(b),o[M].add(b),l[D].add(v),l[y].add(v),l[M].add(v))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,y=A.length;D<y;++D){const M=A[D],C=M.start,z=M.count;for(let H=C,$=C+z;H<$;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const R=new V,w=new V,P=new V,L=new V;function N(D){P.fromBufferAttribute(r,D),L.copy(P);const y=o[D];R.copy(y),R.sub(P.multiplyScalar(P.dot(y))).normalize(),w.crossVectors(L,y);const C=w.dot(l[D])<0?-1:1;s.setXYZW(D,R.x,R.y,R.z,C)}for(let D=0,y=A.length;D<y;++D){const M=A[D],C=M.start,z=M.count;for(let H=C,$=C+z;H<$;H+=3)N(e.getX(H+0)),N(e.getX(H+1)),N(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const r=new V,a=new V,s=new V,o=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let p=0,g=e.count;p<g;p+=3){const x=e.getX(p+0),b=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,b),s.fromBufferAttribute(t,v),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,v),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let g=0,x=0;for(let b=0,v=l.length;b<v;b++){o.isInterleavedBufferAttribute?g=l[b]*o.data.stride+o.offset:g=l[b]*u;for(let f=0;f<u;f++)p[x++]=c[g++]}return new an(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],g=e(p,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const g=c[d];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let p=0,g=d.length;p<g;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new Et,ki=new eh,Ia=new Ts,sc=new V,La=new V,Ua=new V,Na=new V,po=new V,Fa=new V,oc=new V,za=new V;class An extends $t{constructor(e=new hn,t=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Fa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],d=a[l];u!==0&&(po.fromBufferAttribute(d,e),s?Fa.addScaledVector(po,u):Fa.addScaledVector(po.sub(t),u))}t.add(Fa)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(a),ki.copy(e.ray).recast(e.near),!(Ia.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Ia,sc)===null||ki.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(ac.copy(a).invert(),ki.copy(e.ray).applyMatrix4(ac),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,p=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,b=p.length;x<b;x++){const v=p[x],f=s[v.materialIndex],A=Math.max(v.start,g.start),R=Math.min(o.count,Math.min(v.start+v.count,g.start+g.count));for(let w=A,P=R;w<P;w+=3){const L=o.getX(w),N=o.getX(w+1),D=o.getX(w+2);r=Ba(this,f,e,n,c,u,d,L,N,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),b=Math.min(o.count,g.start+g.count);for(let v=x,f=b;v<f;v+=3){const A=o.getX(v),R=o.getX(v+1),w=o.getX(v+2);r=Ba(this,s,e,n,c,u,d,A,R,w),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,b=p.length;x<b;x++){const v=p[x],f=s[v.materialIndex],A=Math.max(v.start,g.start),R=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let w=A,P=R;w<P;w+=3){const L=w,N=w+1,D=w+2;r=Ba(this,f,e,n,c,u,d,L,N,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let v=x,f=b;v<f;v+=3){const A=v,R=v+1,w=v+2;r=Ba(this,s,e,n,c,u,d,A,R,w),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function Vf(i,e,t,n,r,a,s,o){let l;if(e.side===un?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===Ci,o),l===null)return null;za.copy(o),za.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(za);return c<t.near||c>t.far?null:{distance:c,point:za.clone(),object:i}}function Ba(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,La),i.getVertexPosition(l,Ua),i.getVertexPosition(c,Na);const u=Vf(i,e,t,n,La,Ua,Na,oc);if(u){const d=new V;En.getBarycoord(oc,La,Ua,Na,d),r&&(u.uv=En.getInterpolatedAttribute(r,o,l,c,d,new et)),a&&(u.uv1=En.getInterpolatedAttribute(a,o,l,c,d,new et)),s&&(u.normal=En.getInterpolatedAttribute(s,o,l,c,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new V,materialIndex:0};En.getNormal(La,Ua,Na,p.normal),u.face=p,u.barycoord=d}return u}class va extends hn{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],d=[];let p=0,g=0;x("z","y","x",-1,-1,n,t,e,s,a,0),x("z","y","x",1,-1,n,t,-e,s,a,1),x("x","z","y",1,1,e,n,t,r,s,2),x("x","z","y",1,-1,e,n,-t,r,s,3),x("x","y","z",1,-1,e,t,n,r,a,4),x("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2));function x(b,v,f,A,R,w,P,L,N,D,y){const M=w/N,C=P/D,z=w/2,H=P/2,$=L/2,G=N+1,K=D+1;let Q=0,X=0;const le=new V;for(let me=0;me<K;me++){const _e=me*C-H;for(let Ge=0;Ge<G;Ge++){const Ve=Ge*M-z;le[b]=Ve*A,le[v]=_e*R,le[f]=$,c.push(le.x,le.y,le.z),le[b]=0,le[v]=0,le[f]=L>0?1:-1,u.push(le.x,le.y,le.z),d.push(Ge/N),d.push(1-me/D),Q+=1}}for(let me=0;me<D;me++)for(let _e=0;_e<N;_e++){const Ge=p+_e+G*me,Ve=p+_e+G*(me+1),Ke=p+(_e+1)+G*(me+1),tt=p+(_e+1)+G*me;l.push(Ge,Ve,tt),l.push(Ve,Ke,tt),X+=6}o.addGroup(g,X,y),g+=X,p+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ur(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=Ur(i[t]);for(const r in n)e[r]=n[r]}return e}function Wf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ah(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const qf={clone:Ur,merge:en};var Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=Wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sh extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new V,lc=new et,cc=new et;class vn extends sh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=I0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return I0*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,lc,cc),t.subVectors(cc,lc)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=-90,vr=1;class $f extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(gr,vr,e,t);r.layers=this.layers,this.add(r);const a=new vn(gr,vr,e,t);a.layers=this.layers,this.add(a);const s=new vn(gr,vr,e,t);s.layers=this.layers,this.add(s);const o=new vn(gr,vr,e,t);o.layers=this.layers,this.add(o);const l=new vn(gr,vr,e,t);l.layers=this.layers,this.add(l);const c=new vn(gr,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,p,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class oh extends rn{constructor(e=[],t=Pr,n,r,a,s,o,l,c,u){super(e,t,n,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kf extends nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new va(5,5,5),a=new ci({name:"CubemapFromEquirect",uniforms:Ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ti});a.uniforms.tEquirect.value=t;const s=new An(r,a),o=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Tn),new $f(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}class na extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zf={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const b of e.hand.values()){const v=t.getJointPose(b,n),f=this._getHandJoint(c,b);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new na;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jf extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=P0,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new V;class xs{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),a=xt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class lh extends Hr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xr;const Jr=new V,_r=new V,yr=new V,br=new et,Qr=new et,ch=new Et,Oa=new V,ea=new V,ka=new V,uc=new et,go=new et,hc=new et;class Qf extends $t{constructor(e=new lh){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new hn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jf(t,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new xs(n,3,0,!1)),xr.setAttribute("uv",new xs(n,2,3,!1))}this.geometry=xr,this.material=e,this.center=new et(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),ch.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-yr.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const s=this.center;Ha(Oa.set(-.5,-.5,0),yr,s,_r,r,a),Ha(ea.set(.5,-.5,0),yr,s,_r,r,a),Ha(ka.set(.5,.5,0),yr,s,_r,r,a),uc.set(0,0),go.set(1,0),hc.set(1,1);let o=e.ray.intersectTriangle(Oa,ea,ka,!1,Jr);if(o===null&&(Ha(ea.set(-.5,.5,0),yr,s,_r,r,a),go.set(0,1),o=e.ray.intersectTriangle(Oa,ka,ea,!1,Jr),o===null))return;const l=e.ray.origin.distanceTo(Jr);l<e.near||l>e.far||t.push({distance:l,point:Jr.clone(),uv:En.getInterpolation(Jr,Oa,ea,ka,uc,go,hc,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ha(i,e,t,n,r,a){br.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Qr.x=a*br.x-r*br.y,Qr.y=r*br.x+a*br.y):Qr.copy(br),i.copy(e),i.x+=Qr.x,i.y+=Qr.y,i.applyMatrix4(ch)}const vo=new V,ep=new V,tp=new it;class Yi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vo.subVectors(n,t).cross(ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tp.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new Ts,np=new et(.5,.5),Ga=new V;class ul{constructor(e=new Yi,t=new Yi,n=new Yi,r=new Yi,a=new Yi,s=new Yi){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],p=a[6],g=a[7],x=a[8],b=a[9],v=a[10],f=a[11],A=a[12],R=a[13],w=a[14],P=a[15];if(r[0].setComponents(c-s,g-u,f-x,P-A).normalize(),r[1].setComponents(c+s,g+u,f+x,P+A).normalize(),r[2].setComponents(c+o,g+d,f+b,P+R).normalize(),r[3].setComponents(c-o,g-d,f-b,P-R).normalize(),n)r[4].setComponents(l,p,v,w).normalize(),r[5].setComponents(c-l,g-p,f-v,P-w).normalize();else if(r[4].setComponents(c-l,g-p,f-v,P-w).normalize(),t===Hn)r[5].setComponents(c+l,g+p,f+v,P+w).normalize();else if(t===ms)r[5].setComponents(l,p,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);const t=np.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hl extends Hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dc=new Et,L0=new eh,Va=new Ts,Wa=new V;class uh extends $t{constructor(e=new hn,t=new hl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),Va.radius+=a,e.ray.intersectsSphere(Va)===!1)return;dc.copy(r).invert(),L0.copy(e.ray).applyMatrix4(dc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,s.start),g=Math.min(c.count,s.start+s.count);for(let x=p,b=g;x<b;x++){const v=c.getX(x);Wa.fromBufferAttribute(d,v),fc(Wa,v,l,r,e,t,this)}}else{const p=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let x=p,b=g;x<b;x++)Wa.fromBufferAttribute(d,x),fc(Wa,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function fc(i,e,t,n,r,a,s){const o=L0.distanceSqToPoint(i);if(o<t){const l=new V;L0.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class dl extends rn{constructor(e,t,n,r,a,s,o,l,c){super(e,t,n,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hh extends rn{constructor(e,t,n=tr,r,a,s,o=Un,l=Un,c,u=ca,d=1){if(u!==ca&&u!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,a,s,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dh extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fl extends hn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const a=[],s=[];o(r),c(n),u(),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(a.slice(),3)),this.setAttribute("uv",new Kt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const R=new V,w=new V,P=new V;for(let L=0;L<t.length;L+=3)g(t[L+0],R),g(t[L+1],w),g(t[L+2],P),l(R,w,P,A)}function l(A,R,w,P){const L=P+1,N=[];for(let D=0;D<=L;D++){N[D]=[];const y=A.clone().lerp(w,D/L),M=R.clone().lerp(w,D/L),C=L-D;for(let z=0;z<=C;z++)z===0&&D===L?N[D][z]=y:N[D][z]=y.clone().lerp(M,z/C)}for(let D=0;D<L;D++)for(let y=0;y<2*(L-D)-1;y++){const M=Math.floor(y/2);y%2===0?(p(N[D][M+1]),p(N[D+1][M]),p(N[D][M])):(p(N[D][M+1]),p(N[D+1][M+1]),p(N[D+1][M]))}}function c(A){const R=new V;for(let w=0;w<a.length;w+=3)R.x=a[w+0],R.y=a[w+1],R.z=a[w+2],R.normalize().multiplyScalar(A),a[w+0]=R.x,a[w+1]=R.y,a[w+2]=R.z}function u(){const A=new V;for(let R=0;R<a.length;R+=3){A.x=a[R+0],A.y=a[R+1],A.z=a[R+2];const w=v(A)/2/Math.PI+.5,P=f(A)/Math.PI+.5;s.push(w,1-P)}x(),d()}function d(){for(let A=0;A<s.length;A+=6){const R=s[A+0],w=s[A+2],P=s[A+4],L=Math.max(R,w,P),N=Math.min(R,w,P);L>.9&&N<.1&&(R<.2&&(s[A+0]+=1),w<.2&&(s[A+2]+=1),P<.2&&(s[A+4]+=1))}}function p(A){a.push(A.x,A.y,A.z)}function g(A,R){const w=A*3;R.x=e[w+0],R.y=e[w+1],R.z=e[w+2]}function x(){const A=new V,R=new V,w=new V,P=new V,L=new et,N=new et,D=new et;for(let y=0,M=0;y<a.length;y+=9,M+=6){A.set(a[y+0],a[y+1],a[y+2]),R.set(a[y+3],a[y+4],a[y+5]),w.set(a[y+6],a[y+7],a[y+8]),L.set(s[M+0],s[M+1]),N.set(s[M+2],s[M+3]),D.set(s[M+4],s[M+5]),P.copy(A).add(R).add(w).divideScalar(3);const C=v(P);b(L,M+0,A,C),b(N,M+2,R,C),b(D,M+4,w,C)}}function b(A,R,w,P){P<0&&A.x===1&&(s[R]=A.x-1),w.x===0&&w.z===0&&(s[R]=P/2/Math.PI+.5)}function v(A){return Math.atan2(A.z,-A.x)}function f(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.vertices,e.indices,e.radius,e.details)}}class pl extends fl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pl(e.radius,e.detail)}}class As extends hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,p=t/l,g=[],x=[],b=[],v=[];for(let f=0;f<u;f++){const A=f*p-s;for(let R=0;R<c;R++){const w=R*d-a;x.push(w,-A,0),b.push(0,0,1),v.push(R/o),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){const R=A+c*f,w=A+c*(f+1),P=A+1+c*(f+1),L=A+1+c*f;g.push(R,w,L),g.push(w,P,L)}this.setIndex(g),this.setAttribute("position",new Kt(x,3)),this.setAttribute("normal",new Kt(b,3)),this.setAttribute("uv",new Kt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.widthSegments,e.heightSegments)}}class ml extends hn{constructor(e=.5,t=1,n=32,r=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const p=(t-e)/r,g=new V,x=new et;for(let b=0;b<=r;b++){for(let v=0;v<=n;v++){const f=a+v/n*s;g.x=d*Math.cos(f),g.y=d*Math.sin(f),l.push(g.x,g.y,g.z),c.push(0,0,1),x.x=(g.x/t+1)/2,x.y=(g.y/t+1)/2,u.push(x.x,x.y)}d+=p}for(let b=0;b<r;b++){const v=b*(n+1);for(let f=0;f<n;f++){const A=f+v,R=A,w=A+n+1,P=A+n+2,L=A+1;o.push(R,w,L),o.push(w,P,L)}}this.setIndex(o),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gl extends hn{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const u=[],d=new V,p=new V,g=[],x=[],b=[],v=[];for(let f=0;f<=n;f++){const A=[],R=f/n;let w=0;f===0&&s===0?w=.5/t:f===n&&l===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){const L=P/t;d.x=-e*Math.cos(r+L*a)*Math.sin(s+R*o),d.y=e*Math.cos(s+R*o),d.z=e*Math.sin(r+L*a)*Math.sin(s+R*o),x.push(d.x,d.y,d.z),p.copy(d).normalize(),b.push(p.x,p.y,p.z),v.push(L+w,1-R),A.push(c++)}u.push(A)}for(let f=0;f<n;f++)for(let A=0;A<t;A++){const R=u[f][A+1],w=u[f][A],P=u[f+1][A],L=u[f+1][A+1];(f!==0||s>0)&&g.push(R,w,L),(f!==n-1||l<Math.PI)&&g.push(w,P,L)}this.setIndex(g),this.setAttribute("position",new Kt(x,3)),this.setAttribute("normal",new Kt(b,3)),this.setAttribute("uv",new Kt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ip extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rp extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fh extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xo=new Et,pc=new V,mc=new V;class ap{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(pc),mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mc),t.updateMatrixWorld(),xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gc=new Et,ta=new V,_o=new V;class sp extends ap{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(ta),_o.copy(n.position),_o.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_o),n.updateMatrixWorld(),r.makeTranslation(-ta.x,-ta.y,-ta.z),gc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc,n.coordinateSystem,n.reversedDepth)}}class vc extends fh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class op extends sh{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lp extends fh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cp extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class up{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xc(i,e,t,n){const r=hp(n);switch(t){case Yu:return i*e;case Ku:return i*e/r.components*r.byteLength;case sl:return i*e/r.components*r.byteLength;case Zu:return i*e*2/r.components*r.byteLength;case ol:return i*e*2/r.components*r.byteLength;case $u:return i*e*3/r.components*r.byteLength;case Ln:return i*e*4/r.components*r.byteLength;case ll:return i*e*4/r.components*r.byteLength;case ss:case os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ls:case cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case r0:case s0:return Math.max(i,16)*Math.max(e,8)/4;case i0:case a0:return Math.max(i,8)*Math.max(e,8)/2;case o0:case l0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case c0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case u0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case h0:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case d0:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case f0:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case p0:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case m0:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case g0:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case v0:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case x0:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _0:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case y0:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case b0:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case M0:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case S0:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case w0:case E0:case T0:return Math.ceil(i/4)*Math.ceil(e/4)*16;case A0:case R0:return Math.ceil(i/4)*Math.ceil(e/4)*8;case C0:case D0:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hp(i){switch(i){case Vn:case Vu:return{byteLength:1,components:1};case oa:case Wu:case pa:return{byteLength:2,components:1};case rl:case al:return{byteLength:2,components:4};case tr:case il:case ai:return{byteLength:4,components:1};case qu:case Xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);function ph(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function dp(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((g,x)=>g.start-x.start);let p=0;for(let g=1;g<d.length;g++){const x=d[p],b=d[g];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++p,d[p]=b)}d.length=p+1;for(let g=0,x=d.length;g<x;g++){const b=d[g];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,e1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,h1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,W1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:fp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:vp,alphatest_pars_fragment:xp,aomap_fragment:_p,aomap_pars_fragment:yp,batching_pars_vertex:bp,batching_vertex:Mp,begin_vertex:Sp,beginnormal_vertex:wp,bsdfs:Ep,iridescence_fragment:Tp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Pp,color_fragment:Ip,color_pars_fragment:Lp,color_pars_vertex:Up,color_vertex:Np,common:Fp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:Bp,displacementmap_pars_vertex:Op,displacementmap_vertex:kp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Gp,colorspace_fragment:Vp,colorspace_pars_fragment:Wp,envmap_fragment:qp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:Yp,envmap_pars_vertex:$p,envmap_physical_pars_fragment:am,envmap_vertex:Kp,fog_vertex:Zp,fog_pars_vertex:jp,fog_fragment:Jp,fog_pars_fragment:Qp,gradientmap_pars_fragment:em,lightmap_pars_fragment:tm,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:rm,lights_toon_fragment:sm,lights_toon_pars_fragment:om,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:um,lights_physical_pars_fragment:hm,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:xm,map_fragment:_m,map_pars_fragment:ym,map_particle_fragment:bm,map_particle_pars_fragment:Mm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:wm,morphinstance_vertex:Em,morphcolor_vertex:Tm,morphnormal_vertex:Am,morphtarget_pars_vertex:Rm,morphtarget_vertex:Cm,normal_fragment_begin:Dm,normal_fragment_maps:Pm,normal_pars_fragment:Im,normal_pars_vertex:Lm,normal_vertex:Um,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:Om,opaque_fragment:km,packing:Hm,premultiplied_alpha_fragment:Gm,project_vertex:Vm,dithering_fragment:Wm,dithering_pars_fragment:qm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:Km,shadowmap_vertex:Zm,shadowmask_pars_fragment:jm,skinbase_vertex:Jm,skinning_pars_vertex:Qm,skinning_vertex:e1,skinnormal_vertex:t1,specularmap_fragment:n1,specularmap_pars_fragment:i1,tonemapping_fragment:r1,tonemapping_pars_fragment:a1,transmission_fragment:s1,transmission_pars_fragment:o1,uv_pars_fragment:l1,uv_pars_vertex:c1,uv_vertex:u1,worldpos_vertex:h1,background_vert:d1,background_frag:f1,backgroundCube_vert:p1,backgroundCube_frag:m1,cube_vert:g1,cube_frag:v1,depth_vert:x1,depth_frag:_1,distanceRGBA_vert:y1,distanceRGBA_frag:b1,equirect_vert:M1,equirect_frag:S1,linedashed_vert:w1,linedashed_frag:E1,meshbasic_vert:T1,meshbasic_frag:A1,meshlambert_vert:R1,meshlambert_frag:C1,meshmatcap_vert:D1,meshmatcap_frag:P1,meshnormal_vert:I1,meshnormal_frag:L1,meshphong_vert:U1,meshphong_frag:N1,meshphysical_vert:F1,meshphysical_frag:z1,meshtoon_vert:B1,meshtoon_frag:O1,points_vert:k1,points_frag:H1,shadow_vert:G1,shadow_frag:V1,sprite_vert:W1,sprite_frag:q1},ye={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Fn={basic:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:en([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:en([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:en([ye.points,ye.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:en([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:en([ye.common,ye.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:en([ye.sprite,ye.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:en([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:en([ye.lights,ye.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Fn.physical={uniforms:en([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const qa={r:0,b:0,g:0},Gi=new li,X1=new Et;function Y1(i,e,t,n,r,a,s){const o=new ht(0);let l=a===!0?0:1,c,u,d=null,p=0,g=null;function x(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?t:e).get(w)),w}function b(R){let w=!1;const P=x(R);P===null?f(o,l):P&&P.isColor&&(f(P,1),w=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(R,w){const P=x(w);P&&(P.isCubeTexture||P.mapping===Es)?(u===void 0&&(u=new An(new va(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ur(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Gi.copy(w.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(X1.makeRotationFromEuler(Gi)),u.material.toneMapped=ut.getTransfer(P.colorSpace)!==vt,(d!==P||p!==P.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=P,p=P.version,g=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new An(new As(2,2),new ci({name:"BackgroundMaterial",uniforms:Ur(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ut.getTransfer(P.colorSpace)!==vt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||p!==P.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=P,p=P.version,g=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function f(R,w){R.getRGB(qa,ah(i)),n.buffers.color.setClear(qa.r,qa.g,qa.b,w,s)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,w=1){o.set(R),l=w,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,f(o,l)},render:b,addToRenderList:v,dispose:A}}function $1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let a=r,s=!1;function o(M,C,z,H,$){let G=!1;const K=d(H,z,C);a!==K&&(a=K,c(a.object)),G=g(M,H,z,$),G&&x(M,H,z,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,w(M,C,z,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,C,z){const H=z.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let G=$[C.id];G===void 0&&(G={},$[C.id]=G);let K=G[H];return K===void 0&&(K=p(l()),G[H]=K),K}function p(M){const C=[],z=[],H=[];for(let $=0;$<t;$++)C[$]=0,z[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:H,object:M,attributes:{},index:null}}function g(M,C,z,H){const $=a.attributes,G=C.attributes;let K=0;const Q=z.getAttributes();for(const X in Q)if(Q[X].location>=0){const me=$[X];let _e=G[X];if(_e===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;K++}return a.attributesNum!==K||a.index!==H}function x(M,C,z,H){const $={},G=C.attributes;let K=0;const Q=z.getAttributes();for(const X in Q)if(Q[X].location>=0){let me=G[X];me===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),$[X]=_e,K++}a.attributes=$,a.attributesNum=K,a.index=H}function b(){const M=a.newAttributes;for(let C=0,z=M.length;C<z;C++)M[C]=0}function v(M){f(M,0)}function f(M,C){const z=a.newAttributes,H=a.enabledAttributes,$=a.attributeDivisors;z[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),$[M]!==C&&(i.vertexAttribDivisor(M,C),$[M]=C)}function A(){const M=a.newAttributes,C=a.enabledAttributes;for(let z=0,H=C.length;z<H;z++)C[z]!==M[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function R(M,C,z,H,$,G,K){K===!0?i.vertexAttribIPointer(M,C,z,$,G):i.vertexAttribPointer(M,C,z,H,$,G)}function w(M,C,z,H){b();const $=H.attributes,G=z.getAttributes(),K=C.defaultAttributeValues;for(const Q in G){const X=G[Q];if(X.location>=0){let le=$[Q];if(le===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const me=le.normalized,_e=le.itemSize,Ge=e.get(le);if(Ge===void 0)continue;const Ve=Ge.buffer,Ke=Ge.type,tt=Ge.bytesPerElement,te=Ke===i.INT||Ke===i.UNSIGNED_INT||le.gpuType===il;if(le.isInterleavedBufferAttribute){const ie=le.data,Te=ie.stride,Oe=le.offset;if(ie.isInstancedInterleavedBuffer){for(let Ue=0;Ue<X.locationSize;Ue++)f(X.location+Ue,ie.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ue=0;Ue<X.locationSize;Ue++)v(X.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Ue=0;Ue<X.locationSize;Ue++)R(X.location+Ue,_e/X.locationSize,Ke,me,Te*tt,(Oe+_e/X.locationSize*Ue)*tt,te)}else{if(le.isInstancedBufferAttribute){for(let ie=0;ie<X.locationSize;ie++)f(X.location+ie,le.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<X.locationSize;ie++)v(X.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ie=0;ie<X.locationSize;ie++)R(X.location+ie,_e/X.locationSize,Ke,me,_e*tt,_e/X.locationSize*ie*tt,te)}}else if(K!==void 0){const me=K[Q];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(X.location,me);break;case 3:i.vertexAttrib3fv(X.location,me);break;case 4:i.vertexAttrib4fv(X.location,me);break;default:i.vertexAttrib1fv(X.location,me)}}}}A()}function P(){D();for(const M in n){const C=n[M];for(const z in C){const H=C[z];for(const $ in H)u(H[$].object),delete H[$];delete C[z]}delete n[M]}}function L(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const z in C){const H=C[z];for(const $ in H)u(H[$].object),delete H[$];delete C[z]}delete n[M.id]}function N(M){for(const C in n){const z=n[C];if(z[M.id]===void 0)continue;const H=z[M.id];for(const $ in H)u(H[$].object),delete H[$];delete z[M.id]}}function D(){y(),s=!0,a!==r&&(a=r,c(a.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:v,disableUnusedAttributes:A}}function K1(i,e,t){let n;function r(c){n=c}function a(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,n,1)}function l(c,u,d,p){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<c.length;x++)s(c[x],u[x],p[x]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,d);let x=0;for(let b=0;b<d;b++)x+=u[b]*p[b];t.update(x,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Z1(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(N){return!(N!==Ln&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const D=N===pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Vn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ai&&!D)}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:w,vertexTextures:P,maxSamples:L}}function j1(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Yi,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const g=d.length!==0||p||n!==0||r;return r=p,n=d.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,g){const x=d.clippingPlanes,b=d.clipIntersection,v=d.clipShadows,f=i.get(d);if(!r||x===null||x.length===0||a&&!v)a?u(null):c();else{const A=a?0:n,R=A*4;let w=f.clippingState||null;l.value=w,w=u(x,p,R,g);for(let P=0;P!==R;++P)w[P]=t[P];f.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,g,x){const b=d!==null?d.length:0;let v=null;if(b!==0){if(v=l.value,x!==!0||v===null){const f=g+b*4,A=p.matrixWorldInverse;o.getNormalMatrix(A),(v===null||v.length<f)&&(v=new Float32Array(f));for(let R=0,w=g;R!==b;++R,w+=4)s.copy(d[R]).applyMatrix4(A,o),s.normal.toArray(v,w),v[w+3]=s.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,v}}function J1(i){let e=new WeakMap;function t(s,o){return o===Qo?s.mapping=Pr:o===e0&&(s.mapping=Ir),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Qo||o===e0)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Kf(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const wr=4,_c=[.125,.215,.35,.446,.526,.582],Zi=20,yo=new op,yc=new ht;let bo=null,Mo=0,So=0,wo=!1;const $i=(1+Math.sqrt(5))/2,Mr=1/$i,bc=[new V(-$i,Mr,0),new V($i,Mr,0),new V(-Mr,0,$i),new V(Mr,0,$i),new V(0,$i,-Mr),new V(0,$i,Mr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Q1=new V;class Mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=Q1}=a;bo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bo,Mo,So),this._renderer.xr.enabled=wo,e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:pa,format:Ln,colorSpace:Lr,depthBuffer:!1},r=Sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e2(a)),this._blurMaterial=t2(a,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,r,a){const l=new vn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,g=d.toneMapping;d.getClearColor(yc),d.toneMapping=Ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const b=new vs({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new An(new va,b);let f=!1;const A=e.background;A?A.isColor&&(b.color.copy(A),e.background=null,f=!0):(b.color.copy(yc),f=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(l.up.set(0,c[R],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[R],a.y,a.z)):w===1?(l.up.set(0,0,c[R]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[R],a.z)):(l.up.set(0,c[R],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[R]));const P=this._cubeSize;Xa(r,w*P,R>2?P:0,P,P),d.setRenderTarget(r),f&&d.render(v,l),d.render(e,l)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=g,d.autoClear=p,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Pr||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new An(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Xa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=bc[(r-a-1)%bc.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new An(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*Zi-1),b=a/x,v=isFinite(a)?1+Math.floor(u*b):Zi;v>Zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Zi}`);const f=[];let A=0;for(let N=0;N<Zi;++N){const D=N/b,y=Math.exp(-D*D/2);f.push(y),N===0?A+=y:N<v&&(A+=2*y)}for(let N=0;N<f.length;N++)f[N]=f[N]/A;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=f,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:R}=this;p.dTheta.value=x,p.mipInt.value=R-n;const w=this._sizeLods[r],P=3*w*(r>R-wr?r-R+wr:0),L=4*(this._cubeSize-w);Xa(t,P,L,3*w,2*w),l.setRenderTarget(t),l.render(d,yo)}}function e2(i){const e=[],t=[],n=[];let r=i;const a=i-wr+1+_c.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>i-wr?l=_c[s-i+wr-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,x=6,b=3,v=2,f=1,A=new Float32Array(b*x*g),R=new Float32Array(v*x*g),w=new Float32Array(f*x*g);for(let L=0;L<g;L++){const N=L%3*2/3-1,D=L>2?0:-1,y=[N,D,0,N+2/3,D,0,N+2/3,D+1,0,N,D,0,N+2/3,D+1,0,N,D+1,0];A.set(y,b*x*L),R.set(p,v*x*L);const M=[L,L,L,L,L,L];w.set(M,f*x*L)}const P=new hn;P.setAttribute("position",new an(A,b)),P.setAttribute("uv",new an(R,v)),P.setAttribute("faceIndex",new an(w,f)),e.push(P),r>wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sc(i,e,t){const n=new nr(i,e,t);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function t2(i,e,t){const n=new Float32Array(Zi),r=new V(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function wc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ec(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n2(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qo||l===e0,u=l===Pr||l===Ir;if(c||u){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Mc(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return c&&g&&g.height>0||u&&g&&r(g)?(t===null&&(t=new Mc(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function i2(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ha("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function r2(i,e,t,n){const r={},a=new WeakMap;function s(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",s),delete r[p.id];const g=a.get(p);g&&(e.remove(g),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER)}function c(d){const p=[],g=d.index,x=d.attributes.position;let b=0;if(g!==null){const A=g.array;b=g.version;for(let R=0,w=A.length;R<w;R+=3){const P=A[R+0],L=A[R+1],N=A[R+2];p.push(P,L,L,N,N,P)}}else if(x!==void 0){const A=x.array;b=x.version;for(let R=0,w=A.length/3-1;R<w;R+=3){const P=R+0,L=R+1,N=R+2;p.push(P,L,L,N,N,P)}}else return;const v=new(Ju(p)?rh:ih)(p,1);v.version=b;const f=a.get(d);f&&e.remove(f),a.set(d,v)}function u(d){const p=a.get(d);if(p){const g=d.index;g!==null&&p.version<g.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function a2(i,e,t){let n;function r(p){n=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function l(p,g){i.drawElements(n,g,a,p*s),t.update(g,n,1)}function c(p,g,x){x!==0&&(i.drawElementsInstanced(n,g,a,p*s,x),t.update(g,n,x))}function u(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,a,p,0,x);let v=0;for(let f=0;f<x;f++)v+=g[f];t.update(v,n,1)}function d(p,g,x,b){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<p.length;f++)c(p[f]/s,g[f],b[f]);else{v.multiDrawElementsInstancedWEBGL(n,g,0,a,p,0,b,0,x);let f=0;for(let A=0;A<x;A++)f+=g[A]*b[A];t.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function s2(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function o2(i,e,t){const n=new WeakMap,r=new _t;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var g=M;p!==void 0&&p.texture.dispose();const x=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let w=0;x===!0&&(w=1),b===!0&&(w=2),v===!0&&(w=3);let P=o.attributes.position.count*w,L=1;P>e.maxTextureSize&&(L=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const N=new Float32Array(P*L*4*d),D=new Qu(N,P,L,d);D.type=ai,D.needsUpdate=!0;const y=w*4;for(let C=0;C<d;C++){const z=f[C],H=A[C],$=R[C],G=P*L*4*C;for(let K=0;K<z.count;K++){const Q=K*y;x===!0&&(r.fromBufferAttribute(z,K),N[G+Q+0]=r.x,N[G+Q+1]=r.y,N[G+Q+2]=r.z,N[G+Q+3]=0),b===!0&&(r.fromBufferAttribute(H,K),N[G+Q+4]=r.x,N[G+Q+5]=r.y,N[G+Q+6]=r.z,N[G+Q+7]=0),v===!0&&(r.fromBufferAttribute($,K),N[G+Q+8]=r.x,N[G+Q+9]=r.y,N[G+Q+10]=r.z,N[G+Q+11]=$.itemSize===4?r.w:1)}}p={count:d,texture:D,size:new et(P,L)},n.set(o,p),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let x=0;for(let v=0;v<c.length;v++)x+=c[v];const b=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",b),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:a}}function l2(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const mh=new rn,Tc=new hh(1,1),gh=new Qu,vh=new If,xh=new oh,Ac=[],Rc=[],Cc=new Float32Array(16),Dc=new Float32Array(9),Pc=new Float32Array(4);function Gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Ac[r];if(a===void 0&&(a=new Float32Array(r),Ac[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rs(i,e){let t=Rc[e];t===void 0&&(t=new Int32Array(e),Rc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function c2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function u2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function h2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function d2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function f2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Pc.set(n),i.uniformMatrix2fv(this.addr,!1,Pc),Vt(t,n)}}function p2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Dc.set(n),i.uniformMatrix3fv(this.addr,!1,Dc),Vt(t,n)}}function m2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),Vt(t,n)}}function g2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function v2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function x2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function _2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function y2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function b2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function M2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function S2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function w2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Tc.compareFunction=ju,a=Tc):a=mh,t.setTexture2D(e||a,r)}function E2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vh,r)}function T2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||xh,r)}function A2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||gh,r)}function R2(i){switch(i){case 5126:return c2;case 35664:return u2;case 35665:return h2;case 35666:return d2;case 35674:return f2;case 35675:return p2;case 35676:return m2;case 5124:case 35670:return g2;case 35667:case 35671:return v2;case 35668:case 35672:return x2;case 35669:case 35673:return _2;case 5125:return y2;case 36294:return b2;case 36295:return M2;case 36296:return S2;case 35678:case 36198:case 36298:case 36306:case 35682:return w2;case 35679:case 36299:case 36307:return E2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return A2}}function C2(i,e){i.uniform1fv(this.addr,e)}function D2(i,e){const t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function P2(i,e){const t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function I2(i,e){const t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function L2(i,e){const t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function U2(i,e){const t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function N2(i,e){const t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F2(i,e){i.uniform1iv(this.addr,e)}function z2(i,e){i.uniform2iv(this.addr,e)}function B2(i,e){i.uniform3iv(this.addr,e)}function O2(i,e){i.uniform4iv(this.addr,e)}function k2(i,e){i.uniform1uiv(this.addr,e)}function H2(i,e){i.uniform2uiv(this.addr,e)}function G2(i,e){i.uniform3uiv(this.addr,e)}function V2(i,e){i.uniform4uiv(this.addr,e)}function W2(i,e,t){const n=this.cache,r=e.length,a=Rs(t,r);Gt(n,a)||(i.uniform1iv(this.addr,a),Vt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||mh,a[s])}function q2(i,e,t){const n=this.cache,r=e.length,a=Rs(t,r);Gt(n,a)||(i.uniform1iv(this.addr,a),Vt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||vh,a[s])}function X2(i,e,t){const n=this.cache,r=e.length,a=Rs(t,r);Gt(n,a)||(i.uniform1iv(this.addr,a),Vt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||xh,a[s])}function Y2(i,e,t){const n=this.cache,r=e.length,a=Rs(t,r);Gt(n,a)||(i.uniform1iv(this.addr,a),Vt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||gh,a[s])}function $2(i){switch(i){case 5126:return C2;case 35664:return D2;case 35665:return P2;case 35666:return I2;case 35674:return L2;case 35675:return U2;case 35676:return N2;case 5124:case 35670:return F2;case 35667:case 35671:return z2;case 35668:case 35672:return B2;case 35669:case 35673:return O2;case 5125:return k2;case 36294:return H2;case 36295:return G2;case 36296:return V2;case 35678:case 36198:case 36298:case 36306:case 35682:return W2;case 35679:case 36299:case 36307:return q2;case 35680:case 36300:case 36308:case 36293:return X2;case 36289:case 36303:case 36311:case 36292:return Y2}}class K2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=R2(t.type)}}class Z2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$2(t.type)}}class j2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function Ic(i,e){i.seq.push(e),i.map[e.id]=e}function J2(i,e,t){const n=i.name,r=n.length;for(Eo.lastIndex=0;;){const a=Eo.exec(n),s=Eo.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Ic(t,c===void 0?new K2(o,i,e):new Z2(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new j2(o),Ic(t,d)),t=d}}}class us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);J2(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Q2=37297;let e4=0;function t4(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Uc=new it;function n4(i){ut._getMatrix(Uc,ut.workingColorSpace,i);const e=`mat3( ${Uc.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case ps:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Nc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+t4(i.getShaderSource(e),o)}else return a}function i4(i,e){const t=n4(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r4(i,e){let t;switch(e){case af:t="Linear";break;case sf:t="Reinhard";break;case of:t="Cineon";break;case lf:t="ACESFilmic";break;case uf:t="AgX";break;case hf:t="Neutral";break;case cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ya=new V;function a4(){ut.getLuminanceCoefficients(Ya);const i=Ya.x.toFixed(4),e=Ya.y.toFixed(4),t=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s4(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function o4(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l4(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function ia(i){return i!==""}function Fc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c4=/^[ \t]*#include +<([\w\d./]+)>/gm;function U0(i){return i.replace(c4,h4)}const u4=new Map;function h4(i,e){let t=at[e];if(t===void 0){const n=u4.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return U0(t)}const d4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(i){return i.replace(d4,f4)}function f4(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Oc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p4(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function m4(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pr:case Ir:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g4(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ir&&(e="ENVMAP_MODE_REFRACTION"),e}function v4(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hu:e="ENVMAP_BLENDING_MULTIPLY";break;case nf:e="ENVMAP_BLENDING_MIX";break;case rf:e="ENVMAP_BLENDING_ADD";break}return e}function x4(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _4(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=p4(t),c=m4(t),u=g4(t),d=v4(t),p=x4(t),g=s4(t),x=o4(a),b=r.createProgram();let v,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ia).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ia).join(`
`),f.length>0&&(f+=`
`)):(v=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),f=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?at.tonemapping_pars_fragment:"",t.toneMapping!==Ai?r4("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,i4("linearToOutputTexel",t.outputColorSpace),a4(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),s=U0(s),s=Fc(s,t),s=zc(s,t),o=U0(o),o=Fc(o,t),o=zc(o,t),s=Bc(s),o=Bc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=A+v+s,w=A+f+o,P=Lc(r,r.VERTEX_SHADER,R),L=Lc(r,r.FRAGMENT_SHADER,w);r.attachShader(b,P),r.attachShader(b,L),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function N(C){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(b)||"",H=r.getShaderInfoLog(P)||"",$=r.getShaderInfoLog(L)||"",G=z.trim(),K=H.trim(),Q=$.trim();let X=!0,le=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,P,L);else{const me=Nc(r,P,"vertex"),_e=Nc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+me+`
`+_e)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(K===""||Q==="")&&(le=!1);le&&(C.diagnostics={runnable:X,programLog:G,vertexShader:{log:K,prefix:v},fragmentShader:{log:Q,prefix:f}})}r.deleteShader(P),r.deleteShader(L),D=new us(r,b),y=l4(r,b)}let D;this.getUniforms=function(){return D===void 0&&N(this),D};let y;this.getAttributes=function(){return y===void 0&&N(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(b,Q2)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e4++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=L,this}let y4=0;class b4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new M4(e),t.set(e,n)),n}}class M4{constructor(e){this.id=y4++,this.code=e,this.usedTimes=0}}function S4(i,e,t,n,r,a,s){const o=new th,l=new b4,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return c.add(y),y===0?"uv":`uv${y}`}function v(y,M,C,z,H){const $=z.fog,G=H.geometry,K=y.isMeshStandardMaterial?z.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),X=Q&&Q.mapping===Es?Q.image.height:null,le=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const me=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_e=me!==void 0?me.length:0;let Ge=0;G.morphAttributes.position!==void 0&&(Ge=1),G.morphAttributes.normal!==void 0&&(Ge=2),G.morphAttributes.color!==void 0&&(Ge=3);let Ve,Ke,tt,te;if(le){const pt=Fn[le];Ve=pt.vertexShader,Ke=pt.fragmentShader}else Ve=y.vertexShader,Ke=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),te=l.getFragmentShaderID(y);const ie=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Oe=H.isInstancedMesh===!0,Ue=H.isBatchedMesh===!0,st=!!y.map,kt=!!y.matcap,B=!!Q,mt=!!y.aoMap,Je=!!y.lightMap,We=!!y.bumpMap,De=!!y.normalMap,yt=!!y.displacementMap,Ce=!!y.emissiveMap,Ze=!!y.metalnessMap,Nt=!!y.roughnessMap,Rt=y.anisotropy>0,I=y.clearcoat>0,S=y.dispersion>0,Y=y.iridescence>0,ne=y.sheen>0,se=y.transmission>0,ee=Rt&&!!y.anisotropyMap,Pe=I&&!!y.clearcoatMap,ve=I&&!!y.clearcoatNormalMap,Ne=I&&!!y.clearcoatRoughnessMap,Fe=Y&&!!y.iridescenceMap,fe=Y&&!!y.iridescenceThicknessMap,we=ne&&!!y.sheenColorMap,Xe=ne&&!!y.sheenRoughnessMap,ze=!!y.specularMap,be=!!y.specularColorMap,nt=!!y.specularIntensityMap,k=se&&!!y.transmissionMap,pe=se&&!!y.thicknessMap,xe=!!y.gradientMap,Re=!!y.alphaMap,he=y.alphaTest>0,re=!!y.alphaHash,Le=!!y.extensions;let Qe=Ai;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const St={shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:Ve,fragmentShader:Ke,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ue,batchingColor:Ue&&H._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&H.instanceColor!==null,instancingMorph:Oe&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Lr,alphaToCoverage:!!y.alphaToCoverage,map:st,matcap:kt,envMap:B,envMapMode:B&&Q.mapping,envMapCubeUVHeight:X,aoMap:mt,lightMap:Je,bumpMap:We,normalMap:De,displacementMap:p&&yt,emissiveMap:Ce,normalMapObjectSpace:De&&y.normalMapType===gf,normalMapTangentSpace:De&&y.normalMapType===mf,metalnessMap:Ze,roughnessMap:Nt,anisotropy:Rt,anisotropyMap:ee,clearcoat:I,clearcoatMap:Pe,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ne,dispersion:S,iridescence:Y,iridescenceMap:Fe,iridescenceThicknessMap:fe,sheen:ne,sheenColorMap:we,sheenRoughnessMap:Xe,specularMap:ze,specularColorMap:be,specularIntensityMap:nt,transmission:se,transmissionMap:k,thicknessMap:pe,gradientMap:xe,opaque:y.transparent===!1&&y.blending===Tr&&y.alphaToCoverage===!1,alphaMap:Re,alphaTest:he,alphaHash:re,combine:y.combine,mapUv:st&&b(y.map.channel),aoMapUv:mt&&b(y.aoMap.channel),lightMapUv:Je&&b(y.lightMap.channel),bumpMapUv:We&&b(y.bumpMap.channel),normalMapUv:De&&b(y.normalMap.channel),displacementMapUv:yt&&b(y.displacementMap.channel),emissiveMapUv:Ce&&b(y.emissiveMap.channel),metalnessMapUv:Ze&&b(y.metalnessMap.channel),roughnessMapUv:Nt&&b(y.roughnessMap.channel),anisotropyMapUv:ee&&b(y.anisotropyMap.channel),clearcoatMapUv:Pe&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:ve&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&b(y.sheenRoughnessMap.channel),specularMapUv:ze&&b(y.specularMap.channel),specularColorMapUv:be&&b(y.specularColorMap.channel),specularIntensityMapUv:nt&&b(y.specularIntensityMap.channel),transmissionMapUv:k&&b(y.transmissionMap.channel),thicknessMapUv:pe&&b(y.thicknessMap.channel),alphaMapUv:Re&&b(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(De||Rt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(st||Re),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:H.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:st&&y.map.isVideoTexture===!0&&ut.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:Ce&&y.emissiveMap.isVideoTexture===!0&&ut.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Bn,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(A(M,y),R(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function A(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function R(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function w(y){const M=x[y.type];let C;if(M){const z=Fn[M];C=qf.clone(z.uniforms)}else C=y.uniforms;return C}function P(y,M){let C;for(let z=0,H=u.length;z<H;z++){const $=u[z];if($.cacheKey===M){C=$,++C.usedTimes;break}}return C===void 0&&(C=new _4(i,M,y,a),u.push(C)),C}function L(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function N(y){l.remove(y)}function D(){l.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:w,acquireProgram:P,releaseProgram:L,releaseShaderCache:N,programs:u,dispose:D}}function w4(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function E4(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(d,p,g,x,b,v){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:g,groupOrder:x,renderOrder:d.renderOrder,z:b,group:v},i[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=g,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=b,f.group=v),e++,f}function o(d,p,g,x,b,v){const f=s(d,p,g,x,b,v);g.transmission>0?n.push(f):g.transparent===!0?r.push(f):t.push(f)}function l(d,p,g,x,b,v){const f=s(d,p,g,x,b,v);g.transmission>0?n.unshift(f):g.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||E4),n.length>1&&n.sort(p||kc),r.length>1&&r.sort(p||kc)}function u(){for(let d=e,p=i.length;d<p;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function T4(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new Hc,i.set(n,[s])):r>=a.length?(s=new Hc,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function A4(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ht};break;case"SpotLight":t={position:new V,direction:new V,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function R4(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let C4=0;function D4(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function P4(i){const e=new A4,t=R4(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const r=new V,a=new Et,s=new Et;function o(c){let u=0,d=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let g=0,x=0,b=0,v=0,f=0,A=0,R=0,w=0,P=0,L=0,N=0;c.sort(D4);for(let y=0,M=c.length;y<M;y++){const C=c[y],z=C.color,H=C.intensity,$=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*H,d+=z.g*H,p+=z.b*H;else if(C.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(C.sh.coefficients[K],H);N++}else if(C.isDirectionalLight){const K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,X=t.get(C);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=C.shadow.matrix,A++}n.directional[g]=K,g++}else if(C.isSpotLight){const K=e.get(C);K.position.setFromMatrixPosition(C.matrixWorld),K.color.copy(z).multiplyScalar(H),K.distance=$,K.coneCos=Math.cos(C.angle),K.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),K.decay=C.decay,n.spot[b]=K;const Q=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,Q.updateMatrices(C),C.castShadow&&L++),n.spotLightMatrix[b]=Q.matrix,C.castShadow){const X=t.get(C);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.spotShadow[b]=X,n.spotShadowMap[b]=G,w++}b++}else if(C.isRectAreaLight){const K=e.get(C);K.color.copy(z).multiplyScalar(H),K.halfWidth.set(C.width*.5,0,0),K.halfHeight.set(0,C.height*.5,0),n.rectArea[v]=K,v++}else if(C.isPointLight){const K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),K.distance=C.distance,K.decay=C.decay,C.castShadow){const Q=C.shadow,X=t.get(C);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,n.pointShadow[x]=X,n.pointShadowMap[x]=G,n.pointShadowMatrix[x]=C.shadow.matrix,R++}n.point[x]=K,x++}else if(C.isHemisphereLight){const K=e.get(C);K.skyColor.copy(C.color).multiplyScalar(H),K.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[f]=K,f++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;const D=n.hash;(D.directionalLength!==g||D.pointLength!==x||D.spotLength!==b||D.rectAreaLength!==v||D.hemiLength!==f||D.numDirectionalShadows!==A||D.numPointShadows!==R||D.numSpotShadows!==w||D.numSpotMaps!==P||D.numLightProbes!==N)&&(n.directional.length=g,n.spot.length=b,n.rectArea.length=v,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=w+P-L,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=N,D.directionalLength=g,D.pointLength=x,D.spotLength=b,D.rectAreaLength=v,D.hemiLength=f,D.numDirectionalShadows=A,D.numPointShadows=R,D.numSpotShadows=w,D.numSpotMaps=P,D.numLightProbes=N,n.version=C4++)}function l(c,u){let d=0,p=0,g=0,x=0,b=0;const v=u.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){const R=c[f];if(R.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),d++}else if(R.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),g++}else if(R.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(v),s.identity(),a.copy(R.matrixWorld),a.premultiply(v),s.extractRotation(a),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),x++}else if(R.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(v),p++}else if(R.isHemisphereLight){const w=n.hemi[b];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(v),b++}}}return{setup:o,setupView:l,state:n}}function Gc(i){const e=new P4(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function s(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function I4(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Gc(i),e.set(r,[o])):a>=s.length?(o=new Gc(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const L4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N4(i,e,t){let n=new ul;const r=new et,a=new et,s=new _t,o=new ip({depthPacking:pf}),l=new rp,c={},u=t.maxTextureSize,d={[Ci]:un,[un]:Ci,[Bn]:Bn},p=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:L4,fragmentShader:U4}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const x=new hn;x.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new An(x,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let f=this.type;this.render=function(L,N,D){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||L.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ti),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=f!==ti&&this.type===ti,$=f===ti&&this.type!==ti;for(let G=0,K=L.length;G<K;G++){const Q=L[G],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const le=X.getFrameExtents();if(r.multiply(le),a.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/le.x),r.x=a.x*le.x,X.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/le.y),r.y=a.y*le.y,X.mapSize.y=a.y)),X.map===null||H===!0||$===!0){const _e=this.type!==ti?{minFilter:Un,magFilter:Un}:{};X.map!==null&&X.map.dispose(),X.map=new nr(r.x,r.y,_e),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const me=X.getViewportCount();for(let _e=0;_e<me;_e++){const Ge=X.getViewport(_e);s.set(a.x*Ge.x,a.y*Ge.y,a.x*Ge.z,a.y*Ge.w),z.viewport(s),X.updateMatrices(Q,_e),n=X.getFrustum(),w(N,D,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===ti&&A(X,D),X.needsUpdate=!1}f=this.type,v.needsUpdate=!1,i.setRenderTarget(y,M,C)};function A(L,N){const D=e.update(b);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new nr(r.x,r.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(N,null,D,p,b,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(N,null,D,g,b,null)}function R(L,N,D,y){let M=null;const C=D.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(C!==void 0)M=C;else if(M=D.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const z=M.uuid,H=N.uuid;let $=c[z];$===void 0&&($={},c[z]=$);let G=$[H];G===void 0&&(G=M.clone(),$[H]=G,N.addEventListener("dispose",P)),M=G}if(M.visible=N.visible,M.wireframe=N.wireframe,y===ti?M.side=N.shadowSide!==null?N.shadowSide:N.side:M.side=N.shadowSide!==null?N.shadowSide:d[N.side],M.alphaMap=N.alphaMap,M.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,M.map=N.map,M.clipShadows=N.clipShadows,M.clippingPlanes=N.clippingPlanes,M.clipIntersection=N.clipIntersection,M.displacementMap=N.displacementMap,M.displacementScale=N.displacementScale,M.displacementBias=N.displacementBias,M.wireframeLinewidth=N.wireframeLinewidth,M.linewidth=N.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=D}return M}function w(L,N,D,y,M){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===ti)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,L.matrixWorld);const H=e.update(L),$=L.material;if(Array.isArray($)){const G=H.groups;for(let K=0,Q=G.length;K<Q;K++){const X=G[K],le=$[X.materialIndex];if(le&&le.visible){const me=R(L,le,y,M);L.onBeforeShadow(i,L,N,D,H,me,X),i.renderBufferDirect(D,null,H,me,L,X),L.onAfterShadow(i,L,N,D,H,me,X)}}}else if($.visible){const G=R(L,$,y,M);L.onBeforeShadow(i,L,N,D,H,G,null),i.renderBufferDirect(D,null,H,G,L,null),L.onAfterShadow(i,L,N,D,H,G,null)}}const z=L.children;for(let H=0,$=z.length;H<$;H++)w(z[H],N,D,y,M)}function P(L){L.target.removeEventListener("dispose",P);for(const D in c){const y=c[D],M=L.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const F4={[Xo]:Yo,[$o]:jo,[Ko]:Jo,[Dr]:Zo,[Yo]:Xo,[jo]:$o,[Jo]:Ko,[Zo]:Dr};function z4(i,e){function t(){let k=!1;const pe=new _t;let xe=null;const Re=new _t(0,0,0,0);return{setMask:function(he){xe!==he&&!k&&(i.colorMask(he,he,he,he),xe=he)},setLocked:function(he){k=he},setClear:function(he,re,Le,Qe,St){St===!0&&(he*=Qe,re*=Qe,Le*=Qe),pe.set(he,re,Le,Qe),Re.equals(pe)===!1&&(i.clearColor(he,re,Le,Qe),Re.copy(pe))},reset:function(){k=!1,xe=null,Re.set(-1,0,0,0)}}}function n(){let k=!1,pe=!1,xe=null,Re=null,he=null;return{setReversed:function(re){if(pe!==re){const Le=e.get("EXT_clip_control");re?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),pe=re;const Qe=he;he=null,this.setClear(Qe)}},getReversed:function(){return pe},setTest:function(re){re?ie(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(re){xe!==re&&!k&&(i.depthMask(re),xe=re)},setFunc:function(re){if(pe&&(re=F4[re]),Re!==re){switch(re){case Xo:i.depthFunc(i.NEVER);break;case Yo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case Jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=re}},setLocked:function(re){k=re},setClear:function(re){he!==re&&(pe&&(re=1-re),i.clearDepth(re),he=re)},reset:function(){k=!1,xe=null,Re=null,he=null,pe=!1}}}function r(){let k=!1,pe=null,xe=null,Re=null,he=null,re=null,Le=null,Qe=null,St=null;return{setTest:function(pt){k||(pt?ie(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(pt){pe!==pt&&!k&&(i.stencilMask(pt),pe=pt)},setFunc:function(pt,Yn,Nn){(xe!==pt||Re!==Yn||he!==Nn)&&(i.stencilFunc(pt,Yn,Nn),xe=pt,Re=Yn,he=Nn)},setOp:function(pt,Yn,Nn){(re!==pt||Le!==Yn||Qe!==Nn)&&(i.stencilOp(pt,Yn,Nn),re=pt,Le=Yn,Qe=Nn)},setLocked:function(pt){k=pt},setClear:function(pt){St!==pt&&(i.clearStencil(pt),St=pt)},reset:function(){k=!1,pe=null,xe=null,Re=null,he=null,re=null,Le=null,Qe=null,St=null}}}const a=new t,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,g=[],x=null,b=!1,v=null,f=null,A=null,R=null,w=null,P=null,L=null,N=new ht(0,0,0),D=0,y=!1,M=null,C=null,z=null,H=null,$=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=Q>=2);let le=null,me={};const _e=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),Ve=new _t().fromArray(_e),Ke=new _t().fromArray(Ge);function tt(k,pe,xe,Re){const he=new Uint8Array(4),re=i.createTexture();i.bindTexture(k,re),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<xe;Le++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(pe+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return re}const te={};te[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),s.setFunc(Dr),We(!1),De(Gl),ie(i.CULL_FACE),mt(Ti);function ie(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Te(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Oe(k,pe){return d[k]!==pe?(i.bindFramebuffer(k,pe),d[k]=pe,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ue(k,pe){let xe=g,Re=!1;if(k){xe=p.get(pe),xe===void 0&&(xe=[],p.set(pe,xe));const he=k.textures;if(xe.length!==he.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Le=he.length;re<Le;re++)xe[re]=i.COLOR_ATTACHMENT0+re;xe.length=he.length,Re=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Re=!0);Re&&i.drawBuffers(xe)}function st(k){return x!==k?(i.useProgram(k),x=k,!0):!1}const kt={[Ki]:i.FUNC_ADD,[Od]:i.FUNC_SUBTRACT,[kd]:i.FUNC_REVERSE_SUBTRACT};kt[Hd]=i.MIN,kt[Gd]=i.MAX;const B={[Vd]:i.ZERO,[Wd]:i.ONE,[qd]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[jd]:i.SRC_ALPHA_SATURATE,[Kd]:i.DST_COLOR,[Yd]:i.DST_ALPHA,[Xd]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[Zd]:i.ONE_MINUS_DST_COLOR,[$d]:i.ONE_MINUS_DST_ALPHA,[Jd]:i.CONSTANT_COLOR,[Qd]:i.ONE_MINUS_CONSTANT_COLOR,[ef]:i.CONSTANT_ALPHA,[tf]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(k,pe,xe,Re,he,re,Le,Qe,St,pt){if(k===Ti){b===!0&&(Te(i.BLEND),b=!1);return}if(b===!1&&(ie(i.BLEND),b=!0),k!==Bd){if(k!==v||pt!==y){if((f!==Ki||w!==Ki)&&(i.blendEquation(i.FUNC_ADD),f=Ki,w=Ki),pt)switch(k){case Tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cr:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}A=null,R=null,P=null,L=null,N.set(0,0,0),D=0,v=k,y=pt}return}he=he||pe,re=re||xe,Le=Le||Re,(pe!==f||he!==w)&&(i.blendEquationSeparate(kt[pe],kt[he]),f=pe,w=he),(xe!==A||Re!==R||re!==P||Le!==L)&&(i.blendFuncSeparate(B[xe],B[Re],B[re],B[Le]),A=xe,R=Re,P=re,L=Le),(Qe.equals(N)===!1||St!==D)&&(i.blendColor(Qe.r,Qe.g,Qe.b,St),N.copy(Qe),D=St),v=k,y=!1}function Je(k,pe){k.side===Bn?Te(i.CULL_FACE):ie(i.CULL_FACE);let xe=k.side===un;pe&&(xe=!xe),We(xe),k.blending===Tr&&k.transparent===!1?mt(Ti):mt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),a.setMask(k.colorWrite);const Re=k.stencilWrite;o.setTest(Re),Re&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function De(k){k!==Nd?(ie(i.CULL_FACE),k!==C&&(k===Gl?i.cullFace(i.BACK):k===Fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),C=k}function yt(k){k!==z&&(K&&i.lineWidth(k),z=k)}function Ce(k,pe,xe){k?(ie(i.POLYGON_OFFSET_FILL),(H!==pe||$!==xe)&&(i.polygonOffset(pe,xe),H=pe,$=xe)):Te(i.POLYGON_OFFSET_FILL)}function Ze(k){k?ie(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function Nt(k){k===void 0&&(k=i.TEXTURE0+G-1),le!==k&&(i.activeTexture(k),le=k)}function Rt(k,pe,xe){xe===void 0&&(le===null?xe=i.TEXTURE0+G-1:xe=le);let Re=me[xe];Re===void 0&&(Re={type:void 0,texture:void 0},me[xe]=Re),(Re.type!==k||Re.texture!==pe)&&(le!==xe&&(i.activeTexture(xe),le=xe),i.bindTexture(k,pe||te[k]),Re.type=k,Re.texture=pe)}function I(){const k=me[le];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(k){Ve.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ve.copy(k))}function Xe(k){Ke.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ke.copy(k))}function ze(k,pe){let xe=c.get(pe);xe===void 0&&(xe=new WeakMap,c.set(pe,xe));let Re=xe.get(k);Re===void 0&&(Re=i.getUniformBlockIndex(pe,k.name),xe.set(k,Re))}function be(k,pe){const Re=c.get(pe).get(k);l.get(pe)!==Re&&(i.uniformBlockBinding(pe,Re,k.__bindingPointIndex),l.set(pe,Re))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,me={},d={},p=new WeakMap,g=[],x=null,b=!1,v=null,f=null,A=null,R=null,w=null,P=null,L=null,N=new ht(0,0,0),D=0,y=!1,M=null,C=null,z=null,H=null,$=null,Ve.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ie,disable:Te,bindFramebuffer:Oe,drawBuffers:Ue,useProgram:st,setBlending:mt,setMaterial:Je,setFlipSided:We,setCullFace:De,setLineWidth:yt,setPolygonOffset:Ce,setScissorTest:Ze,activeTexture:Nt,bindTexture:Rt,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:Y,texImage2D:Fe,texImage3D:fe,updateUBOMapping:ze,uniformBlockBinding:be,texStorage2D:ve,texStorage3D:Ne,texSubImage2D:ne,texSubImage3D:se,compressedTexSubImage2D:ee,compressedTexSubImage3D:Pe,scissor:we,viewport:Xe,reset:nt}}function B4(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,S){return g?new OffscreenCanvas(I,S):gs("canvas")}function b(I,S,Y){let ne=1;const se=Rt(I);if((se.width>Y||se.height>Y)&&(ne=Y/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ee=Math.floor(ne*se.width),Pe=Math.floor(ne*se.height);d===void 0&&(d=x(ee,Pe));const ve=S?x(ee,Pe):d;return ve.width=ee,ve.height=Pe,ve.getContext("2d").drawImage(I,0,0,ee,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ee+"x"+Pe+")."),ve}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),I;return I}function v(I){return I.generateMipmaps}function f(I){i.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(I,S,Y,ne,se=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ee=S;if(S===i.RED&&(Y===i.FLOAT&&(ee=i.R32F),Y===i.HALF_FLOAT&&(ee=i.R16F),Y===i.UNSIGNED_BYTE&&(ee=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.R8UI),Y===i.UNSIGNED_SHORT&&(ee=i.R16UI),Y===i.UNSIGNED_INT&&(ee=i.R32UI),Y===i.BYTE&&(ee=i.R8I),Y===i.SHORT&&(ee=i.R16I),Y===i.INT&&(ee=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(ee=i.RG32F),Y===i.HALF_FLOAT&&(ee=i.RG16F),Y===i.UNSIGNED_BYTE&&(ee=i.RG8)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RG16UI),Y===i.UNSIGNED_INT&&(ee=i.RG32UI),Y===i.BYTE&&(ee=i.RG8I),Y===i.SHORT&&(ee=i.RG16I),Y===i.INT&&(ee=i.RG32I)),S===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),Y===i.UNSIGNED_INT&&(ee=i.RGB32UI),Y===i.BYTE&&(ee=i.RGB8I),Y===i.SHORT&&(ee=i.RGB16I),Y===i.INT&&(ee=i.RGB32I)),S===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ee=i.RGBA32UI),Y===i.BYTE&&(ee=i.RGBA8I),Y===i.SHORT&&(ee=i.RGBA16I),Y===i.INT&&(ee=i.RGBA32I)),S===i.RGB&&(Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),S===i.RGBA){const Pe=se?ps:ut.getTransfer(ne);Y===i.FLOAT&&(ee=i.RGBA32F),Y===i.HALF_FLOAT&&(ee=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ee=Pe===vt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(I,S){let Y;return I?S===null||S===tr||S===la?Y=i.DEPTH24_STENCIL8:S===ai?Y=i.DEPTH32F_STENCIL8:S===oa&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===tr||S===la?Y=i.DEPTH_COMPONENT24:S===ai?Y=i.DEPTH_COMPONENT32F:S===oa&&(Y=i.DEPTH_COMPONENT16),Y}function P(I,S){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==Un&&I.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function L(I){const S=I.target;S.removeEventListener("dispose",L),D(S),S.isVideoTexture&&u.delete(S)}function N(I){const S=I.target;S.removeEventListener("dispose",N),M(S)}function D(I){const S=n.get(I);if(S.__webglInit===void 0)return;const Y=I.source,ne=p.get(Y);if(ne){const se=ne[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&y(I),Object.keys(ne).length===0&&p.delete(Y)}n.remove(I)}function y(I){const S=n.get(I);i.deleteTexture(S.__webglTexture);const Y=I.source,ne=p.get(Y);delete ne[S.__cacheKey],s.memory.textures--}function M(I){const S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let se=0;se<S.__webglFramebuffer[ne].length;se++)i.deleteFramebuffer(S.__webglFramebuffer[ne][se]);else i.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[ne]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=I.textures;for(let ne=0,se=Y.length;ne<se;ne++){const ee=n.get(Y[ne]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),s.memory.textures--),n.remove(Y[ne])}n.remove(I)}let C=0;function z(){C=0}function H(){const I=C;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),C+=1,I}function $(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function G(I,S){const Y=n.get(I);if(I.isVideoTexture&&Ze(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){const ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Y,I,S);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function K(I,S){const Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){te(Y,I,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function Q(I,S){const Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){te(Y,I,S);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function X(I,S){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){ie(Y,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}const le={[t0]:i.REPEAT,[Ji]:i.CLAMP_TO_EDGE,[n0]:i.MIRRORED_REPEAT},me={[Un]:i.NEAREST,[df]:i.NEAREST_MIPMAP_NEAREST,[Ma]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[qs]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},_e={[vf]:i.NEVER,[Sf]:i.ALWAYS,[xf]:i.LESS,[ju]:i.LEQUAL,[_f]:i.EQUAL,[Mf]:i.GEQUAL,[yf]:i.GREATER,[bf]:i.NOTEQUAL};function Ge(I,S){if(S.type===ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===qs||S.magFilter===Ma||S.magFilter===Qi||S.minFilter===Tn||S.minFilter===qs||S.minFilter===Ma||S.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,le[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,me[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,me[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Un||S.minFilter!==Ma&&S.minFilter!==Qi||S.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ve(I,S){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",L));const ne=S.source;let se=p.get(ne);se===void 0&&(se={},p.set(ne,se));const ee=$(S);if(ee!==I.__cacheKey){se[ee]===void 0&&(se[ee]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),se[ee].usedTimes++;const Pe=se[I.__cacheKey];Pe!==void 0&&(se[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&y(S)),I.__cacheKey=ee,I.__webglTexture=se[ee].texture}return Y}function Ke(I,S,Y){return Math.floor(Math.floor(I/Y)/S)}function tt(I,S,Y,ne){const ee=I.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Y,ne,S.data);else{ee.sort((fe,we)=>fe.start-we.start);let Pe=0;for(let fe=1;fe<ee.length;fe++){const we=ee[Pe],Xe=ee[fe],ze=we.start+we.count,be=Ke(Xe.start,S.width,4),nt=Ke(we.start,S.width,4);Xe.start<=ze+1&&be===nt&&Ke(Xe.start+Xe.count-1,S.width,4)===be?we.count=Math.max(we.count,Xe.start+Xe.count-we.start):(++Pe,ee[Pe]=Xe)}ee.length=Pe+1;const ve=i.getParameter(i.UNPACK_ROW_LENGTH),Ne=i.getParameter(i.UNPACK_SKIP_PIXELS),Fe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let fe=0,we=ee.length;fe<we;fe++){const Xe=ee[fe],ze=Math.floor(Xe.start/4),be=Math.ceil(Xe.count/4),nt=ze%S.width,k=Math.floor(ze/S.width),pe=be,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,nt,k,pe,xe,Y,ne,S.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ve),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,Fe)}}function te(I,S,Y){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);const se=Ve(I,S),ee=S.source;t.bindTexture(ne,I.__webglTexture,i.TEXTURE0+Y);const Pe=n.get(ee);if(ee.version!==Pe.__version||se===!0){t.activeTexture(i.TEXTURE0+Y);const ve=ut.getPrimaries(ut.workingColorSpace),Ne=S.colorSpace===wi?null:ut.getPrimaries(S.colorSpace),Fe=S.colorSpace===wi||ve===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let fe=b(S.image,!1,r.maxTextureSize);fe=Nt(S,fe);const we=a.convert(S.format,S.colorSpace),Xe=a.convert(S.type);let ze=R(S.internalFormat,we,Xe,S.colorSpace,S.isVideoTexture);Ge(ne,S);let be;const nt=S.mipmaps,k=S.isVideoTexture!==!0,pe=Pe.__version===void 0||se===!0,xe=ee.dataReady,Re=P(S,fe);if(S.isDepthTexture)ze=w(S.format===ua,S.type),pe&&(k?t.texStorage2D(i.TEXTURE_2D,1,ze,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,ze,fe.width,fe.height,0,we,Xe,null));else if(S.isDataTexture)if(nt.length>0){k&&pe&&t.texStorage2D(i.TEXTURE_2D,Re,ze,nt[0].width,nt[0].height);for(let he=0,re=nt.length;he<re;he++)be=nt[he],k?xe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,be.width,be.height,we,Xe,be.data):t.texImage2D(i.TEXTURE_2D,he,ze,be.width,be.height,0,we,Xe,be.data);S.generateMipmaps=!1}else k?(pe&&t.texStorage2D(i.TEXTURE_2D,Re,ze,fe.width,fe.height),xe&&tt(S,fe,we,Xe)):t.texImage2D(i.TEXTURE_2D,0,ze,fe.width,fe.height,0,we,Xe,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){k&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ze,nt[0].width,nt[0].height,fe.depth);for(let he=0,re=nt.length;he<re;he++)if(be=nt[he],S.format!==Ln)if(we!==null)if(k){if(xe)if(S.layerUpdates.size>0){const Le=xc(be.width,be.height,S.format,S.type);for(const Qe of S.layerUpdates){const St=be.data.subarray(Qe*Le/be.data.BYTES_PER_ELEMENT,(Qe+1)*Le/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Qe,be.width,be.height,1,we,St)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,be.width,be.height,fe.depth,we,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,ze,be.width,be.height,fe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,be.width,be.height,fe.depth,we,Xe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,ze,be.width,be.height,fe.depth,0,we,Xe,be.data)}else{k&&pe&&t.texStorage2D(i.TEXTURE_2D,Re,ze,nt[0].width,nt[0].height);for(let he=0,re=nt.length;he<re;he++)be=nt[he],S.format!==Ln?we!==null?k?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(i.TEXTURE_2D,he,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?xe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,be.width,be.height,we,Xe,be.data):t.texImage2D(i.TEXTURE_2D,he,ze,be.width,be.height,0,we,Xe,be.data)}else if(S.isDataArrayTexture)if(k){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ze,fe.width,fe.height,fe.depth),xe)if(S.layerUpdates.size>0){const he=xc(fe.width,fe.height,S.format,S.type);for(const re of S.layerUpdates){const Le=fe.data.subarray(re*he/fe.data.BYTES_PER_ELEMENT,(re+1)*he/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,fe.width,fe.height,1,we,Xe,Le)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,we,Xe,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,fe.width,fe.height,fe.depth,0,we,Xe,fe.data);else if(S.isData3DTexture)k?(pe&&t.texStorage3D(i.TEXTURE_3D,Re,ze,fe.width,fe.height,fe.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,we,Xe,fe.data)):t.texImage3D(i.TEXTURE_3D,0,ze,fe.width,fe.height,fe.depth,0,we,Xe,fe.data);else if(S.isFramebufferTexture){if(pe)if(k)t.texStorage2D(i.TEXTURE_2D,Re,ze,fe.width,fe.height);else{let he=fe.width,re=fe.height;for(let Le=0;Le<Re;Le++)t.texImage2D(i.TEXTURE_2D,Le,ze,he,re,0,we,Xe,null),he>>=1,re>>=1}}else if(nt.length>0){if(k&&pe){const he=Rt(nt[0]);t.texStorage2D(i.TEXTURE_2D,Re,ze,he.width,he.height)}for(let he=0,re=nt.length;he<re;he++)be=nt[he],k?xe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,we,Xe,be):t.texImage2D(i.TEXTURE_2D,he,ze,we,Xe,be);S.generateMipmaps=!1}else if(k){if(pe){const he=Rt(fe);t.texStorage2D(i.TEXTURE_2D,Re,ze,he.width,he.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Xe,fe)}else t.texImage2D(i.TEXTURE_2D,0,ze,we,Xe,fe);v(S)&&f(ne),Pe.__version=ee.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ie(I,S,Y){if(S.image.length!==6)return;const ne=Ve(I,S),se=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);const ee=n.get(se);if(se.version!==ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+Y);const Pe=ut.getPrimaries(ut.workingColorSpace),ve=S.colorSpace===wi?null:ut.getPrimaries(S.colorSpace),Ne=S.colorSpace===wi||Pe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Fe=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,we=[];for(let re=0;re<6;re++)!Fe&&!fe?we[re]=b(S.image[re],!0,r.maxCubemapSize):we[re]=fe?S.image[re].image:S.image[re],we[re]=Nt(S,we[re]);const Xe=we[0],ze=a.convert(S.format,S.colorSpace),be=a.convert(S.type),nt=R(S.internalFormat,ze,be,S.colorSpace),k=S.isVideoTexture!==!0,pe=ee.__version===void 0||ne===!0,xe=se.dataReady;let Re=P(S,Xe);Ge(i.TEXTURE_CUBE_MAP,S);let he;if(Fe){k&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,nt,Xe.width,Xe.height);for(let re=0;re<6;re++){he=we[re].mipmaps;for(let Le=0;Le<he.length;Le++){const Qe=he[Le];S.format!==Ln?ze!==null?k?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,0,0,Qe.width,Qe.height,ze,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,nt,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,0,0,Qe.width,Qe.height,ze,be,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,nt,Qe.width,Qe.height,0,ze,be,Qe.data)}}}else{if(he=S.mipmaps,k&&pe){he.length>0&&Re++;const re=Rt(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,nt,re.width,re.height)}for(let re=0;re<6;re++)if(fe){k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,we[re].width,we[re].height,ze,be,we[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,nt,we[re].width,we[re].height,0,ze,be,we[re].data);for(let Le=0;Le<he.length;Le++){const St=he[Le].image[re].image;k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,0,0,St.width,St.height,ze,be,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,nt,St.width,St.height,0,ze,be,St.data)}}else{k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ze,be,we[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,nt,ze,be,we[re]);for(let Le=0;Le<he.length;Le++){const Qe=he[Le];k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,0,0,ze,be,Qe.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,nt,ze,be,Qe.image[re])}}}v(S)&&f(i.TEXTURE_CUBE_MAP),ee.__version=se.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Te(I,S,Y,ne,se,ee){const Pe=a.convert(Y.format,Y.colorSpace),ve=a.convert(Y.type),Ne=R(Y.internalFormat,Pe,ve,Y.colorSpace),Fe=n.get(S),fe=n.get(Y);if(fe.__renderTarget=S,!Fe.__hasExternalTextures){const we=Math.max(1,S.width>>ee),Xe=Math.max(1,S.height>>ee);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ee,Ne,we,Xe,S.depth,0,Pe,ve,null):t.texImage2D(se,ee,Ne,we,Xe,0,Pe,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ce(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,se,fe.__webglTexture,0,yt(S)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,se,fe.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(I,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){const ne=S.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,ee=w(S.stencilBuffer,se),Pe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=yt(S);Ce(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ee,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ee,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ee,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,I)}else{const ne=S.textures;for(let se=0;se<ne.length;se++){const ee=ne[se],Pe=a.convert(ee.format,ee.colorSpace),ve=a.convert(ee.type),Ne=R(ee.internalFormat,Pe,ve,ee.colorSpace),Fe=yt(S);Y&&Ce(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ne,S.width,S.height):Ce(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,Ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(S.depthTexture);ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const se=ne.__webglTexture,ee=yt(S);if(S.depthTexture.format===ca)Ce(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(S.depthTexture.format===ua)Ce(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function st(I){const S=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const ne=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=ne}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const ne=I.texture.mipmaps;ne&&ne.length>0?Ue(S.__webglFramebuffer[0],I):Ue(S.__webglFramebuffer,I)}else if(Y){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=i.createRenderbuffer(),Oe(S.__webglDepthbuffer[ne],I,!1);else{const se=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ee)}}else{const ne=I.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Oe(S.__webglDepthbuffer,I,!1);else{const se=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(I,S,Y){const ne=n.get(I);S!==void 0&&Te(ne.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&st(I)}function B(I){const S=I.texture,Y=n.get(I),ne=n.get(S);I.addEventListener("dispose",N);const se=I.textures,ee=I.isWebGLCubeRenderTarget===!0,Pe=se.length>1;if(Pe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,s.memory.textures++),ee){Y.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[ve]=[];for(let Ne=0;Ne<S.mipmaps.length;Ne++)Y.__webglFramebuffer[ve][Ne]=i.createFramebuffer()}else Y.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)Y.__webglFramebuffer[ve]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ve=0,Ne=se.length;ve<Ne;ve++){const Fe=n.get(se[ve]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),s.memory.textures++)}if(I.samples>0&&Ce(I)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ve=0;ve<se.length;ve++){const Ne=se[ve];Y.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ve]);const Fe=a.convert(Ne.format,Ne.colorSpace),fe=a.convert(Ne.type),we=R(Ne.internalFormat,Fe,fe,Ne.colorSpace,I.isXRRenderTarget===!0),Xe=yt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,we,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)Te(Y.__webglFramebuffer[ve][Ne],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ne);else Te(Y.__webglFramebuffer[ve],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);v(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ve=0,Ne=se.length;ve<Ne;ve++){const Fe=se[ve],fe=n.get(Fe);let we=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,fe.__webglTexture),Ge(we,Fe),Te(Y.__webglFramebuffer,I,Fe,i.COLOR_ATTACHMENT0+ve,we,0),v(Fe)&&f(we)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ve=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ne.__webglTexture),Ge(ve,S),S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)Te(Y.__webglFramebuffer[Ne],I,S,i.COLOR_ATTACHMENT0,ve,Ne);else Te(Y.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,ve,0);v(S)&&f(ve),t.unbindTexture()}I.depthBuffer&&st(I)}function mt(I){const S=I.textures;for(let Y=0,ne=S.length;Y<ne;Y++){const se=S[Y];if(v(se)){const ee=A(I),Pe=n.get(se).__webglTexture;t.bindTexture(ee,Pe),f(ee),t.unbindTexture()}}}const Je=[],We=[];function De(I){if(I.samples>0){if(Ce(I)===!1){const S=I.textures,Y=I.width,ne=I.height;let se=i.COLOR_BUFFER_BIT;const ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(I),ve=S.length>1;if(ve)for(let Fe=0;Fe<S.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ne=I.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Fe=0;Fe<S.length;Fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const fe=n.get(S[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,Y,ne,0,0,Y,ne,se,i.NEAREST),l===!0&&(Je.length=0,We.length=0,Je.push(i.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Je.push(ee),We.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Fe=0;Fe<S.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const fe=n.get(S[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function yt(I){return Math.min(r.maxSamples,I.samples)}function Ce(I){const S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ze(I){const S=s.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function Nt(I,S){const Y=I.colorSpace,ne=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Lr&&Y!==wi&&(ut.getTransfer(Y)===vt?(ne!==Ln||se!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function Rt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ce}function O4(i,e){function t(n,r=wi){let a;const s=ut.getTransfer(r);if(n===Vn)return i.UNSIGNED_BYTE;if(n===rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vu)return i.BYTE;if(n===Wu)return i.SHORT;if(n===oa)return i.UNSIGNED_SHORT;if(n===il)return i.INT;if(n===tr)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===pa)return i.HALF_FLOAT;if(n===Yu)return i.ALPHA;if(n===$u)return i.RGB;if(n===Ln)return i.RGBA;if(n===ca)return i.DEPTH_COMPONENT;if(n===ua)return i.DEPTH_STENCIL;if(n===Ku)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===Zu)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===ll)return i.RGBA_INTEGER;if(n===ss||n===os||n===ls||n===cs)if(s===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ss)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ss)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===os)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ls)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===i0||n===r0||n===a0||n===s0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===i0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===r0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===a0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===s0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===o0||n===l0||n===c0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===o0||n===l0)return s===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===c0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===u0||n===h0||n===d0||n===f0||n===p0||n===m0||n===g0||n===v0||n===x0||n===_0||n===y0||n===b0||n===M0||n===S0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===u0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===h0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===d0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===f0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===p0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===m0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===g0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===v0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===x0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===y0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===b0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===M0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===S0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===w0||n===E0||n===T0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===w0)return s===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===E0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===T0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===A0||n===R0||n===C0||n===D0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===A0)return a.COMPRESSED_RED_RGTC1_EXT;if(n===R0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===C0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===D0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===la?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const k4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H4=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new dh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ci({vertexShader:k4,fragmentShader:H4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new As(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V4 extends kr{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,g=null,x=null;const b=typeof XRWebGLBinding<"u",v=new G4,f={},A=t.getContextAttributes();let R=null,w=null;const P=[],L=[],N=new et;let D=null;const y=new vn;y.viewport=new _t;const M=new vn;M.viewport=new _t;const C=[y,M],z=new cp;let H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ie=P[te];return ie===void 0&&(ie=new mo,P[te]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(te){let ie=P[te];return ie===void 0&&(ie=new mo,P[te]=ie),ie.getGripSpace()},this.getHand=function(te){let ie=P[te];return ie===void 0&&(ie=new mo,P[te]=ie),ie.getHandSpace()};function G(te){const ie=L.indexOf(te.inputSource);if(ie===-1)return;const Te=P[ie];Te!==void 0&&(Te.update(te.inputSource,te.frame,c||s),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function K(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Q);for(let te=0;te<P.length;te++){const ie=L[te];ie!==null&&(L[te]=null,P[te].disconnect(ie))}H=null,$=null,v.reset();for(const te in f)delete f[te];e.setRenderTarget(R),g=null,p=null,d=null,r=null,w=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Q),A.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(N),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Oe=null,Ue=null;A.depth&&(Ue=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=A.stencil?ua:ca,Oe=A.stencil?la:tr);const st={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:a};d=this.getBinding(),p=d.createProjectionLayer(st),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new nr(p.textureWidth,p.textureHeight,{format:Ln,type:Vn,depthTexture:new hh(p.textureWidth,p.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Te={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new nr(g.framebufferWidth,g.framebufferHeight,{format:Ln,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(te){for(let ie=0;ie<te.removed.length;ie++){const Te=te.removed[ie],Oe=L.indexOf(Te);Oe>=0&&(L[Oe]=null,P[Oe].disconnect(Te))}for(let ie=0;ie<te.added.length;ie++){const Te=te.added[ie];let Oe=L.indexOf(Te);if(Oe===-1){for(let st=0;st<P.length;st++)if(st>=L.length){L.push(Te),Oe=st;break}else if(L[st]===null){L[st]=Te,Oe=st;break}if(Oe===-1)break}const Ue=P[Oe];Ue&&Ue.connect(Te)}}const X=new V,le=new V;function me(te,ie,Te){X.setFromMatrixPosition(ie.matrixWorld),le.setFromMatrixPosition(Te.matrixWorld);const Oe=X.distanceTo(le),Ue=ie.projectionMatrix.elements,st=Te.projectionMatrix.elements,kt=Ue[14]/(Ue[10]-1),B=Ue[14]/(Ue[10]+1),mt=(Ue[9]+1)/Ue[5],Je=(Ue[9]-1)/Ue[5],We=(Ue[8]-1)/Ue[0],De=(st[8]+1)/st[0],yt=kt*We,Ce=kt*De,Ze=Oe/(-We+De),Nt=Ze*-We;if(ie.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Nt),te.translateZ(Ze),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ue[10]===-1)te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Rt=kt+Ze,I=B+Ze,S=yt-Nt,Y=Ce+(Oe-Nt),ne=mt*B/I*Rt,se=Je*B/I*Rt;te.projectionMatrix.makePerspective(S,Y,ne,se,Rt,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function _e(te,ie){ie===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ie.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ie=te.near,Te=te.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(Te=v.depthFar)),z.near=M.near=y.near=ie,z.far=M.far=y.far=Te,(H!==z.near||$!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,$=z.far),z.layers.mask=te.layers.mask|6,y.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const Oe=te.parent,Ue=z.cameras;_e(z,Oe);for(let st=0;st<Ue.length;st++)_e(Ue[st],Oe);Ue.length===2?me(z,y,M):z.projectionMatrix.copy(y.projectionMatrix),Ge(te,z,Oe)};function Ge(te,ie,Te){Te===null?te.matrix.copy(ie.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(ie.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=I0*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(te){l=te,p!==null&&(p.fixedFoveation=te),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(z)},this.getCameraTexture=function(te){return f[te]};let Ve=null;function Ke(te,ie){if(u=ie.getViewerPose(c||s),x=ie,u!==null){const Te=u.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let Oe=!1;Te.length!==z.cameras.length&&(z.cameras.length=0,Oe=!0);for(let B=0;B<Te.length;B++){const mt=Te[B];let Je=null;if(g!==null)Je=g.getViewport(mt);else{const De=d.getViewSubImage(p,mt);Je=De.viewport,B===0&&(e.setRenderTargetTextures(w,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(w))}let We=C[B];We===void 0&&(We=new vn,We.layers.enable(B),We.viewport=new _t,C[B]=We),We.matrix.fromArray(mt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(mt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Je.x,Je.y,Je.width,Je.height),B===0&&(z.matrix.copy(We.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Oe===!0&&z.cameras.push(We)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=n.getBinding();const B=d.getDepthInformation(Te[0]);B&&B.isValid&&B.texture&&v.init(B,r.renderState)}if(Ue&&Ue.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let B=0;B<Te.length;B++){const mt=Te[B].camera;if(mt){let Je=f[mt];Je||(Je=new dh,f[mt]=Je);const We=d.getCameraImage(mt);Je.sourceTexture=We}}}}for(let Te=0;Te<P.length;Te++){const Oe=L[Te],Ue=P[Te];Oe!==null&&Ue!==void 0&&Ue.update(Oe,ie,c||s)}Ve&&Ve(te,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),x=null}const tt=new ph;tt.setAnimationLoop(Ke),this.setAnimationLoop=function(te){Ve=te},this.dispose=function(){}}}const Vi=new li,W4=new Et;function q4(i,e){function t(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function n(v,f){f.color.getRGB(v.fogColor.value,ah(i)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,A,R,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(v,f):f.isMeshToonMaterial?(a(v,f),d(v,f)):f.isMeshPhongMaterial?(a(v,f),u(v,f)):f.isMeshStandardMaterial?(a(v,f),p(v,f),f.isMeshPhysicalMaterial&&g(v,f,w)):f.isMeshMatcapMaterial?(a(v,f),x(v,f)):f.isMeshDepthMaterial?a(v,f):f.isMeshDistanceMaterial?(a(v,f),b(v,f)):f.isMeshNormalMaterial?a(v,f):f.isLineBasicMaterial?(s(v,f),f.isLineDashedMaterial&&o(v,f)):f.isPointsMaterial?l(v,f,A,R):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,t(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,t(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,t(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===un&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,t(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===un&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,t(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,t(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const A=e.get(f),R=A.envMap,w=A.envMapRotation;R&&(v.envMap.value=R,Vi.copy(w),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),v.envMapRotation.value.setFromMatrix4(W4.makeRotationFromEuler(Vi)),v.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap&&(v.lightMap.value=f.lightMap,v.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,v.lightMapTransform)),f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,v.aoMapTransform))}function s(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,t(f.map,v.mapTransform))}function o(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,A,R){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*A,v.scale.value=R*.5,f.map&&(v.map.value=f.map,t(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,t(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,t(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,t(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function u(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function d(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function p(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,v.roughnessMapTransform)),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function g(v,f,A){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&v.clearcoatNormalScale.value.negate())),f.dispersion>0&&(v.dispersion.value=f.dispersion),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=A.texture,v.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,f){f.matcap&&(v.matcap.value=f.matcap)}function b(v,f){const A=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(A.matrixWorld),v.nearDistance.value=A.shadow.camera.near,v.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function X4(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,R){const w=R.program;n.uniformBlockBinding(A,w)}function c(A,R){let w=r[A.id];w===void 0&&(x(A),w=u(A),r[A.id]=w,A.addEventListener("dispose",v));const P=R.program;n.updateUBOMapping(A,P);const L=e.render.frame;a[A.id]!==L&&(p(A),a[A.id]=L)}function u(A){const R=d();A.__bindingPointIndex=R;const w=i.createBuffer(),P=A.__size,L=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,w),w}function d(){for(let A=0;A<o;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const R=r[A.id],w=A.uniforms,P=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let L=0,N=w.length;L<N;L++){const D=Array.isArray(w[L])?w[L]:[w[L]];for(let y=0,M=D.length;y<M;y++){const C=D[y];if(g(C,L,y,P)===!0){const z=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let $=0;for(let G=0;G<H.length;G++){const K=H[G],Q=b(K);typeof K=="number"||typeof K=="boolean"?(C.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,z+$,C.__data)):K.isMatrix3?(C.__data[0]=K.elements[0],C.__data[1]=K.elements[1],C.__data[2]=K.elements[2],C.__data[3]=0,C.__data[4]=K.elements[3],C.__data[5]=K.elements[4],C.__data[6]=K.elements[5],C.__data[7]=0,C.__data[8]=K.elements[6],C.__data[9]=K.elements[7],C.__data[10]=K.elements[8],C.__data[11]=0):(K.toArray(C.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(A,R,w,P){const L=A.value,N=R+"_"+w;if(P[N]===void 0)return typeof L=="number"||typeof L=="boolean"?P[N]=L:P[N]=L.clone(),!0;{const D=P[N];if(typeof L=="number"||typeof L=="boolean"){if(D!==L)return P[N]=L,!0}else if(D.equals(L)===!1)return D.copy(L),!0}return!1}function x(A){const R=A.uniforms;let w=0;const P=16;for(let N=0,D=R.length;N<D;N++){const y=Array.isArray(R[N])?R[N]:[R[N]];for(let M=0,C=y.length;M<C;M++){const z=y[M],H=Array.isArray(z.value)?z.value:[z.value];for(let $=0,G=H.length;$<G;$++){const K=H[$],Q=b(K),X=w%P,le=X%Q.boundary,me=X+le;w+=le,me!==0&&P-me<Q.storage&&(w+=P-me),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=Q.storage}}}const L=w%P;return L>0&&(w+=P-L),A.__size=w,A.__cache={},this}function b(A){const R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=48,R.storage=48):A.isMatrix4?(R.boundary=64,R.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),R}function v(A){const R=A.target;R.removeEventListener("dispose",v);const w=s.indexOf(R.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function f(){for(const A in r)i.deleteBuffer(r[A]);s=[],r={},a={}}return{bind:l,update:c,dispose:f}}class Y4{constructor(e={}){const{canvas:t=Ef(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=s;const x=new Uint32Array(4),b=new Int32Array(4);let v=null,f=null;const A=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let P=!1;this._outputColorSpace=gn;let L=0,N=0,D=null,y=-1,M=null;const C=new _t,z=new _t;let H=null;const $=new ht(0);let G=0,K=t.width,Q=t.height,X=1,le=null,me=null;const _e=new _t(0,0,K,Q),Ge=new _t(0,0,K,Q);let Ve=!1;const Ke=new ul;let tt=!1,te=!1;const ie=new Et,Te=new V,Oe=new _t,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function kt(){return D===null?X:1}let B=n;function mt(T,W){return t.getContext(T,W)}try{const T={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",he,!1),B===null){const W="webgl2";if(B=mt(W,T),B===null)throw mt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Je,We,De,yt,Ce,Ze,Nt,Rt,I,S,Y,ne,se,ee,Pe,ve,Ne,Fe,fe,we,Xe,ze,be,nt;function k(){Je=new i2(B),Je.init(),ze=new O4(B,Je),We=new Z1(B,Je,e,ze),De=new z4(B,Je),We.reversedDepthBuffer&&p&&De.buffers.depth.setReversed(!0),yt=new s2(B),Ce=new w4,Ze=new B4(B,Je,De,Ce,We,ze,yt),Nt=new J1(w),Rt=new n2(w),I=new dp(B),be=new $1(B,I),S=new r2(B,I,yt,be),Y=new l2(B,S,I,yt),fe=new o2(B,We,Ze),ve=new j1(Ce),ne=new S4(w,Nt,Rt,Je,We,be,ve),se=new q4(w,Ce),ee=new T4,Pe=new I4(Je),Fe=new Y1(w,Nt,Rt,De,Y,g,l),Ne=new N4(w,Y,We),nt=new X4(B,yt,We,De),we=new K1(B,Je,yt),Xe=new a2(B,Je,yt),yt.programs=ne.programs,w.capabilities=We,w.extensions=Je,w.properties=Ce,w.renderLists=ee,w.shadowMap=Ne,w.state=De,w.info=yt}k();const pe=new V4(w,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Je.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Je.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(K,Q,!1))},this.getSize=function(T){return T.set(K,Q)},this.setSize=function(T,W,Z=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,Q=W,t.width=Math.floor(T*X),t.height=Math.floor(W*X),Z===!0&&(t.style.width=T+"px",t.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(K*X,Q*X).floor()},this.setDrawingBufferSize=function(T,W,Z){K=T,Q=W,X=Z,t.width=Math.floor(T*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,W,Z,j){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,W,Z,j),De.viewport(C.copy(_e).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(Ge)},this.setScissor=function(T,W,Z,j){T.isVector4?Ge.set(T.x,T.y,T.z,T.w):Ge.set(T,W,Z,j),De.scissor(z.copy(Ge).multiplyScalar(X).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(T){De.setScissorTest(Ve=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,Z=!0){let j=0;if(T){let q=!1;if(D!==null){const de=D.texture.format;q=de===ll||de===ol||de===sl}if(q){const de=D.texture.type,Me=de===Vn||de===tr||de===oa||de===la||de===rl||de===al,Ie=Fe.getClearColor(),Ae=Fe.getClearAlpha(),qe=Ie.r,$e=Ie.g,Be=Ie.b;Me?(x[0]=qe,x[1]=$e,x[2]=Be,x[3]=Ae,B.clearBufferuiv(B.COLOR,0,x)):(b[0]=qe,b[1]=$e,b[2]=Be,b[3]=Ae,B.clearBufferiv(B.COLOR,0,b))}else j|=B.COLOR_BUFFER_BIT}W&&(j|=B.DEPTH_BUFFER_BIT),Z&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Fe.dispose(),ee.dispose(),Pe.dispose(),Ce.dispose(),Nt.dispose(),Rt.dispose(),Y.dispose(),be.dispose(),nt.dispose(),ne.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Nn),pe.removeEventListener("sessionend",Fl),Fi.stop()};function xe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=yt.autoReset,W=Ne.enabled,Z=Ne.autoUpdate,j=Ne.needsUpdate,q=Ne.type;k(),yt.autoReset=T,Ne.enabled=W,Ne.autoUpdate=Z,Ne.needsUpdate=j,Ne.type=q}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){const W=T.target;W.removeEventListener("dispose",re),Le(W)}function Le(T){Qe(T),Ce.remove(T)}function Qe(T){const W=Ce.get(T).programs;W!==void 0&&(W.forEach(function(Z){ne.releaseProgram(Z)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,Z,j,q,de){W===null&&(W=Ue);const Me=q.isMesh&&q.matrixWorld.determinant()<0,Ie=Cd(T,W,Z,j,q);De.setMaterial(j,Me);let Ae=Z.index,qe=1;if(j.wireframe===!0){if(Ae=S.getWireframeAttribute(Z),Ae===void 0)return;qe=2}const $e=Z.drawRange,Be=Z.attributes.position;let ot=$e.start*qe,gt=($e.start+$e.count)*qe;de!==null&&(ot=Math.max(ot,de.start*qe),gt=Math.min(gt,(de.start+de.count)*qe)),Ae!==null?(ot=Math.max(ot,0),gt=Math.min(gt,Ae.count)):Be!=null&&(ot=Math.max(ot,0),gt=Math.min(gt,Be.count));const Lt=gt-ot;if(Lt<0||Lt===1/0)return;be.setup(q,j,Ie,Z,Ae);let wt,bt=we;if(Ae!==null&&(wt=I.get(Ae),bt=Xe,bt.setIndex(wt)),q.isMesh)j.wireframe===!0?(De.setLineWidth(j.wireframeLinewidth*kt()),bt.setMode(B.LINES)):bt.setMode(B.TRIANGLES);else if(q.isLine){let He=j.linewidth;He===void 0&&(He=1),De.setLineWidth(He*kt()),q.isLineSegments?bt.setMode(B.LINES):q.isLineLoop?bt.setMode(B.LINE_LOOP):bt.setMode(B.LINE_STRIP)}else q.isPoints?bt.setMode(B.POINTS):q.isSprite&&bt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ha("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const He=q._multiDrawStarts,Ct=q._multiDrawCounts,ct=q._multiDrawCount,dn=Ae?I.get(Ae).bytesPerElement:1,rr=Ce.get(j).currentProgram.getUniforms();for(let fn=0;fn<ct;fn++)rr.setValue(B,"_gl_DrawID",fn),bt.render(He[fn]/dn,Ct[fn])}else if(q.isInstancedMesh)bt.renderInstances(ot,Lt,q.count);else if(Z.isInstancedBufferGeometry){const He=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ct=Math.min(Z.instanceCount,He);bt.renderInstances(ot,Lt,Ct)}else bt.render(ot,Lt)};function St(T,W,Z){T.transparent===!0&&T.side===Bn&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,ba(T,W,Z),T.side=Ci,T.needsUpdate=!0,ba(T,W,Z),T.side=Bn):ba(T,W,Z)}this.compile=function(T,W,Z=null){Z===null&&(Z=T),f=Pe.get(Z),f.init(W),R.push(f),Z.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),T!==Z&&T.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights();const j=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const de=q.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Ie=de[Me];St(Ie,Z,q),j.add(Ie)}else St(de,Z,q),j.add(de)}),f=R.pop(),j},this.compileAsync=function(T,W,Z=null){const j=this.compile(T,W,Z);return new Promise(q=>{function de(){if(j.forEach(function(Me){Ce.get(Me).currentProgram.isReady()&&j.delete(Me)}),j.size===0){q(T);return}setTimeout(de,10)}Je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let pt=null;function Yn(T){pt&&pt(T)}function Nn(){Fi.stop()}function Fl(){Fi.start()}const Fi=new ph;Fi.setAnimationLoop(Yn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(T){pt=T,pe.setAnimationLoop(T),T===null?Fi.stop():Fi.start()},pe.addEventListener("sessionstart",Nn),pe.addEventListener("sessionend",Fl),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(W),W=pe.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,W,D),f=Pe.get(T,R.length),f.init(W),R.push(f),ie.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ke.setFromProjectionMatrix(ie,Hn,W.reversedDepth),te=this.localClippingEnabled,tt=ve.init(this.clippingPlanes,te),v=ee.get(T,A.length),v.init(),A.push(v),pe.enabled===!0&&pe.isPresenting===!0){const de=w.xr.getDepthSensingMesh();de!==null&&Vs(de,W,-1/0,w.sortObjects)}Vs(T,W,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(le,me),st=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,st&&Fe.addToRenderList(v,T),this.info.render.frame++,tt===!0&&ve.beginShadows();const Z=f.state.shadowsArray;Ne.render(Z,T,W),tt===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,q=v.transmissive;if(f.setupLights(),W.isArrayCamera){const de=W.cameras;if(q.length>0)for(let Me=0,Ie=de.length;Me<Ie;Me++){const Ae=de[Me];Bl(j,q,T,Ae)}st&&Fe.render(T);for(let Me=0,Ie=de.length;Me<Ie;Me++){const Ae=de[Me];zl(v,T,Ae,Ae.viewport)}}else q.length>0&&Bl(j,q,T,W),st&&Fe.render(T),zl(v,T,W);D!==null&&N===0&&(Ze.updateMultisampleRenderTarget(D),Ze.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(w,T,W),be.resetDefaultState(),y=-1,M=null,R.pop(),R.length>0?(f=R[R.length-1],tt===!0&&ve.setGlobalState(w.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?v=A[A.length-1]:v=null};function Vs(T,W,Z,j){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ke.intersectsSprite(T)){j&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ie);const Me=Y.update(T),Ie=T.material;Ie.visible&&v.push(T,Me,Ie,Z,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ke.intersectsObject(T))){const Me=Y.update(T),Ie=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Oe.copy(Me.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(ie)),Array.isArray(Ie)){const Ae=Me.groups;for(let qe=0,$e=Ae.length;qe<$e;qe++){const Be=Ae[qe],ot=Ie[Be.materialIndex];ot&&ot.visible&&v.push(T,Me,ot,Z,Oe.z,Be)}}else Ie.visible&&v.push(T,Me,Ie,Z,Oe.z,null)}}const de=T.children;for(let Me=0,Ie=de.length;Me<Ie;Me++)Vs(de[Me],W,Z,j)}function zl(T,W,Z,j){const q=T.opaque,de=T.transmissive,Me=T.transparent;f.setupLightsView(Z),tt===!0&&ve.setGlobalState(w.clippingPlanes,Z),j&&De.viewport(C.copy(j)),q.length>0&&ya(q,W,Z),de.length>0&&ya(de,W,Z),Me.length>0&&ya(Me,W,Z),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Bl(T,W,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[j.id]===void 0&&(f.state.transmissionRenderTarget[j.id]=new nr(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?pa:Vn,minFilter:Qi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const de=f.state.transmissionRenderTarget[j.id],Me=j.viewport||C;de.setSize(Me.z*w.transmissionResolutionScale,Me.w*w.transmissionResolutionScale);const Ie=w.getRenderTarget(),Ae=w.getActiveCubeFace(),qe=w.getActiveMipmapLevel();w.setRenderTarget(de),w.getClearColor($),G=w.getClearAlpha(),G<1&&w.setClearColor(16777215,.5),w.clear(),st&&Fe.render(Z);const $e=w.toneMapping;w.toneMapping=Ai;const Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),f.setupLightsView(j),tt===!0&&ve.setGlobalState(w.clippingPlanes,j),ya(T,Z,j),Ze.updateMultisampleRenderTarget(de),Ze.updateRenderTargetMipmap(de),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let gt=0,Lt=W.length;gt<Lt;gt++){const wt=W[gt],bt=wt.object,He=wt.geometry,Ct=wt.material,ct=wt.group;if(Ct.side===Bn&&bt.layers.test(j.layers)){const dn=Ct.side;Ct.side=un,Ct.needsUpdate=!0,Ol(bt,Z,j,He,Ct,ct),Ct.side=dn,Ct.needsUpdate=!0,ot=!0}}ot===!0&&(Ze.updateMultisampleRenderTarget(de),Ze.updateRenderTargetMipmap(de))}w.setRenderTarget(Ie,Ae,qe),w.setClearColor($,G),Be!==void 0&&(j.viewport=Be),w.toneMapping=$e}function ya(T,W,Z){const j=W.isScene===!0?W.overrideMaterial:null;for(let q=0,de=T.length;q<de;q++){const Me=T[q],Ie=Me.object,Ae=Me.geometry,qe=Me.group;let $e=Me.material;$e.allowOverride===!0&&j!==null&&($e=j),Ie.layers.test(Z.layers)&&Ol(Ie,W,Z,Ae,$e,qe)}}function Ol(T,W,Z,j,q,de){T.onBeforeRender(w,W,Z,j,q,de),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(w,W,Z,j,T,de),q.transparent===!0&&q.side===Bn&&q.forceSinglePass===!1?(q.side=un,q.needsUpdate=!0,w.renderBufferDirect(Z,W,j,q,T,de),q.side=Ci,q.needsUpdate=!0,w.renderBufferDirect(Z,W,j,q,T,de),q.side=Bn):w.renderBufferDirect(Z,W,j,q,T,de),T.onAfterRender(w,W,Z,j,q,de)}function ba(T,W,Z){W.isScene!==!0&&(W=Ue);const j=Ce.get(T),q=f.state.lights,de=f.state.shadowsArray,Me=q.state.version,Ie=ne.getParameters(T,q.state,de,W,Z),Ae=ne.getProgramCacheKey(Ie);let qe=j.programs;j.environment=T.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(T.isMeshStandardMaterial?Rt:Nt).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",re),qe=new Map,j.programs=qe);let $e=qe.get(Ae);if($e!==void 0){if(j.currentProgram===$e&&j.lightsStateVersion===Me)return Hl(T,Ie),$e}else Ie.uniforms=ne.getUniforms(T),T.onBeforeCompile(Ie,w),$e=ne.acquireProgram(Ie,Ae),qe.set(Ae,$e),j.uniforms=Ie.uniforms;const Be=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=ve.uniform),Hl(T,Ie),j.needsLights=Pd(T),j.lightsStateVersion=Me,j.needsLights&&(Be.ambientLightColor.value=q.state.ambient,Be.lightProbe.value=q.state.probe,Be.directionalLights.value=q.state.directional,Be.directionalLightShadows.value=q.state.directionalShadow,Be.spotLights.value=q.state.spot,Be.spotLightShadows.value=q.state.spotShadow,Be.rectAreaLights.value=q.state.rectArea,Be.ltc_1.value=q.state.rectAreaLTC1,Be.ltc_2.value=q.state.rectAreaLTC2,Be.pointLights.value=q.state.point,Be.pointLightShadows.value=q.state.pointShadow,Be.hemisphereLights.value=q.state.hemi,Be.directionalShadowMap.value=q.state.directionalShadowMap,Be.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Be.spotShadowMap.value=q.state.spotShadowMap,Be.spotLightMatrix.value=q.state.spotLightMatrix,Be.spotLightMap.value=q.state.spotLightMap,Be.pointShadowMap.value=q.state.pointShadowMap,Be.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=$e,j.uniformsList=null,$e}function kl(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=us.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Hl(T,W){const Z=Ce.get(T);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Cd(T,W,Z,j,q){W.isScene!==!0&&(W=Ue),Ze.resetTextureUnits();const de=W.fog,Me=j.isMeshStandardMaterial?W.environment:null,Ie=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Lr,Ae=(j.isMeshStandardMaterial?Rt:Nt).get(j.envMap||Me),qe=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Be=!!Z.morphAttributes.position,ot=!!Z.morphAttributes.normal,gt=!!Z.morphAttributes.color;let Lt=Ai;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Lt=w.toneMapping);const wt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,bt=wt!==void 0?wt.length:0,He=Ce.get(j),Ct=f.state.lights;if(tt===!0&&(te===!0||T!==M)){const jt=T===M&&j.id===y;ve.setState(j,T,jt)}let ct=!1;j.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ct.state.version||He.outputColorSpace!==Ie||q.isBatchedMesh&&He.batching===!1||!q.isBatchedMesh&&He.batching===!0||q.isBatchedMesh&&He.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&He.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&He.instancing===!1||!q.isInstancedMesh&&He.instancing===!0||q.isSkinnedMesh&&He.skinning===!1||!q.isSkinnedMesh&&He.skinning===!0||q.isInstancedMesh&&He.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&He.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&He.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&He.instancingMorph===!1&&q.morphTexture!==null||He.envMap!==Ae||j.fog===!0&&He.fog!==de||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ve.numPlanes||He.numIntersection!==ve.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==$e||He.morphTargets!==Be||He.morphNormals!==ot||He.morphColors!==gt||He.toneMapping!==Lt||He.morphTargetsCount!==bt)&&(ct=!0):(ct=!0,He.__version=j.version);let dn=He.currentProgram;ct===!0&&(dn=ba(j,W,q));let rr=!1,fn=!1,Yr=!1;const Dt=dn.getUniforms(),Mn=He.uniforms;if(De.useProgram(dn.program)&&(rr=!0,fn=!0,Yr=!0),j.id!==y&&(y=j.id,fn=!0),rr||M!==T){De.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Dt.setValue(B,"projectionMatrix",T.projectionMatrix),Dt.setValue(B,"viewMatrix",T.matrixWorldInverse);const on=Dt.map.cameraPosition;on!==void 0&&on.setValue(B,Te.setFromMatrixPosition(T.matrixWorld)),We.logarithmicDepthBuffer&&Dt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Dt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,fn=!0,Yr=!0)}if(q.isSkinnedMesh){Dt.setOptional(B,q,"bindMatrix"),Dt.setOptional(B,q,"bindMatrixInverse");const jt=q.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Dt.setValue(B,"boneTexture",jt.boneTexture,Ze))}q.isBatchedMesh&&(Dt.setOptional(B,q,"batchingTexture"),Dt.setValue(B,"batchingTexture",q._matricesTexture,Ze),Dt.setOptional(B,q,"batchingIdTexture"),Dt.setValue(B,"batchingIdTexture",q._indirectTexture,Ze),Dt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Dt.setValue(B,"batchingColorTexture",q._colorsTexture,Ze));const Sn=Z.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&fe.update(q,Z,dn),(fn||He.receiveShadow!==q.receiveShadow)&&(He.receiveShadow=q.receiveShadow,Dt.setValue(B,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Mn.envMap.value=Ae,Mn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(Mn.envMapIntensity.value=W.environmentIntensity),fn&&(Dt.setValue(B,"toneMappingExposure",w.toneMappingExposure),He.needsLights&&Dd(Mn,Yr),de&&j.fog===!0&&se.refreshFogUniforms(Mn,de),se.refreshMaterialUniforms(Mn,j,X,Q,f.state.transmissionRenderTarget[T.id]),us.upload(B,kl(He),Mn,Ze)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(us.upload(B,kl(He),Mn,Ze),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Dt.setValue(B,"center",q.center),Dt.setValue(B,"modelViewMatrix",q.modelViewMatrix),Dt.setValue(B,"normalMatrix",q.normalMatrix),Dt.setValue(B,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const jt=j.uniformsGroups;for(let on=0,Ws=jt.length;on<Ws;on++){const zi=jt[on];nt.update(zi,dn),nt.bind(zi,dn)}}return dn}function Dd(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Pd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,W,Z){const j=Ce.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Ce.get(T.texture).__webglTexture=W,Ce.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Z,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){const Z=Ce.get(T);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const Id=B.createFramebuffer();this.setRenderTarget=function(T,W=0,Z=0){D=T,L=W,N=Z;let j=!0,q=null,de=!1,Me=!1;if(T){const Ae=Ce.get(T);if(Ae.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(B.FRAMEBUFFER,null),j=!1;else if(Ae.__webglFramebuffer===void 0)Ze.setupRenderTarget(T);else if(Ae.__hasExternalTextures)Ze.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(Ae.__boundDepthTexture!==Be){if(Be!==null&&Ce.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(T)}}const qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Me=!0);const $e=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[W])?q=$e[W][Z]:q=$e[W],de=!0):T.samples>0&&Ze.useMultisampledRTT(T)===!1?q=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?q=$e[Z]:q=$e,C.copy(T.viewport),z.copy(T.scissor),H=T.scissorTest}else C.copy(_e).multiplyScalar(X).floor(),z.copy(Ge).multiplyScalar(X).floor(),H=Ve;if(Z!==0&&(q=Id),De.bindFramebuffer(B.FRAMEBUFFER,q)&&j&&De.drawBuffers(T,q),De.viewport(C),De.scissor(z),De.setScissorTest(H),de){const Ae=Ce.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ae.__webglTexture,Z)}else if(Me){const Ae=W;for(let qe=0;qe<T.textures.length;qe++){const $e=Ce.get(T.textures[qe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+qe,$e.__webglTexture,Z,Ae)}}else if(T!==null&&Z!==0){const Ae=Ce.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ae.__webglTexture,Z)}y=-1},this.readRenderTargetPixels=function(T,W,Z,j,q,de,Me,Ie=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){De.bindFramebuffer(B.FRAMEBUFFER,Ae);try{const qe=T.textures[Ie],$e=qe.format,Be=qe.type;if(!We.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-j&&Z>=0&&Z<=T.height-q&&(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ie),B.readPixels(W,Z,j,q,ze.convert($e),ze.convert(Be),de))}finally{const qe=D!==null?Ce.get(D).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(T,W,Z,j,q,de,Me,Ie=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(W>=0&&W<=T.width-j&&Z>=0&&Z<=T.height-q){De.bindFramebuffer(B.FRAMEBUFFER,Ae);const qe=T.textures[Ie],$e=qe.format,Be=qe.type;if(!We.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.bufferData(B.PIXEL_PACK_BUFFER,de.byteLength,B.STREAM_READ),T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ie),B.readPixels(W,Z,j,q,ze.convert($e),ze.convert(Be),0);const gt=D!==null?Ce.get(D).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,gt);const Lt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Tf(B,Lt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,de),B.deleteBuffer(ot),B.deleteSync(Lt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,Z=0){const j=Math.pow(2,-Z),q=Math.floor(T.image.width*j),de=Math.floor(T.image.height*j),Me=W!==null?W.x:0,Ie=W!==null?W.y:0;Ze.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Me,Ie,q,de),De.unbindTexture()};const Ld=B.createFramebuffer(),Ud=B.createFramebuffer();this.copyTextureToTexture=function(T,W,Z=null,j=null,q=0,de=null){de===null&&(q!==0?(ha("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=q,q=0):de=0);let Me,Ie,Ae,qe,$e,Be,ot,gt,Lt;const wt=T.isCompressedTexture?T.mipmaps[de]:T.image;if(Z!==null)Me=Z.max.x-Z.min.x,Ie=Z.max.y-Z.min.y,Ae=Z.isBox3?Z.max.z-Z.min.z:1,qe=Z.min.x,$e=Z.min.y,Be=Z.isBox3?Z.min.z:0;else{const Sn=Math.pow(2,-q);Me=Math.floor(wt.width*Sn),Ie=Math.floor(wt.height*Sn),T.isDataArrayTexture?Ae=wt.depth:T.isData3DTexture?Ae=Math.floor(wt.depth*Sn):Ae=1,qe=0,$e=0,Be=0}j!==null?(ot=j.x,gt=j.y,Lt=j.z):(ot=0,gt=0,Lt=0);const bt=ze.convert(W.format),He=ze.convert(W.type);let Ct;W.isData3DTexture?(Ze.setTexture3D(W,0),Ct=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Ze.setTexture2DArray(W,0),Ct=B.TEXTURE_2D_ARRAY):(Ze.setTexture2D(W,0),Ct=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const ct=B.getParameter(B.UNPACK_ROW_LENGTH),dn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),rr=B.getParameter(B.UNPACK_SKIP_PIXELS),fn=B.getParameter(B.UNPACK_SKIP_ROWS),Yr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,wt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,wt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qe),B.pixelStorei(B.UNPACK_SKIP_ROWS,$e),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Be);const Dt=T.isDataArrayTexture||T.isData3DTexture,Mn=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const Sn=Ce.get(T),jt=Ce.get(W),on=Ce.get(Sn.__renderTarget),Ws=Ce.get(jt.__renderTarget);De.bindFramebuffer(B.READ_FRAMEBUFFER,on.__webglFramebuffer),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let zi=0;zi<Ae;zi++)Dt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.get(T).__webglTexture,q,Be+zi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.get(W).__webglTexture,de,Lt+zi)),B.blitFramebuffer(qe,$e,Me,Ie,ot,gt,Me,Ie,B.DEPTH_BUFFER_BIT,B.NEAREST);De.bindFramebuffer(B.READ_FRAMEBUFFER,null),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||Ce.has(T)){const Sn=Ce.get(T),jt=Ce.get(W);De.bindFramebuffer(B.READ_FRAMEBUFFER,Ld),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ud);for(let on=0;on<Ae;on++)Dt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Sn.__webglTexture,q,Be+on):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Sn.__webglTexture,q),Mn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jt.__webglTexture,de,Lt+on):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,jt.__webglTexture,de),q!==0?B.blitFramebuffer(qe,$e,Me,Ie,ot,gt,Me,Ie,B.COLOR_BUFFER_BIT,B.NEAREST):Mn?B.copyTexSubImage3D(Ct,de,ot,gt,Lt+on,qe,$e,Me,Ie):B.copyTexSubImage2D(Ct,de,ot,gt,qe,$e,Me,Ie);De.bindFramebuffer(B.READ_FRAMEBUFFER,null),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Mn?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ct,de,ot,gt,Lt,Me,Ie,Ae,bt,He,wt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Ct,de,ot,gt,Lt,Me,Ie,Ae,bt,wt.data):B.texSubImage3D(Ct,de,ot,gt,Lt,Me,Ie,Ae,bt,He,wt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,de,ot,gt,Me,Ie,bt,He,wt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,de,ot,gt,wt.width,wt.height,bt,wt.data):B.texSubImage2D(B.TEXTURE_2D,de,ot,gt,Me,Ie,bt,He,wt);B.pixelStorei(B.UNPACK_ROW_LENGTH,ct),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,rr),B.pixelStorei(B.UNPACK_SKIP_ROWS,fn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Yr),de===0&&W.generateMipmaps&&B.generateMipmap(Ct),De.unbindTexture()},this.initRenderTarget=function(T){Ce.get(T).__webglFramebuffer===void 0&&Ze.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ze.setTextureCube(T,0):T.isData3DTexture?Ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ze.setTexture2DArray(T,0):Ze.setTexture2D(T,0),De.unbindTexture()},this.resetState=function(){L=0,N=0,D=null,De.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const J={time:0,clock:0,paused:!1,entered:!1,audio:{low:0,mid:0,high:0,energy:0,beat:0,drop:0,centroid:0,active:!1},pointer:{x:.5,y:.5,active:!1},ditherMix:0,glassMode:!1,spin:0,flash:0,centerBloom:0,haloMul:3.3,coreMul:1,trailA:.3,diskFlick:1,meshRGB:[150,205,225],phase:{i:0,name:"pde",lt:0,dur:1},width:1,height:1,dpr:1},$4=[[9,16,23],[42,85,97],[87,152,166],[155,196,195],[238,240,218]],Vc=[[255,214,224],[201,184,255],[155,231,255],[255,199,138],[224,238,235]];function N0(i,e,t){i=(i%360+360)%360/360;const n=t<.5?t*(1+e):t+e-t*e,r=2*t-n,a=s=>(s<0&&(s+=1),s>1&&(s-=1),s<1/6?r+(n-r)*6*s:s<.5?n:s<2/3?r+(n-r)*(2/3-s)*6:r);return[Math.round(a(i+1/3)*255),Math.round(a(i)*255),Math.round(a(i-1/3)*255)]}function K4(i,e,t,n){if(n){const c=200+26*Math.sin(e*.1)+t.high*30,u=[.38,.56,.72,.86,.97],d=[.3,.3,.24,.16,.08],p=[-16,-8,0,10,20];for(let g=0;g<5;g++)i[g]=N0(c+p[g],d[g],u[g]);return i}const r=245+72*Math.sin(e*.22)+16*Math.sin(e*.075+.7)+t.high*46-t.low*14,a=[.08,.22,.42,.68,.93],s=[.44,.58,.56,.36,.16],o=[-18,-9,0,10,20],l=1+t.energy*.12;for(let c=0;c<5;c++)i[c]=N0(r+o[c],Math.min(.82,s[c]*l),a[c]);return i}let ri=null,kn=null,ni=null,Wi=null,Wc=null;function _h(){const i=window.AudioContext||window.webkitAudioContext;return ri||(ri=new i),ri.state==="suspended"&&ri.resume(),ri}function yh(){return kn=ri.createAnalyser(),kn.fftSize=2048,kn.smoothingTimeConstant=.82,ni=new Uint8Array(kn.frequencyBinCount),kn}async function Z4(){try{if(!navigator.mediaDevices?.getUserMedia)return{ok:!1,reason:"insecure"};_h(),Wc=await navigator.mediaDevices.getUserMedia({audio:!0});const i=ri.createMediaStreamSource(Wc);return yh(),i.connect(kn),J.audio.active=!0,{ok:!0}}catch(i){return J.audio.active=!1,{ok:!1,reason:i&&i.name||"error"}}}function j4(i){try{if(_h(),Wi)try{Wi.pause()}catch{}Wi=new Audio,Wi.src=URL.createObjectURL(i),Wi.loop=!0;const e=ri.createMediaElementSource(Wi);return yh(),e.connect(kn),kn.connect(ri.destination),Wi.play(),J.audio.active=!0,!0}catch{return!1}}function J4(i){const e=J.audio;if(e.active&&kn&&ni){kn.getByteFrequencyData(ni);const t=ni.length,n=t*.08|0,r=t*.4|0;let a=0,s=0,o=0,l=0,c=0;for(let u=0;u<n;u++)a+=ni[u];for(let u=n;u<r;u++)s+=ni[u];for(let u=r;u<t;u++)o+=ni[u];for(let u=0;u<t;u++)l+=ni[u],c+=ni[u]*u;a/=n*255,s/=(r-n)*255,o/=(t-r)*255,e.low+=(a-e.low)*.3,e.mid+=(s-e.mid)*.3,e.high+=(o-e.high)*.35,e.energy+=((a+s+o)/3-e.energy)*.25,e.centroid+=((l>1?c/l/t:.3)-e.centroid)*.2}else e.low=.3+.28*Math.abs(Math.sin(i*1.15)),e.mid=.26+.22*(.5+.5*Math.sin(i*2.3+1)),e.high=.22+.2*(.5+.5*Math.sin(i*3.9+2)),e.energy=Math.min(1,Math.max(0,.2+.16*Math.sin(i*1.6)+.1*Math.sin(i*.7))),e.centroid=.35+.15*Math.sin(i*.4)}let To=0,qc=0,$a=0,Xc=-10;function Q4(i){const e=J.audio;To=To*.92+e.low*.08,e.beat*=.86,e.low>To*1.32+.04&&i-qc>.16&&(qc=i,e.beat=1),e.energy>.62&&e.high>.45?$a+=1/60:$a*=.85,e.drop*=.9,$a>.45&&i-Xc>4&&(Xc=i,e.drop=1,$a=0)}function eg(i=128){const e=document.createElement("canvas");e.width=i,e.height=i;const t=e.getContext("2d"),n=new dl(e);n.minFilter=Tn,n.magFilter=Tn,n.generateMipmaps=!1;const r=[];function a(){const s=J.audio;t.fillStyle="rgba(0,0,0,0.18)",t.fillRect(0,0,i,i),t.globalCompositeOperation="lighter";const o=[{y:.78,h:.22,v:s.low,c:"255,80,40"},{y:.38,h:.4,v:s.mid,c:"80,200,220"},{y:0,h:.38,v:s.high,c:"220,240,255"}];for(const l of o){const c=.12+l.v*.55+s.beat*.2;t.fillStyle=`rgba(${l.c},${c.toFixed(3)})`,t.fillRect(0,l.y*i,i,l.h*i)}if(s.beat>.4){const l=(.12+s.beat*.22)*i,c=t.createRadialGradient(i/2,i/2,0,i/2,i/2,l);c.addColorStop(0,`rgba(255,255,255,${(s.beat*.8).toFixed(3)})`),c.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=c,t.fillRect(0,0,i,i)}J.pointer.active&&(r.push({x:J.pointer.x,y:J.pointer.y,a:1}),r.length>18&&r.shift());for(const l of r){const c=t.createRadialGradient(l.x*i,l.y*i,0,l.x*i,l.y*i,.12*i);c.addColorStop(0,`rgba(255,255,255,${(l.a*.9).toFixed(3)})`),c.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=c,t.beginPath(),t.arc(l.x*i,l.y*i,.12*i,0,Math.PI*2),t.fill(),l.a*=.84}t.globalCompositeOperation="source-over",n.needsUpdate=!0}return{texture:n,paint:a,canvas:e}}const Ao=i=>i<0?0:i>1?1:i;function Ka(i,e){let t=i*374761393+e*668265263|0;return t=(t^t>>13)*1274126177|0,((t^t>>16)>>>0)/4294967295}function tg(i,e){const t=Math.floor(i),n=Math.floor(e),r=i-t,a=e-n,s=r*r*(3-2*r),o=a*a*(3-2*a),l=Ka(t,n),c=Ka(t+1,n),u=Ka(t,n+1),d=Ka(t+1,n+1);return l+(c-l)*s+(u-l)*o+(l-c-u+d)*s*o}function yi(i,e){let t=0,n=.5,r=1;for(let a=0;a<4;a++)t+=n*tg(i*r,e*r),r*=2,n*=.5;return t}function ng(){let i=2,e=2,t=new Float32Array(4);function n(a,s,o=6){return i=Math.max(2,Math.min(240,Math.ceil(a/o))),e=Math.max(2,Math.ceil(i*s/a)),t=new Float32Array(i*e),{W:i,H:e}}function r(a){const s=J.audio,o=3.4,l=s.energy*.1+s.beat*.08,c=J.height/J.width*(i/e),u=(.5+.36*Math.sin(a*.5+s.mid*3)+.1*Math.sin(a*1.3))*i,d=(.5+.32*Math.sin(a*.37+1.3+s.low*3.5)+.08*Math.cos(a*1.1))*e,p=(.005+s.energy*.009)*i*i,g=.34+s.energy*.5+s.beat*.5,x=J.glassMode,b=J.pointer.active?J.pointer.x:-9,v=J.pointer.active?J.pointer.y:-9;for(let f=0;f<e;f++){const A=f/e*o*c;for(let R=0;R<i;R++){const w=R/i*o;let P;if(x){const D=yi(w*.6+a*.05,A*.6+a*.03),y=Math.abs(yi(w*2.6+a*.08,A*2.6)-.5),M=Math.abs(yi(w*5.4-a*.05,A*5.4+3)-.5);P=Ao(.2+D*.58+(1-2.2*(y*.6+M*.4))*.32+l*.4)}else{const D=yi(w*1.2+a*.15,A*1.2),y=yi(w*1.2+5.2,A*1.2-a*.12);P=yi(w+D*1.9+a*.05,A+y*1.9-a*.04),P=.62*P+.38*yi(w*2.3-y*1.2,A*2.3+D*1.2+a*.1),P=Math.pow(Ao((P-.28)*1.3+.36),.9)+(1-f/e)*.1+l}const L=R-u,N=f-d;if(P+=(x?.3:1)*g*Math.exp(-(L*L+N*N)/p),b>-1){const D=R-b*i,y=f-v*e;P+=(.5+s.energy*.4)*Math.exp(-(D*D+y*y)/(.05*i*i))}t[f*i+R]=Ao(P)}}return t}return{resize:n,evaluate:r,get size(){return{W:i,H:e}},get buffer(){return t},fbm:yi}}function ig(i){let e="field";return{get current(){return e},get field(){return i},use(t){e=t},evaluate(t){return i.evaluate(t)},resize(t,n){return i.resize(t,n)}}}function rg(){const i=document.createElement("canvas"),e=i.getContext("2d");let t=null,n=null;const r=$4.map(l=>l.slice());function a(l,c){i.width=l,i.height=c,t=e.createImageData(l,c),n=new Float32Array(l*c)}function s(l){for(let c=0;c<5;c++)r[c]=l[c]}function o(l){const c=i.width,u=i.height,d=r.length;n.set(l);const p=t.data;for(let g=0;g<u;g++)for(let x=0;x<c;x++){const b=g*c+x,v=n[b];let f=Math.round(v*(d-1));f<0?f=0:f>d-1&&(f=d-1);const A=f/(d-1),R=v-A;x+1<c&&(n[b+1]+=R*7/16),g+1<u&&(x>0&&(n[b+c-1]+=R*3/16),n[b+c]+=R*5/16,x+1<c&&(n[b+c+1]+=R*1/16));const w=r[f],P=b*4;p[P]=w[0],p[P+1]=w[1],p[P+2]=w[2],p[P+3]=255}e.putImageData(t,0,0)}return{canvas:i,resize:a,setPalette:s,quantize:o,get palette(){return r}}}function ag(i,e){const t=document.getElementById("dither"),n=t.getContext("2d");function r(){const s=innerWidth,o=innerHeight,l=Math.min(devicePixelRatio||1,2);t.width=s*l,t.height=o*l,t.style.width=s+"px",t.style.height=o+"px",n.setTransform(l,0,0,l,0,0),n.imageSmoothingEnabled=!1,e.style.width=s+"px",e.style.height=o+"px"}function a(){const s=innerWidth,o=innerHeight,l=J.ditherMix;n.globalCompositeOperation="source-over",l>.001?(n.fillStyle="#04070c",n.fillRect(0,0,s,o),n.globalAlpha=l,n.imageSmoothingEnabled=!1,n.drawImage(i,0,0,i.width,i.height,0,0,s,o),n.globalAlpha=1):(n.fillStyle=`rgba(4,7,12,${J.trailA})`,n.fillRect(0,0,s,o))}return{resize:r,present:a,view:t}}const bh=9e3,Yc=3;function sg(i=bh){const e=new Float32Array(i*3),t=new Float32Array(i*3),n=new hn;return n.setAttribute("position",new an(e,3)),n.setAttribute("color",new an(t,3)),{geo:n,pos:e,col:t,count:i}}function og(){const i=document.createElement("canvas");i.width=64,i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new dl(i);return n.needsUpdate=!0,new hl({map:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Cr,size:.07,sizeAttenuation:!0})}const ln=()=>Math.random(),Qn=i=>i<0?0:i>1?1:i,Za=i=>i*i*(3-2*i);function bi(i,e,t,n,r){i.cr+=(e-i.cr)*r,i.cg+=(t-i.cg)*r,i.cb+=(n-i.cb)*r}function ja(i,e){let t=i*374761393+e*668265263|0;return t=(t^t>>13)*1274126177|0,((t^t>>16)>>>0)/4294967295}function lg(i,e){const t=Math.floor(i),n=Math.floor(e),r=i-t,a=e-n,s=r*r*(3-2*r),o=a*a*(3-2*a),l=ja(t,n),c=ja(t+1,n),u=ja(t,n+1),d=ja(t+1,n+1);return l+(c-l)*s+(u-l)*o+(l-c-u+d)*s*o}function hs(i,e){let t=0,n=.5,r=1;for(let a=0;a<4;a++)t+=n*lg(i*r,e*r),r*=2,n*=.5;return t}function $c(i,e,t,n,r,a){const o=1+(.1+a.low*.34+a.beat*.28)*hs(i*3+n*2.6,e*3+t*3+n*2.1);let l=i*o,c=e*o,u=t*o;const d=Math.cos(r),p=Math.sin(r),g=Math.cos(r*.7),x=Math.sin(r*.7);let b=l*d+u*p,v=-l*p+u*d;const f=c*g-v*x;return v=c*x+v*g,{x:b,y:f,z:v}}function cg(i){const{geo:e,pos:t,col:n,count:r}=sg(bh),a=og(),s=new uh(e,a);s.frustumCulled=!1,i.add(s);const o=new Array(r);for(let D=0;D<r;D++){const y=ln(),M=ln(),C=2*Math.PI*y,z=Math.acos(2*M-1);o[D]={x:(ln()-.5)*8,y:(ln()-.5)*5,z:(ln()-.5)*4,tx:0,ty:0,tz:0,vx:0,vy:0,vz:0,sx:Math.sin(z)*Math.cos(C),sy:Math.cos(z),sz:Math.sin(z)*Math.sin(C),dA:ln()*2*Math.PI,dR:Math.sqrt(ln()),arm:Math.floor(ln()*Yc),aT:Math.pow(ln(),.65),ph0:ln()*6.283,sz0:.7+ln()*1.15,pr:Vc[D%Vc.length],orb:D%9<2,a:0,cr:210,cg:236,cb:246,hasT:!1}}let l=!1;function c(D,y,M){const C=D.dA+J.spin*(1.7-D.dR*.6),z=(.3+D.dR*1)*M,H=Math.cos(C)*z,$=Math.sin(C)*z,G=(hs(D.dR*6+y,D.dA)-.5)*.06,K=1.02,Q=G*Math.cos(K)-$*Math.sin(K),X=G*Math.sin(K)+$*Math.cos(K);return{x:H*1.85,y:Q*1.85,z:X*1.85,rr:z}}function u(D,y){const C=D.aT<.14;let z,H,$;if(C){const X=.05+.11*D.dR;z=D.sx*X,H=D.sz*X,$=D.sy*X*.5}else{const X=D.arm*(2*Math.PI/Yc),le=hs(D.aT*3.2+D.arm*7,y*.16+D.arm),me=hs(D.aT*5+D.arm*3+9,y*.13),_e=D.aT*(.8+.42*me),Ge=X+D.aT*4.2+J.spin*.5+(le-.5)*1.25,Ve=.02+.09*(1-D.aT);z=Math.cos(Ge)*_e+D.sx*Ve,H=Math.sin(Ge)*_e+D.sz*Ve,$=D.sy*.09*(1-D.aT)}const G=1.05,K=$*Math.cos(G)-H*Math.sin(G),Q=$*Math.sin(G)+H*Math.cos(G);return{x:z*2.15,y:K*2.15,z:Q*2.15,bulge:C}}function d(D,y,M,C){const z=$c(D.sx,D.sy,D.sz,y,J.spin,J.audio);D.tx=z.x*C,D.ty=M+z.y*C,D.tz=z.z*C,D.x+=(D.tx-D.x)*.12,D.y+=(D.ty-D.y)*.12,D.z+=(D.tz-D.z)*.12;const H=J.meshRGB;return bi(D,H[0],H[1],H[2],.06),.5+.5*z.z}function p(D,y,M){const $=9.399999999999999,G=5;let K=Math.floor(D/$);K>=G&&(K=G-1);const Q=D-K*$;M(K,Q,2.6,4.6,2.2);const X=J.audio,le=.8+.6*X.energy+X.beat*.35,me=1+X.high*.5+X.beat*.4,_e=.55,Ge=1.05;if(Q<2.6){const Ve=Q/2.6,Ke=.1+.13*Ve,tt=Za(Qn(Ve*1.1));for(let te=0;te<r;te++){const ie=o[te];if(ie.orb){const Te=d(ie,y,_e,Ge);ie.a=(.16+.22*Te)*le}else ie.a=tt*.15,ie.x+=(ie.tx-ie.x)*Ke,ie.y+=(ie.ty-ie.y)*Ke}}else if(Q<2.6+4.6)for(let Ve=0;Ve<r;Ve++){const Ke=o[Ve];if(Ke.orb){const tt=d(Ke,y,_e,Ge);Ke.a=(.18+.24*tt)*le}else Ke.x=Ke.tx+Math.sin(y*1.3+Ke.ph0)*.02,Ke.y=Ke.ty+Math.cos(y*1.1+Ke.ph0)*.02,Ke.a=Math.min(1.2,(.86+.14*Math.sin(y*2.4+Ke.ph0))*me)*.18}else{const Ve=(Q-2.6-4.6)/2.2,Ke=1-Za(Ve);for(let tt=0;tt<r;tt++){const te=o[tt];if(te.orb){const ie=d(te,y,_e,Ge);te.a=(.18+.24*ie)*le}else te.a=Ke*.12}}}function g(D,y){const C=Qn(D/2.6),z=J.audio.energy,H=J.meshRGB;for(let $=0;$<r;$++){const G=o[$],K=$c(G.sx,G.sy,G.sz,y,J.spin,J.audio);G.tx=K.x*1.35,G.ty=K.y*1.35,G.tz=K.z*1.35;const Q=.12+.06*C;G.x+=(G.tx-G.x)*Q,G.y+=(G.ty-G.y)*Q,G.z+=(G.tz-G.z)*Q;const X=.5+.5*K.z;G.a=Math.min(1,.16+.72*X)*(.7+.3*z)*Math.min(1,D/1.2),bi(G,H[0],H[1],H[2],.06)}}function x(D){const y=J.audio;for(let M=0;M<r;M++){const C=o[M],z=c(C,D,1);C.tx=z.x,C.ty=z.y,C.tz=z.z,C.x+=(C.tx-C.x)*.09,C.y+=(C.ty-C.y)*.09,C.z+=(C.tz-C.z)*.09;const H=.5+.5*(z.z/1.85),$=1-Qn(C.dR);bi(C,255,150+80*(1-$),70+120*(1-$),.06),C.dR>.7&&bi(C,150,180,255,.04),C.a=Math.min(1,.4+.6*H)*(.85+.3*y.energy)*J.diskFlick*(.62+.38*Math.sin(D*16+C.dA*11+C.ph0))}}function b(D,y,M){const C=Qn(D/M),z=1-.82*Za(C),H=.35;for(let $=0;$<r;$++){const G=o[$],K=c(G,y,z);G.tx=K.x,G.ty=K.y,G.tz=K.z;const Q=.1+.1*C;G.x+=(G.tx-G.x)*Q,G.y+=(G.ty-G.y)*Q,G.z+=(G.tz-G.z)*Q;const X=Math.hypot(G.x,G.y),le=Math.exp(-Math.pow((X-H)/.14,2));X<H?G.a*=.86:G.a=Math.min(1,.35+.65*le),G.a*=J.diskFlick*(.62+.38*Math.sin(y*17+G.dA*11+G.ph0)),bi(G,255,190+60*le,120+80*le,.05)}}function v(D){const y=Qn(D/4.5);for(let M=0;M<r;M++){const C=o[M],z=Math.cos(C.ph0+J.time)*.25*(1-y),H=Math.sin(C.ph0*1.7+J.time)*.25*(1-y);C.tx=z,C.ty=H,C.tz=0;const $=.12+.12*y;C.x+=(C.tx-C.x)*$,C.y+=(C.ty-C.y)*$,C.z+=(C.tz-C.z)*$,C.a=Math.min(1,.6+.4*y),bi(C,255,246,224,.12)}J.centerBloom=.35+.65*y+J.audio.energy*.2,l=!1}function f(D,y){const M=Qn(D/2.6);if(!l){l=!0,J.flash=1;for(let C=0;C<r;C++){const z=o[C],H=Math.random()*6.283,$=4+Math.random()*16;z.vx=Math.cos(H)*$,z.vy=Math.sin(H)*$,z.vz=(Math.random()-.5)*4}}for(let C=0;C<r;C++){const z=o[C];z.x+=z.vx*y,z.y+=z.vy*y,z.z+=z.vz*y,z.vx*=.985,z.vy*=.985,z.vz*=.985,z.a=Math.min(1,1-M*.35),bi(z,255,240-40*M,210-80*M,.08)}J.centerBloom=Math.max(0,.95-M*1.3)}function A(D,y){const M=Qn(D/3),C=J.audio;for(let z=0;z<r;z++){const H=o[z],$=u(H,y);H.tx=$.x,H.ty=$.y,H.tz=$.z;const G=.05+.07*M;H.x+=(H.tx-H.x)*G,H.y+=(H.ty-H.y)*G,H.z+=(H.tz-H.z)*G;const K=$.bulge?1:1-Qn(H.aT*1.3),Q=.5+.5*($.z/2.15),X=H.pr;let le,me,_e;$.bulge?(le=255,me=228,_e=185):(le=(150+70*K)*.75+X[0]*.25,me=(182+30*K)*.75+X[1]*.25,_e=(255-40*K)*.75+X[2]*.25),bi(H,le,me,_e,.06),H.a=Math.min(1,.32+.68*Q)*($.bulge?1:.5+.5*K)*(.85+.3*C.energy)*(.6+.4*Math.abs(Math.sin(y*2.6+H.ph0*4)))}J.centerBloom=C.beat*.4}function R(D,y,M){const C=Qn(D/M);J.ditherMix=Za(C);for(let z=0;z<r;z++){const H=o[z],$=Math.hypot(H.x,H.y)||1;H.x+=H.x/$*.012,H.y+=H.y/$*.008,H.x+=Math.sin(y*.8+H.ph0)*.004,H.a=Math.max(0,H.a*(1-C*.06)-.004)}}function w(D){if(!J.pointer.active)return;const M=2.4*(1+J.audio.energy*1.5)*D*60,C=(J.pointer.x-.5)*7.2,z=(.5-J.pointer.y)*4.2,H=1.15,$=H*H;for(let G=0;G<r;G++){const K=o[G];if(K.a<=.02)continue;const Q=K.x-C,X=K.y-z,le=Q*Q+X*X;if(le<$){const me=Math.sqrt(le)||1,_e=(1-me/H)*M*.035;K.x+=Q/me*_e,K.y+=X/me*_e}}}function P(){const D=1-J.ditherMix;for(let M=0;M<r;M++){const C=o[M],z=Math.max(0,Math.min(1,C.a*D));t[M*3]=C.x,t[M*3+1]=C.y,t[M*3+2]=C.z,n[M*3]=Math.min(1,C.cr/255*z),n[M*3+1]=Math.min(1,C.cg/255*z),n[M*3+2]=Math.min(1,C.cb/255*z)}e.attributes.position.needsUpdate=!0,e.attributes.color.needsUpdate=!0;const y=J.phase.name!=="pde";a.size=(y?.12:.06)*J.coreMul*(1+J.audio.energy*.5)}function L(D,y,M){const C=J.phase;if(C.name==="pde")p(C.lt,y,M);else if(C.name==="orb")g(C.lt,y);else if(C.name==="accretion")x(y);else if(C.name==="blackhole")b(C.lt,y,C.dur);else if(C.name==="star")v(C.lt);else if(C.name==="nova")f(C.lt,D);else if(C.name==="galaxy")A(C.lt,y);else if(C.name==="dissolve")R(C.lt,y,C.dur);else for(let z=0;z<r;z++)o[z].a*=.92;w(D),P()}function N(){l=!1;for(let D=0;D<r;D++){const y=o[D];y.x=(ln()-.5)*8,y.y=(ln()-.5)*5,y.z=(ln()-.5)*4,y.a=0}}return{mesh:s,update:L,reset:N,P:o,count:r}}const ug=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}
float pnoise(vec3 P, vec3 rep){
  vec3 Pi0=mod(floor(P),rep),Pi1=mod(Pi0+vec3(1.0),rep); Pi0=mod289(Pi0); Pi1=mod289(Pi1);
  vec3 Pf0=fract(P),Pf1=Pf0-vec3(1.0);
  vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x),iy=vec4(Pi0.yy,Pi1.yy),iz0=Pi0.zzzz,iz1=Pi1.zzzz;
  vec4 ixy=permute(permute(ix)+iy),ixy0=permute(ixy+iz0),ixy1=permute(ixy+iz1);
  vec4 gx0=ixy0*(1.0/7.0),gy0=fract(floor(gx0)*(1.0/7.0))-0.5; gx0=fract(gx0);
  vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0),sz0=step(gz0,vec4(0.0));
  gx0-=sz0*(step(0.0,gx0)-0.5); gy0-=sz0*(step(0.0,gy0)-0.5);
  vec4 gx1=ixy1*(1.0/7.0),gy1=fract(floor(gx1)*(1.0/7.0))-0.5; gx1=fract(gx1);
  vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1),sz1=step(gz1,vec4(0.0));
  gx1-=sz1*(step(0.0,gx1)-0.5); gy1-=sz1*(step(0.0,gy1)-0.5);
  vec3 g000=vec3(gx0.x,gy0.x,gz0.x),g100=vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010=vec3(gx0.z,gy0.z,gz0.z),g110=vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001=vec3(gx1.x,gy1.x,gz1.x),g101=vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011=vec3(gx1.z,gy1.z,gz1.z),g111=vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));
  g000*=norm0.x; g010*=norm0.y; g100*=norm0.z; g110*=norm0.w;
  vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));
  g001*=norm1.x; g011*=norm1.y; g101*=norm1.z; g111*=norm1.w;
  float n000=dot(g000,Pf0),n100=dot(g100,vec3(Pf1.x,Pf0.yz));
  float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z)),n110=dot(g110,vec3(Pf1.xy,Pf0.z));
  float n001=dot(g001,vec3(Pf0.xy,Pf1.z)),n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));
  float n011=dot(g011,vec3(Pf0.x,Pf1.yz)),n111=dot(g111,Pf1);
  vec3 f=fade(Pf0);
  vec4 nz=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),f.z);
  vec2 nyz=mix(nz.xy,nz.zw,f.y);
  return 2.2*mix(nyz.x,nyz.y,f.x);
}
`,hg=`
uniform float u_time; uniform float u_energy; uniform float u_low; uniform float u_mid; uniform float u_high; uniform float u_click;
varying float v_noise;
${ug}
void main(){
  float t=u_time;
  vec3 dir1 = normalize(vec3(sin(t*0.61), cos(t*0.49), sin(t*0.37)));
  vec3 dir2 = normalize(vec3(cos(t*0.33), sin(t*0.53), cos(t*0.27)));
  vec3 domainWarp = vec3(
    sin(position.y*1.9 + t*0.8),
    sin(position.z*1.7 - t*0.6),
    sin(position.x*2.1 + t*0.7)
  ) * (0.45 + u_mid*0.55);
  vec3 pWarp = position + domainWarp;
  float n1=pnoise(pWarp*1.15+vec3(t*0.22),vec3(10.0));
  float n2=pnoise(pWarp*2.9+vec3(t*0.47),vec3(10.0));
  float n3=abs(pnoise(pWarp*4.4+vec3(t*0.63),vec3(10.0)));
  float n4=pnoise((pWarp + dir1*2.0)*6.2+vec3(t*0.91),vec3(10.0));
  float lobeA = pow(abs(dot(normalize(position), dir1)), 2.2) * (0.45 + u_high*0.9);
  float lobeB = pow(abs(dot(normalize(position), dir2)), 2.0) * (0.35 + u_mid*0.8);
  float ridge = sin(dot(position, dir1*5.5) + t*4.1) * (0.22 + u_low*0.8);
  float pulse=sin(t*4.8+length(position)*3.2)*(0.2+u_low*1.6);
  float d=n1*(0.28+u_energy*0.7)
    + n2*(0.16+u_mid*0.4)
    + n3*(0.10+u_high*0.35)
    + n4*(0.08+u_high*0.25)
    + lobeA*0.35 + lobeB*0.3 + ridge*0.35 + pulse*0.4 + u_click*0.35;
  vec3 normalOffset=normal*d*0.16;
  vec3 flowOffset = vec3(
    sin(position.y*2.5 + t*1.1),
    sin(position.z*2.2 - t*0.9),
    sin(position.x*2.8 + t*1.0)
  ) * (0.09 + u_mid*0.26 + u_click*0.2);
  vec3 twistOffset=vec3(normal.y-normal.z,normal.z-normal.x,normal.x-normal.y)*(0.1+u_mid*0.28+u_click*0.22);
  vec3 p=position+normalOffset+twistOffset+flowOffset;
  v_noise=n1+n2*0.6+n3*0.35+n4*0.25+lobeA*0.3+lobeB*0.2;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
}
`,dg=`
uniform vec3 u_color; uniform float u_time; uniform float u_energy; uniform float u_intensity; uniform float u_alpha;
varying float v_noise;
void main(){
  float shimmer=0.78+sin(u_time*3.4+v_noise*4.3)*0.16;
  float glow=0.62+v_noise*0.35+u_energy*0.75;
  gl_FragColor=vec4(u_color*shimmer*glow*u_intensity, u_alpha);
}
`;function fg(i){const e={u_time:{value:0},u_energy:{value:0},u_low:{value:0},u_mid:{value:0},u_high:{value:0},u_click:{value:0},u_color:{value:new ht(.59,.8,.88)},u_intensity:{value:1},u_alpha:{value:.85}},t=new ci({uniforms:e,vertexShader:hg,fragmentShader:dg,wireframe:!0,transparent:!0,depthWrite:!1}),n=new An(new pl(1.35,4),t);i.add(n);function r(a){const s=J.audio,o=J.phase.name;e.u_time.value=a,e.u_energy.value=s.energy,e.u_low.value=s.low,e.u_mid.value=s.mid,e.u_high.value=s.high,e.u_click.value=s.beat;const l=J.meshRGB;e.u_color.value.setRGB(l[0]/255,l[1]/255,l[2]/255);const c=o==="pde"||o==="orb";if(n.visible=c&&J.ditherMix<.85,o==="pde")n.position.set(0,.55,0),n.scale.setScalar(.78),e.u_alpha.value=.72;else if(o==="orb"){n.position.set(0,0,0);const u=Math.min(1,J.phase.lt/1.5);n.scale.setScalar(.92+.08*u),e.u_alpha.value=.88*u}n.rotation.y=J.spin*.35}return{mesh:n,uniforms:e,update:r}}const Mh=[{name:"Navier–Stokes",tex:"\\rho\\left(\\partial_t\\mathbf{u}+\\mathbf{u}\\cdot\\nabla\\mathbf{u}\\right)=-\\nabla p+\\mu\\nabla^2\\mathbf{u}+\\mathbf{f}",cap:"The equations of fluid motion — momentum, pressure and viscosity braided into turbulence."},{name:"Einstein field equations",tex:"G_{\\mu\\nu}+\\Lambda g_{\\mu\\nu}=\\frac{8\\pi G}{c^4}\\,T_{\\mu\\nu}",cap:"Mass and energy tell spacetime how to curve — the geometry that collapses into a black hole."},{name:"Wave equation",tex:"\\partial_{tt}\\,u=c^2\\,\\nabla^2 u",cap:"How a disturbance travels through a medium — the mathematics of sound."},{name:"Heat / diffusion equation",tex:"\\partial_t u=\\alpha\\,\\nabla^2 u",cap:"How intensity spreads and averages across space — the same error diffusion that dithers every frame."},{name:"Schrödinger equation",tex:"i\\hbar\\,\\partial_t\\Psi=-\\frac{\\hbar^2}{2m}\\nabla^2\\Psi+V\\Psi",cap:"A quantum state evolving as a wave of probability — the shimmer beneath the particle field."}],ra=2.6,F0=4.6,Sh=2.2,pg=ra+F0+Sh,mg=pg*Mh.length,Er=[{n:"pde",d:mg},{n:"orb",d:10},{n:"accretion",d:7},{n:"blackhole",d:6},{n:"star",d:4.5},{n:"nova",d:2.6},{n:"galaxy",d:9},{n:"dissolve",d:6},{n:"core",d:9},{n:"glass",d:1e9}],Nr=[];{let i=0;for(const e of Er)Nr.push(i),i+=e.d}const Kc=Nr[8],gg={pde:"",orb:"Genesis",accretion:"Accretion",blackhole:"Collapse",star:"Rebirth",nova:"Supernova",galaxy:"Galaxy",dissolve:"Dissolution",core:"",glass:"Frosted Glass"},vg={pde:1.6,orb:1.9,accretion:.9,blackhole:1.8,star:.2,nova:0,galaxy:1.15,dissolve:.1,core:.05,glass:.04};function xg(i){return gg[i]||""}function Zc(i){for(let e=Er.length-1;e>=0;e--)if(i>=Nr[e])return{i:e,name:Er[e].n,lt:i-Nr[e],dur:Er[e].d};return{i:0,name:"pde",lt:0,dur:Er[0].d}}function _g(){let i=-1;function e(a){J.paused||(J.clock+=a),J.clock>Kc+1e8&&(J.clock=Kc);const s=Zc(J.clock);return J.phase=s,J.paused||(J.spin+=a*(vg[s.name]||0)*(1+J.audio.energy*.9)),J.centerBloom=0,J.ditherMix=0,J.glassMode=!1,s.name==="pde"?(J.haloMul=1.15,J.coreMul=.58,J.trailA=.55):s.name==="orb"?(J.haloMul=2.6,J.coreMul=.95,J.trailA=.32):(J.haloMul=3.3,J.coreMul=1,J.trailA=.3),s.name==="accretion"||s.name==="blackhole"?J.diskFlick=.74+.26*Math.sin(J.time*24)+.12*Math.sin(J.time*10.5+1.7):J.diskFlick=1,s.name==="core"&&(J.ditherMix=1),s.name==="glass"&&(J.ditherMix=1,J.glassMode=!0),s.name!=="pde"&&(i=-1),{ph:s,curEq:i,setEq(o){i=o}}}function t(a){const s=Zc(J.clock),o=Math.min(Er.length-1,Math.max(0,s.i+a));J.clock=Nr[o],i=-1}function n(){J.clock=0,J.spin=0,i=-1,J.ditherMix=0,J.flash=0}function r(){J.clock=Nr[8],i=-1}return{step:e,skip:t,restart:n,skipToCore:r,get curEq(){return i}}}class ce extends Error{constructor(e,t){var n="KaTeX parse error: "+e,r,a,s=t&&t.loc;if(s&&s.start<=s.end){var o=s.lexer.input;r=s.start,a=s.end,r===o.length?n+=" at end of input: ":n+=" at position "+(r+1)+": ";var l=o.slice(r,a).replace(/[^]/g,"$&̲"),c;r>15?c="…"+o.slice(r-15,r):c=o.slice(0,r);var u;a+15<o.length?u=o.slice(a,a+15)+"…":u=o.slice(a),n+=c+l+u}super(n),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,ce.prototype),this.position=r,r!=null&&a!=null&&(this.length=a-r),this.rawMessage=e}}var yg=/([A-Z])/g,bg=i=>i.replace(yg,"-$1").toLowerCase(),Mg={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Sg=/[&><"']/g,Zt=i=>String(i).replace(Sg,e=>Mg[e]),ds=i=>i.type==="ordgroup"||i.type==="color"?i.body.length===1?ds(i.body[0]):i:i.type==="font"?ds(i.body):i,wg=new Set(["mathord","textord","atom"]),hi=i=>wg.has(ds(i).type),Eg=i=>{var e=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(i);return e?e[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1])?null:e[1].toLowerCase():"_relative"},z0={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:i=>"#"+i},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(i,e)=>(e.push(i),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:i=>Math.max(0,i),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:i=>Math.max(0,i),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:i=>Math.max(0,i),cli:"-e, --max-expand <n>",cliProcessor:i=>i==="Infinity"?1/0:parseInt(i)},globalGroup:{type:"boolean",cli:!1}};function Tg(i){if(typeof i!="string")return i.enum[0];switch(i){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function Ag(i){if(i.default!==void 0)return i.default;var e=Array.isArray(i.type)?i.type[0]:i.type;return Tg(e)}function Rg(i,e,t,n){var r=t[e];i[e]=r!==void 0?n.processor?n.processor(r):r:Ag(n)}class xl{constructor(e){e===void 0&&(e={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e=e||{};for(var t of Object.keys(z0)){var n=z0[t];n&&Rg(this,t,e,n)}}reportNonstrict(e,t,n){var r=this.strict;if(typeof r=="function"&&(r=r(e,t,n)),!(!r||r==="ignore")){if(r===!0||r==="error")throw new ce("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+e+"]"),n);r==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]"))}}useStrictBehavior(e,t,n){var r=this.strict;if(typeof r=="function")try{r=r(e,t,n)}catch{r="error"}return!r||r==="ignore"?!1:r===!0||r==="error"?!0:r==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]")),!1)}isTrusted(e){if("url"in e&&e.url&&!e.protocol){var t=Eg(e.url);if(t==null)return!1;e.protocol=t}var n=typeof this.trust=="function"?this.trust(e):this.trust;return!!n}}class Mi{constructor(e,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=n}sup(){return zn[Cg[this.id]]}sub(){return zn[Dg[this.id]]}fracNum(){return zn[Pg[this.id]]}fracDen(){return zn[Ig[this.id]]}cramp(){return zn[Lg[this.id]]}text(){return zn[Ug[this.id]]}isTight(){return this.size>=2}}var _l=0,_s=1,Rr=2,oi=3,da=4,Rn=5,Fr=6,nn=7,zn=[new Mi(_l,0,!1),new Mi(_s,0,!0),new Mi(Rr,1,!1),new Mi(oi,1,!0),new Mi(da,2,!1),new Mi(Rn,2,!0),new Mi(Fr,3,!1),new Mi(nn,3,!0)],Cg=[da,Rn,da,Rn,Fr,nn,Fr,nn],Dg=[Rn,Rn,Rn,Rn,nn,nn,nn,nn],Pg=[Rr,oi,da,Rn,Fr,nn,Fr,nn],Ig=[oi,oi,Rn,Rn,nn,nn,nn,nn],Lg=[_s,_s,oi,oi,Rn,Rn,nn,nn],Ug=[_l,_s,Rr,oi,Rr,oi,Rr,oi],je={DISPLAY:zn[_l],TEXT:zn[Rr],SCRIPT:zn[da],SCRIPTSCRIPT:zn[Fr]},B0=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function Ng(i){for(var e=0;e<B0.length;e++)for(var t=B0[e],n=0;n<t.blocks.length;n++){var r=t.blocks[n];if(i>=r[0]&&i<=r[1])return t.name}return null}var fs=[];B0.forEach(i=>i.blocks.forEach(e=>fs.push(...e)));function wh(i){for(var e=0;e<fs.length;e+=2)if(i>=fs[e]&&i<=fs[e+1])return!0;return!1}var Ht=i=>i+" "+i,Sr=80,Fg=function(e,t){return"M95,"+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+" -"+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},zg=function(e,t){return"M263,"+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},Bg=function(e,t){return"M983 "+(10+e+t)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},Og=function(e,t){return"M424,"+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+t+`
h400000v`+(40+e)+"h-400000z"},kg=function(e,t){return"M473,"+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+t+"h400000v"+(40+e)+"H1017.7z"},Hg=function(e){var t=e/2;return"M400000 "+e+" H0 L"+t+" 0 l65 45 L145 "+(e-80)+" H400000z"},Gg=function(e,t,n){var r=n-54-t-e;return"M702 "+(e+t)+"H400000"+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+e)+"H742z"},Vg=function(e,t,n){t=1e3*t;var r="";switch(e){case"sqrtMain":r=Fg(t,Sr);break;case"sqrtSize1":r=zg(t,Sr);break;case"sqrtSize2":r=Bg(t,Sr);break;case"sqrtSize3":r=Og(t,Sr);break;case"sqrtSize4":r=kg(t,Sr);break;case"sqrtTall":r=Gg(t,Sr,n)}return r},Wg=function(e,t){switch(e){case"⎜":return Ht("M291 0 H417 V"+t+" H291z");case"∣":return Ht("M145 0 H188 V"+t+" H145z");case"∥":return Ht("M145 0 H188 V"+t+" H145z")+Ht("M367 0 H410 V"+t+" H367z");case"⎟":return Ht("M457 0 H583 V"+t+" H457z");case"⎢":return Ht("M319 0 H403 V"+t+" H319z");case"⎥":return Ht("M263 0 H347 V"+t+" H263z");case"⎪":return Ht("M384 0 H504 V"+t+" H384z");case"⏐":return Ht("M312 0 H355 V"+t+" H312z");case"‖":return Ht("M257 0 H300 V"+t+" H257z")+Ht("M478 0 H521 V"+t+" H478z");default:return""}},jc={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:Ht("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:Ht("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:Ht("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:Ht("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:Ht("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:Ht("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:Ht("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:Ht("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},qg=function(e,t){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 v84 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function Xg(i){return"toText"in i}class Vr{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){return this.children.map(e=>{if(Xg(e))return e.toText();throw new Error("Expected MathDomNode with toText, got "+e.constructor.name)}).join("")}}var O0={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Yg={ex:!0,em:!0,mu:!0},Eh=function(e){return typeof e!="string"&&(e=e.unit),e in O0||e in Yg||e==="ex"},It=function(e,t){var n;if(e.unit in O0)n=O0[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit==="mu")n=t.fontMetrics().cssEmPerMu;else{var r;if(t.style.isTight()?r=t.havingStyle(t.style.text()):r=t,e.unit==="ex")n=r.fontMetrics().xHeight;else if(e.unit==="em")n=r.fontMetrics().quad;else throw new ce("Invalid unit: '"+e.unit+"'");r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},ge=function(e){return+e.toFixed(4)+"em"},Di=function(e){return e.filter(t=>t).join(" ")},yl=function(e){var t="";for(var n of Object.keys(e)){var r=e[n];r!==void 0&&(t+=bg(n)+":"+r+";")}return t},Th=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push("mtight");var r=t.getColor();r&&(this.style.color=r)}},Ah=function(e){var t=document.createElement(e);t.className=Di(this.classes),Object.assign(t.style,this.style);for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t},$g=/[\s"'>/=\x00-\x1f]/,Rh=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+Zt(Di(this.classes))+'"');var n=yl(this.style);n&&(t+=' style="'+Zt(n)+'"');for(var r of Object.keys(this.attributes)){if($g.test(r))throw new ce("Invalid attribute name '"+r+"'");t+=" "+r+'="'+Zt(this.attributes[r])+'"'}t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</"+e+">",t};class Wr{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,Th.call(this,e,n,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Ah.call(this,"span")}toMarkup(){return Rh.call(this,"span")}}class Cs{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Th.call(this,t,r),this.children=n||[],this.setAttribute("href",e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Ah.call(this,"a")}toMarkup(){return Rh.call(this,"a")}}class Kg{constructor(e,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement("img");return e.src=this.src,e.alt=this.alt,e.className="mord",Object.assign(e.style,this.style),e}toMarkup(){var e='<img src="'+Zt(this.src)+'"'+(' alt="'+Zt(this.alt)+'"'),t=yl(this.style);return t&&(e+=' style="'+Zt(t)+'"'),e+="'/>",e}}var Zg={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class _n{constructor(e,t,n,r,a,s,o,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=a||0,this.width=s||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var c=Ng(this.text.charCodeAt(0));c&&this.classes.push(c+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=Zg[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;return this.italic>0&&(t=document.createElement("span"),t.style.marginRight=ge(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=Di(this.classes)),Object.keys(this.style).length>0&&(t=t||document.createElement("span"),Object.assign(t.style,this.style)),t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=Zt(Di(this.classes)),t+='"');var n="";this.italic>0&&(n+="margin-right:"+ge(this.italic)+";"),n+=yl(this.style),n&&(e=!0,t+=' style="'+Zt(n)+'"');var r=Zt(this.text);return e?(t+=">",t+=r,t+="</span>",t):r}}class ui{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var t of Object.keys(this.attributes))e+=" "+t+'="'+Zt(this.attributes[t])+'"';e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</svg>",e}}class Pi{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",jc[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+Zt(this.alternate)+'"/>':'<path d="'+Zt(jc[this.pathName])+'"/>'}}class k0{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"line");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);return t}toMarkup(){var e="<line";for(var t of Object.keys(this.attributes))e+=" "+t+'="'+Zt(this.attributes[t])+'"';return e+="/>",e}}function jg(i){if(i instanceof _n)return i;throw new Error("Expected symbolNode but got "+String(i)+".")}function Jg(i){if(i instanceof Wr)return i;throw new Error("Expected span<HtmlDomNode> but got "+String(i)+".")}var Qg=i=>i instanceof Wr||i instanceof Cs||i instanceof Vr,Gn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Ja={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Jc={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function ev(i,e){Gn[i]=e}function bl(i,e,t){if(!Gn[e])throw new Error("Font metrics not found for font: "+e+".");var n=i.charCodeAt(0),r=Gn[e][n];if(!r&&i[0]in Jc&&(n=Jc[i[0]].charCodeAt(0),r=Gn[e][n]),!r&&t==="text"&&wh(n)&&(r=Gn[e][77]),r)return{depth:r[0],height:r[1],italic:r[2],skew:r[3],width:r[4]}}var Ro={};function tv(i){var e;if(i>=5?e=0:i>=3?e=1:e=2,!Ro[e]){var t=Ro[e]={cssEmPerMu:Ja.quad[e]/18};for(var n in Ja)Ja.hasOwnProperty(n)&&(t[n]=Ja[n][e])}return Ro[e]}var Tt={math:{},text:{}};function h(i,e,t,n,r,a){Tt[i][r]={font:e,group:t,replace:n},a&&n&&(Tt[i][n]=Tt[i][r])}var m="math",ae="text",_="main",U="ams",At="accent-token",Ee="bin",sn="close",qr="inner",ke="mathord",Ot="op-token",yn="open",xa="punct",F="rel",di="spacing",O="textord";h(m,_,F,"≡","\\equiv",!0);h(m,_,F,"≺","\\prec",!0);h(m,_,F,"≻","\\succ",!0);h(m,_,F,"∼","\\sim",!0);h(m,_,F,"⊥","\\perp");h(m,_,F,"⪯","\\preceq",!0);h(m,_,F,"⪰","\\succeq",!0);h(m,_,F,"≃","\\simeq",!0);h(m,_,F,"∣","\\mid",!0);h(m,_,F,"≪","\\ll",!0);h(m,_,F,"≫","\\gg",!0);h(m,_,F,"≍","\\asymp",!0);h(m,_,F,"∥","\\parallel");h(m,_,F,"⋈","\\bowtie",!0);h(m,_,F,"⌣","\\smile",!0);h(m,_,F,"⊑","\\sqsubseteq",!0);h(m,_,F,"⊒","\\sqsupseteq",!0);h(m,_,F,"≐","\\doteq",!0);h(m,_,F,"⌢","\\frown",!0);h(m,_,F,"∋","\\ni",!0);h(m,_,F,"∝","\\propto",!0);h(m,_,F,"⊢","\\vdash",!0);h(m,_,F,"⊣","\\dashv",!0);h(m,_,F,"∋","\\owns");h(m,_,xa,".","\\ldotp");h(m,_,xa,"⋅","\\cdotp");h(m,_,xa,"⋅","·");h(ae,_,O,"⋅","·");h(m,_,O,"#","\\#");h(ae,_,O,"#","\\#");h(m,_,O,"&","\\&");h(ae,_,O,"&","\\&");h(m,_,O,"ℵ","\\aleph",!0);h(m,_,O,"∀","\\forall",!0);h(m,_,O,"ℏ","\\hbar",!0);h(m,_,O,"∃","\\exists",!0);h(m,_,O,"∇","\\nabla",!0);h(m,_,O,"♭","\\flat",!0);h(m,_,O,"ℓ","\\ell",!0);h(m,_,O,"♮","\\natural",!0);h(m,_,O,"♣","\\clubsuit",!0);h(m,_,O,"℘","\\wp",!0);h(m,_,O,"♯","\\sharp",!0);h(m,_,O,"♢","\\diamondsuit",!0);h(m,_,O,"ℜ","\\Re",!0);h(m,_,O,"♡","\\heartsuit",!0);h(m,_,O,"ℑ","\\Im",!0);h(m,_,O,"♠","\\spadesuit",!0);h(m,_,O,"§","\\S",!0);h(ae,_,O,"§","\\S");h(m,_,O,"¶","\\P",!0);h(ae,_,O,"¶","\\P");h(m,_,O,"†","\\dag");h(ae,_,O,"†","\\dag");h(ae,_,O,"†","\\textdagger");h(m,_,O,"‡","\\ddag");h(ae,_,O,"‡","\\ddag");h(ae,_,O,"‡","\\textdaggerdbl");h(m,_,sn,"⎱","\\rmoustache",!0);h(m,_,yn,"⎰","\\lmoustache",!0);h(m,_,sn,"⟯","\\rgroup",!0);h(m,_,yn,"⟮","\\lgroup",!0);h(m,_,Ee,"∓","\\mp",!0);h(m,_,Ee,"⊖","\\ominus",!0);h(m,_,Ee,"⊎","\\uplus",!0);h(m,_,Ee,"⊓","\\sqcap",!0);h(m,_,Ee,"∗","\\ast");h(m,_,Ee,"⊔","\\sqcup",!0);h(m,_,Ee,"◯","\\bigcirc",!0);h(m,_,Ee,"∙","\\bullet",!0);h(m,_,Ee,"‡","\\ddagger");h(m,_,Ee,"≀","\\wr",!0);h(m,_,Ee,"⨿","\\amalg");h(m,_,Ee,"&","\\And");h(m,_,F,"⟵","\\longleftarrow",!0);h(m,_,F,"⇐","\\Leftarrow",!0);h(m,_,F,"⟸","\\Longleftarrow",!0);h(m,_,F,"⟶","\\longrightarrow",!0);h(m,_,F,"⇒","\\Rightarrow",!0);h(m,_,F,"⟹","\\Longrightarrow",!0);h(m,_,F,"↔","\\leftrightarrow",!0);h(m,_,F,"⟷","\\longleftrightarrow",!0);h(m,_,F,"⇔","\\Leftrightarrow",!0);h(m,_,F,"⟺","\\Longleftrightarrow",!0);h(m,_,F,"↦","\\mapsto",!0);h(m,_,F,"⟼","\\longmapsto",!0);h(m,_,F,"↗","\\nearrow",!0);h(m,_,F,"↩","\\hookleftarrow",!0);h(m,_,F,"↪","\\hookrightarrow",!0);h(m,_,F,"↘","\\searrow",!0);h(m,_,F,"↼","\\leftharpoonup",!0);h(m,_,F,"⇀","\\rightharpoonup",!0);h(m,_,F,"↙","\\swarrow",!0);h(m,_,F,"↽","\\leftharpoondown",!0);h(m,_,F,"⇁","\\rightharpoondown",!0);h(m,_,F,"↖","\\nwarrow",!0);h(m,_,F,"⇌","\\rightleftharpoons",!0);h(m,U,F,"≮","\\nless",!0);h(m,U,F,"","\\@nleqslant");h(m,U,F,"","\\@nleqq");h(m,U,F,"⪇","\\lneq",!0);h(m,U,F,"≨","\\lneqq",!0);h(m,U,F,"","\\@lvertneqq");h(m,U,F,"⋦","\\lnsim",!0);h(m,U,F,"⪉","\\lnapprox",!0);h(m,U,F,"⊀","\\nprec",!0);h(m,U,F,"⋠","\\npreceq",!0);h(m,U,F,"⋨","\\precnsim",!0);h(m,U,F,"⪹","\\precnapprox",!0);h(m,U,F,"≁","\\nsim",!0);h(m,U,F,"","\\@nshortmid");h(m,U,F,"∤","\\nmid",!0);h(m,U,F,"⊬","\\nvdash",!0);h(m,U,F,"⊭","\\nvDash",!0);h(m,U,F,"⋪","\\ntriangleleft");h(m,U,F,"⋬","\\ntrianglelefteq",!0);h(m,U,F,"⊊","\\subsetneq",!0);h(m,U,F,"","\\@varsubsetneq");h(m,U,F,"⫋","\\subsetneqq",!0);h(m,U,F,"","\\@varsubsetneqq");h(m,U,F,"≯","\\ngtr",!0);h(m,U,F,"","\\@ngeqslant");h(m,U,F,"","\\@ngeqq");h(m,U,F,"⪈","\\gneq",!0);h(m,U,F,"≩","\\gneqq",!0);h(m,U,F,"","\\@gvertneqq");h(m,U,F,"⋧","\\gnsim",!0);h(m,U,F,"⪊","\\gnapprox",!0);h(m,U,F,"⊁","\\nsucc",!0);h(m,U,F,"⋡","\\nsucceq",!0);h(m,U,F,"⋩","\\succnsim",!0);h(m,U,F,"⪺","\\succnapprox",!0);h(m,U,F,"≆","\\ncong",!0);h(m,U,F,"","\\@nshortparallel");h(m,U,F,"∦","\\nparallel",!0);h(m,U,F,"⊯","\\nVDash",!0);h(m,U,F,"⋫","\\ntriangleright");h(m,U,F,"⋭","\\ntrianglerighteq",!0);h(m,U,F,"","\\@nsupseteqq");h(m,U,F,"⊋","\\supsetneq",!0);h(m,U,F,"","\\@varsupsetneq");h(m,U,F,"⫌","\\supsetneqq",!0);h(m,U,F,"","\\@varsupsetneqq");h(m,U,F,"⊮","\\nVdash",!0);h(m,U,F,"⪵","\\precneqq",!0);h(m,U,F,"⪶","\\succneqq",!0);h(m,U,F,"","\\@nsubseteqq");h(m,U,Ee,"⊴","\\unlhd");h(m,U,Ee,"⊵","\\unrhd");h(m,U,F,"↚","\\nleftarrow",!0);h(m,U,F,"↛","\\nrightarrow",!0);h(m,U,F,"⇍","\\nLeftarrow",!0);h(m,U,F,"⇏","\\nRightarrow",!0);h(m,U,F,"↮","\\nleftrightarrow",!0);h(m,U,F,"⇎","\\nLeftrightarrow",!0);h(m,U,F,"△","\\vartriangle");h(m,U,O,"ℏ","\\hslash");h(m,U,O,"▽","\\triangledown");h(m,U,O,"◊","\\lozenge");h(m,U,O,"Ⓢ","\\circledS");h(m,U,O,"®","\\circledR");h(ae,U,O,"®","\\circledR");h(m,U,O,"∡","\\measuredangle",!0);h(m,U,O,"∄","\\nexists");h(m,U,O,"℧","\\mho");h(m,U,O,"Ⅎ","\\Finv",!0);h(m,U,O,"⅁","\\Game",!0);h(m,U,O,"‵","\\backprime");h(m,U,O,"▲","\\blacktriangle");h(m,U,O,"▼","\\blacktriangledown");h(m,U,O,"■","\\blacksquare");h(m,U,O,"⧫","\\blacklozenge");h(m,U,O,"★","\\bigstar");h(m,U,O,"∢","\\sphericalangle",!0);h(m,U,O,"∁","\\complement",!0);h(m,U,O,"ð","\\eth",!0);h(ae,_,O,"ð","ð");h(m,U,O,"╱","\\diagup");h(m,U,O,"╲","\\diagdown");h(m,U,O,"□","\\square");h(m,U,O,"□","\\Box");h(m,U,O,"◊","\\Diamond");h(m,U,O,"¥","\\yen",!0);h(ae,U,O,"¥","\\yen",!0);h(m,U,O,"✓","\\checkmark",!0);h(ae,U,O,"✓","\\checkmark");h(m,U,O,"ℶ","\\beth",!0);h(m,U,O,"ℸ","\\daleth",!0);h(m,U,O,"ℷ","\\gimel",!0);h(m,U,O,"ϝ","\\digamma",!0);h(m,U,O,"ϰ","\\varkappa");h(m,U,yn,"┌","\\@ulcorner",!0);h(m,U,sn,"┐","\\@urcorner",!0);h(m,U,yn,"└","\\@llcorner",!0);h(m,U,sn,"┘","\\@lrcorner",!0);h(m,U,F,"≦","\\leqq",!0);h(m,U,F,"⩽","\\leqslant",!0);h(m,U,F,"⪕","\\eqslantless",!0);h(m,U,F,"≲","\\lesssim",!0);h(m,U,F,"⪅","\\lessapprox",!0);h(m,U,F,"≊","\\approxeq",!0);h(m,U,Ee,"⋖","\\lessdot");h(m,U,F,"⋘","\\lll",!0);h(m,U,F,"≶","\\lessgtr",!0);h(m,U,F,"⋚","\\lesseqgtr",!0);h(m,U,F,"⪋","\\lesseqqgtr",!0);h(m,U,F,"≑","\\doteqdot");h(m,U,F,"≓","\\risingdotseq",!0);h(m,U,F,"≒","\\fallingdotseq",!0);h(m,U,F,"∽","\\backsim",!0);h(m,U,F,"⋍","\\backsimeq",!0);h(m,U,F,"⫅","\\subseteqq",!0);h(m,U,F,"⋐","\\Subset",!0);h(m,U,F,"⊏","\\sqsubset",!0);h(m,U,F,"≼","\\preccurlyeq",!0);h(m,U,F,"⋞","\\curlyeqprec",!0);h(m,U,F,"≾","\\precsim",!0);h(m,U,F,"⪷","\\precapprox",!0);h(m,U,F,"⊲","\\vartriangleleft");h(m,U,F,"⊴","\\trianglelefteq");h(m,U,F,"⊨","\\vDash",!0);h(m,U,F,"⊪","\\Vvdash",!0);h(m,U,F,"⌣","\\smallsmile");h(m,U,F,"⌢","\\smallfrown");h(m,U,F,"≏","\\bumpeq",!0);h(m,U,F,"≎","\\Bumpeq",!0);h(m,U,F,"≧","\\geqq",!0);h(m,U,F,"⩾","\\geqslant",!0);h(m,U,F,"⪖","\\eqslantgtr",!0);h(m,U,F,"≳","\\gtrsim",!0);h(m,U,F,"⪆","\\gtrapprox",!0);h(m,U,Ee,"⋗","\\gtrdot");h(m,U,F,"⋙","\\ggg",!0);h(m,U,F,"≷","\\gtrless",!0);h(m,U,F,"⋛","\\gtreqless",!0);h(m,U,F,"⪌","\\gtreqqless",!0);h(m,U,F,"≖","\\eqcirc",!0);h(m,U,F,"≗","\\circeq",!0);h(m,U,F,"≜","\\triangleq",!0);h(m,U,F,"∼","\\thicksim");h(m,U,F,"≈","\\thickapprox");h(m,U,F,"⫆","\\supseteqq",!0);h(m,U,F,"⋑","\\Supset",!0);h(m,U,F,"⊐","\\sqsupset",!0);h(m,U,F,"≽","\\succcurlyeq",!0);h(m,U,F,"⋟","\\curlyeqsucc",!0);h(m,U,F,"≿","\\succsim",!0);h(m,U,F,"⪸","\\succapprox",!0);h(m,U,F,"⊳","\\vartriangleright");h(m,U,F,"⊵","\\trianglerighteq");h(m,U,F,"⊩","\\Vdash",!0);h(m,U,F,"∣","\\shortmid");h(m,U,F,"∥","\\shortparallel");h(m,U,F,"≬","\\between",!0);h(m,U,F,"⋔","\\pitchfork",!0);h(m,U,F,"∝","\\varpropto");h(m,U,F,"◀","\\blacktriangleleft");h(m,U,F,"∴","\\therefore",!0);h(m,U,F,"∍","\\backepsilon");h(m,U,F,"▶","\\blacktriangleright");h(m,U,F,"∵","\\because",!0);h(m,U,F,"⋘","\\llless");h(m,U,F,"⋙","\\gggtr");h(m,U,Ee,"⊲","\\lhd");h(m,U,Ee,"⊳","\\rhd");h(m,U,F,"≂","\\eqsim",!0);h(m,_,F,"⋈","\\Join");h(m,U,F,"≑","\\Doteq",!0);h(m,U,Ee,"∔","\\dotplus",!0);h(m,U,Ee,"∖","\\smallsetminus");h(m,U,Ee,"⋒","\\Cap",!0);h(m,U,Ee,"⋓","\\Cup",!0);h(m,U,Ee,"⩞","\\doublebarwedge",!0);h(m,U,Ee,"⊟","\\boxminus",!0);h(m,U,Ee,"⊞","\\boxplus",!0);h(m,U,Ee,"⋇","\\divideontimes",!0);h(m,U,Ee,"⋉","\\ltimes",!0);h(m,U,Ee,"⋊","\\rtimes",!0);h(m,U,Ee,"⋋","\\leftthreetimes",!0);h(m,U,Ee,"⋌","\\rightthreetimes",!0);h(m,U,Ee,"⋏","\\curlywedge",!0);h(m,U,Ee,"⋎","\\curlyvee",!0);h(m,U,Ee,"⊝","\\circleddash",!0);h(m,U,Ee,"⊛","\\circledast",!0);h(m,U,Ee,"⋅","\\centerdot");h(m,U,Ee,"⊺","\\intercal",!0);h(m,U,Ee,"⋒","\\doublecap");h(m,U,Ee,"⋓","\\doublecup");h(m,U,Ee,"⊠","\\boxtimes",!0);h(m,U,F,"⇢","\\dashrightarrow",!0);h(m,U,F,"⇠","\\dashleftarrow",!0);h(m,U,F,"⇇","\\leftleftarrows",!0);h(m,U,F,"⇆","\\leftrightarrows",!0);h(m,U,F,"⇚","\\Lleftarrow",!0);h(m,U,F,"↞","\\twoheadleftarrow",!0);h(m,U,F,"↢","\\leftarrowtail",!0);h(m,U,F,"↫","\\looparrowleft",!0);h(m,U,F,"⇋","\\leftrightharpoons",!0);h(m,U,F,"↶","\\curvearrowleft",!0);h(m,U,F,"↺","\\circlearrowleft",!0);h(m,U,F,"↰","\\Lsh",!0);h(m,U,F,"⇈","\\upuparrows",!0);h(m,U,F,"↿","\\upharpoonleft",!0);h(m,U,F,"⇃","\\downharpoonleft",!0);h(m,_,F,"⊶","\\origof",!0);h(m,_,F,"⊷","\\imageof",!0);h(m,U,F,"⊸","\\multimap",!0);h(m,U,F,"↭","\\leftrightsquigarrow",!0);h(m,U,F,"⇉","\\rightrightarrows",!0);h(m,U,F,"⇄","\\rightleftarrows",!0);h(m,U,F,"↠","\\twoheadrightarrow",!0);h(m,U,F,"↣","\\rightarrowtail",!0);h(m,U,F,"↬","\\looparrowright",!0);h(m,U,F,"↷","\\curvearrowright",!0);h(m,U,F,"↻","\\circlearrowright",!0);h(m,U,F,"↱","\\Rsh",!0);h(m,U,F,"⇊","\\downdownarrows",!0);h(m,U,F,"↾","\\upharpoonright",!0);h(m,U,F,"⇂","\\downharpoonright",!0);h(m,U,F,"⇝","\\rightsquigarrow",!0);h(m,U,F,"⇝","\\leadsto");h(m,U,F,"⇛","\\Rrightarrow",!0);h(m,U,F,"↾","\\restriction");h(m,_,O,"‘","`");h(m,_,O,"$","\\$");h(ae,_,O,"$","\\$");h(ae,_,O,"$","\\textdollar");h(m,_,O,"%","\\%");h(ae,_,O,"%","\\%");h(m,_,O,"_","\\_");h(ae,_,O,"_","\\_");h(ae,_,O,"_","\\textunderscore");h(m,_,O,"∠","\\angle",!0);h(m,_,O,"∞","\\infty",!0);h(m,_,O,"′","\\prime");h(m,_,O,"△","\\triangle");h(m,_,O,"Γ","\\Gamma",!0);h(m,_,O,"Δ","\\Delta",!0);h(m,_,O,"Θ","\\Theta",!0);h(m,_,O,"Λ","\\Lambda",!0);h(m,_,O,"Ξ","\\Xi",!0);h(m,_,O,"Π","\\Pi",!0);h(m,_,O,"Σ","\\Sigma",!0);h(m,_,O,"Υ","\\Upsilon",!0);h(m,_,O,"Φ","\\Phi",!0);h(m,_,O,"Ψ","\\Psi",!0);h(m,_,O,"Ω","\\Omega",!0);h(m,_,O,"A","Α");h(m,_,O,"B","Β");h(m,_,O,"E","Ε");h(m,_,O,"Z","Ζ");h(m,_,O,"H","Η");h(m,_,O,"I","Ι");h(m,_,O,"K","Κ");h(m,_,O,"M","Μ");h(m,_,O,"N","Ν");h(m,_,O,"O","Ο");h(m,_,O,"P","Ρ");h(m,_,O,"T","Τ");h(m,_,O,"X","Χ");h(m,_,O,"¬","\\neg",!0);h(m,_,O,"¬","\\lnot");h(m,_,O,"⊤","\\top");h(m,_,O,"⊥","\\bot");h(m,_,O,"∅","\\emptyset");h(m,U,O,"∅","\\varnothing");h(m,_,ke,"α","\\alpha",!0);h(m,_,ke,"β","\\beta",!0);h(m,_,ke,"γ","\\gamma",!0);h(m,_,ke,"δ","\\delta",!0);h(m,_,ke,"ϵ","\\epsilon",!0);h(m,_,ke,"ζ","\\zeta",!0);h(m,_,ke,"η","\\eta",!0);h(m,_,ke,"θ","\\theta",!0);h(m,_,ke,"ι","\\iota",!0);h(m,_,ke,"κ","\\kappa",!0);h(m,_,ke,"λ","\\lambda",!0);h(m,_,ke,"μ","\\mu",!0);h(m,_,ke,"ν","\\nu",!0);h(m,_,ke,"ξ","\\xi",!0);h(m,_,ke,"ο","\\omicron",!0);h(m,_,ke,"π","\\pi",!0);h(m,_,ke,"ρ","\\rho",!0);h(m,_,ke,"σ","\\sigma",!0);h(m,_,ke,"τ","\\tau",!0);h(m,_,ke,"υ","\\upsilon",!0);h(m,_,ke,"ϕ","\\phi",!0);h(m,_,ke,"χ","\\chi",!0);h(m,_,ke,"ψ","\\psi",!0);h(m,_,ke,"ω","\\omega",!0);h(m,_,ke,"ε","\\varepsilon",!0);h(m,_,ke,"ϑ","\\vartheta",!0);h(m,_,ke,"ϖ","\\varpi",!0);h(m,_,ke,"ϱ","\\varrho",!0);h(m,_,ke,"ς","\\varsigma",!0);h(m,_,ke,"φ","\\varphi",!0);h(m,_,Ee,"∗","*",!0);h(m,_,Ee,"+","+");h(m,_,Ee,"−","-",!0);h(m,_,Ee,"⋅","\\cdot",!0);h(m,_,Ee,"∘","\\circ",!0);h(m,_,Ee,"÷","\\div",!0);h(m,_,Ee,"±","\\pm",!0);h(m,_,Ee,"×","\\times",!0);h(m,_,Ee,"∩","\\cap",!0);h(m,_,Ee,"∪","\\cup",!0);h(m,_,Ee,"∖","\\setminus",!0);h(m,_,Ee,"∧","\\land");h(m,_,Ee,"∨","\\lor");h(m,_,Ee,"∧","\\wedge",!0);h(m,_,Ee,"∨","\\vee",!0);h(m,_,O,"√","\\surd");h(m,_,yn,"⟨","\\langle",!0);h(m,_,yn,"∣","\\lvert");h(m,_,yn,"∥","\\lVert");h(m,_,sn,"?","?");h(m,_,sn,"!","!");h(m,_,sn,"⟩","\\rangle",!0);h(m,_,sn,"∣","\\rvert");h(m,_,sn,"∥","\\rVert");h(m,_,F,"=","=");h(m,_,F,":",":");h(m,_,F,"≈","\\approx",!0);h(m,_,F,"≅","\\cong",!0);h(m,_,F,"≥","\\ge");h(m,_,F,"≥","\\geq",!0);h(m,_,F,"←","\\gets");h(m,_,F,">","\\gt",!0);h(m,_,F,"∈","\\in",!0);h(m,_,F,"","\\@not");h(m,_,F,"⊂","\\subset",!0);h(m,_,F,"⊃","\\supset",!0);h(m,_,F,"⊆","\\subseteq",!0);h(m,_,F,"⊇","\\supseteq",!0);h(m,U,F,"⊈","\\nsubseteq",!0);h(m,U,F,"⊉","\\nsupseteq",!0);h(m,_,F,"⊨","\\models");h(m,_,F,"←","\\leftarrow",!0);h(m,_,F,"≤","\\le");h(m,_,F,"≤","\\leq",!0);h(m,_,F,"<","\\lt",!0);h(m,_,F,"→","\\rightarrow",!0);h(m,_,F,"→","\\to");h(m,U,F,"≱","\\ngeq",!0);h(m,U,F,"≰","\\nleq",!0);h(m,_,di," ","\\ ");h(m,_,di," ","\\space");h(m,_,di," ","\\nobreakspace");h(ae,_,di," ","\\ ");h(ae,_,di," "," ");h(ae,_,di," ","\\space");h(ae,_,di," ","\\nobreakspace");h(m,_,di,"","\\nobreak");h(m,_,di,"","\\allowbreak");h(m,_,xa,",",",");h(m,_,xa,";",";");h(m,U,Ee,"⊼","\\barwedge",!0);h(m,U,Ee,"⊻","\\veebar",!0);h(m,_,Ee,"⊙","\\odot",!0);h(m,_,Ee,"⊕","\\oplus",!0);h(m,_,Ee,"⊗","\\otimes",!0);h(m,_,O,"∂","\\partial",!0);h(m,_,Ee,"⊘","\\oslash",!0);h(m,U,Ee,"⊚","\\circledcirc",!0);h(m,U,Ee,"⊡","\\boxdot",!0);h(m,_,Ee,"△","\\bigtriangleup");h(m,_,Ee,"▽","\\bigtriangledown");h(m,_,Ee,"†","\\dagger");h(m,_,Ee,"⋄","\\diamond");h(m,_,Ee,"⋆","\\star");h(m,_,Ee,"◃","\\triangleleft");h(m,_,Ee,"▹","\\triangleright");h(m,_,yn,"{","\\{");h(ae,_,O,"{","\\{");h(ae,_,O,"{","\\textbraceleft");h(m,_,sn,"}","\\}");h(ae,_,O,"}","\\}");h(ae,_,O,"}","\\textbraceright");h(m,_,yn,"{","\\lbrace");h(m,_,sn,"}","\\rbrace");h(m,_,yn,"[","\\lbrack",!0);h(ae,_,O,"[","\\lbrack",!0);h(m,_,sn,"]","\\rbrack",!0);h(ae,_,O,"]","\\rbrack",!0);h(m,_,yn,"(","\\lparen",!0);h(m,_,sn,")","\\rparen",!0);h(ae,_,O,"<","\\textless",!0);h(ae,_,O,">","\\textgreater",!0);h(m,_,yn,"⌊","\\lfloor",!0);h(m,_,sn,"⌋","\\rfloor",!0);h(m,_,yn,"⌈","\\lceil",!0);h(m,_,sn,"⌉","\\rceil",!0);h(m,_,O,"\\","\\backslash");h(m,_,O,"∣","|");h(m,_,O,"∣","\\vert");h(ae,_,O,"|","\\textbar",!0);h(m,_,O,"∥","\\|");h(m,_,O,"∥","\\Vert");h(ae,_,O,"∥","\\textbardbl");h(ae,_,O,"~","\\textasciitilde");h(ae,_,O,"\\","\\textbackslash");h(ae,_,O,"^","\\textasciicircum");h(m,_,F,"↑","\\uparrow",!0);h(m,_,F,"⇑","\\Uparrow",!0);h(m,_,F,"↓","\\downarrow",!0);h(m,_,F,"⇓","\\Downarrow",!0);h(m,_,F,"↕","\\updownarrow",!0);h(m,_,F,"⇕","\\Updownarrow",!0);h(m,_,Ot,"∐","\\coprod");h(m,_,Ot,"⋁","\\bigvee");h(m,_,Ot,"⋀","\\bigwedge");h(m,_,Ot,"⨄","\\biguplus");h(m,_,Ot,"⋂","\\bigcap");h(m,_,Ot,"⋃","\\bigcup");h(m,_,Ot,"∫","\\int");h(m,_,Ot,"∫","\\intop");h(m,_,Ot,"∬","\\iint");h(m,_,Ot,"∭","\\iiint");h(m,_,Ot,"∏","\\prod");h(m,_,Ot,"∑","\\sum");h(m,_,Ot,"⨂","\\bigotimes");h(m,_,Ot,"⨁","\\bigoplus");h(m,_,Ot,"⨀","\\bigodot");h(m,_,Ot,"∮","\\oint");h(m,_,Ot,"∯","\\oiint");h(m,_,Ot,"∰","\\oiiint");h(m,_,Ot,"⨆","\\bigsqcup");h(m,_,Ot,"∫","\\smallint");h(ae,_,qr,"…","\\textellipsis");h(m,_,qr,"…","\\mathellipsis");h(ae,_,qr,"…","\\ldots",!0);h(m,_,qr,"…","\\ldots",!0);h(m,_,qr,"⋯","\\@cdots",!0);h(m,_,qr,"⋱","\\ddots",!0);h(m,_,O,"⋮","\\varvdots");h(ae,_,O,"⋮","\\varvdots");h(m,_,At,"ˊ","\\acute");h(m,_,At,"ˋ","\\grave");h(m,_,At,"¨","\\ddot");h(m,_,At,"~","\\tilde");h(m,_,At,"ˉ","\\bar");h(m,_,At,"˘","\\breve");h(m,_,At,"ˇ","\\check");h(m,_,At,"^","\\hat");h(m,_,At,"⃗","\\vec");h(m,_,At,"˙","\\dot");h(m,_,At,"˚","\\mathring");h(m,_,ke,"","\\@imath");h(m,_,ke,"","\\@jmath");h(m,_,O,"ı","ı");h(m,_,O,"ȷ","ȷ");h(ae,_,O,"ı","\\i",!0);h(ae,_,O,"ȷ","\\j",!0);h(ae,_,O,"ß","\\ss",!0);h(ae,_,O,"æ","\\ae",!0);h(ae,_,O,"œ","\\oe",!0);h(ae,_,O,"ø","\\o",!0);h(ae,_,O,"Æ","\\AE",!0);h(ae,_,O,"Œ","\\OE",!0);h(ae,_,O,"Ø","\\O",!0);h(ae,_,At,"ˊ","\\'");h(ae,_,At,"ˋ","\\`");h(ae,_,At,"ˆ","\\^");h(ae,_,At,"˜","\\~");h(ae,_,At,"ˉ","\\=");h(ae,_,At,"˘","\\u");h(ae,_,At,"˙","\\.");h(ae,_,At,"¸","\\c");h(ae,_,At,"˚","\\r");h(ae,_,At,"ˇ","\\v");h(ae,_,At,"¨",'\\"');h(ae,_,At,"˝","\\H");h(ae,_,At,"◯","\\textcircled");var Ch={"--":!0,"---":!0,"``":!0,"''":!0};h(ae,_,O,"–","--",!0);h(ae,_,O,"–","\\textendash");h(ae,_,O,"—","---",!0);h(ae,_,O,"—","\\textemdash");h(ae,_,O,"‘","`",!0);h(ae,_,O,"‘","\\textquoteleft");h(ae,_,O,"’","'",!0);h(ae,_,O,"’","\\textquoteright");h(ae,_,O,"“","``",!0);h(ae,_,O,"“","\\textquotedblleft");h(ae,_,O,"”","''",!0);h(ae,_,O,"”","\\textquotedblright");h(m,_,O,"°","\\degree",!0);h(ae,_,O,"°","\\degree");h(ae,_,O,"°","\\textdegree",!0);h(m,_,O,"£","\\pounds");h(m,_,O,"£","\\mathsterling",!0);h(ae,_,O,"£","\\pounds");h(ae,_,O,"£","\\textsterling",!0);h(m,U,O,"✠","\\maltese");h(ae,U,O,"✠","\\maltese");var Qc='0123456789/@."';for(var Co=0;Co<Qc.length;Co++){var eu=Qc.charAt(Co);h(m,_,O,eu,eu)}var tu='0123456789!@*()-=+";:?/.,';for(var Do=0;Do<tu.length;Do++){var nu=tu.charAt(Do);h(ae,_,O,nu,nu)}var ys="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Po=0;Po<ys.length;Po++){var Qa=ys.charAt(Po);h(m,_,ke,Qa,Qa),h(ae,_,O,Qa,Qa)}h(m,U,O,"C","ℂ");h(ae,U,O,"C","ℂ");h(m,U,O,"H","ℍ");h(ae,U,O,"H","ℍ");h(m,U,O,"N","ℕ");h(ae,U,O,"N","ℕ");h(m,U,O,"P","ℙ");h(ae,U,O,"P","ℙ");h(m,U,O,"Q","ℚ");h(ae,U,O,"Q","ℚ");h(m,U,O,"R","ℝ");h(ae,U,O,"R","ℝ");h(m,U,O,"Z","ℤ");h(ae,U,O,"Z","ℤ");h(m,_,ke,"h","ℎ");h(ae,_,ke,"h","ℎ");var Ye;for(var Qt=0;Qt<ys.length;Qt++){var Ut=ys.charAt(Qt);Ye=String.fromCharCode(55349,56320+Qt),h(m,_,ke,Ut,Ye),h(ae,_,O,Ut,Ye),Ye=String.fromCharCode(55349,56372+Qt),h(m,_,ke,Ut,Ye),h(ae,_,O,Ut,Ye),Ye=String.fromCharCode(55349,56424+Qt),h(m,_,ke,Ut,Ye),h(ae,_,O,Ut,Ye),Ye=String.fromCharCode(55349,56580+Qt),h(m,_,ke,Ut,Ye),h(ae,_,O,Ut,Ye),Ye=String.fromCharCode(55349,56684+Qt),h(m,_,ke,Ut,Ye),h(ae,_,O,Ut,Ye),Ye=String.fromCharCode(55349,56736+Qt),h(m,_,ke,Ut,Ye),h(ae,_,O,Ut,Ye),Ye=String.fromCharCode(55349,56788+Qt),h(m,_,ke,Ut,Ye),h(ae,_,O,Ut,Ye),Ye=String.fromCharCode(55349,56840+Qt),h(m,_,ke,Ut,Ye),h(ae,_,O,Ut,Ye),Ye=String.fromCharCode(55349,56944+Qt),h(m,_,ke,Ut,Ye),h(ae,_,O,Ut,Ye),Qt<26&&(Ye=String.fromCharCode(55349,56632+Qt),h(m,_,ke,Ut,Ye),h(ae,_,O,Ut,Ye),Ye=String.fromCharCode(55349,56476+Qt),h(m,_,ke,Ut,Ye),h(ae,_,O,Ut,Ye))}Ye="𝕜";h(m,_,ke,"k",Ye);h(ae,_,O,"k",Ye);for(var qi=0;qi<10;qi++){var Si=qi.toString();Ye=String.fromCharCode(55349,57294+qi),h(m,_,ke,Si,Ye),h(ae,_,O,Si,Ye),Ye=String.fromCharCode(55349,57314+qi),h(m,_,ke,Si,Ye),h(ae,_,O,Si,Ye),Ye=String.fromCharCode(55349,57324+qi),h(m,_,ke,Si,Ye),h(ae,_,O,Si,Ye),Ye=String.fromCharCode(55349,57334+qi),h(m,_,ke,Si,Ye),h(ae,_,O,Si,Ye)}var H0="ÐÞþ";for(var Io=0;Io<H0.length;Io++){var es=H0.charAt(Io);h(m,_,ke,es,es),h(ae,_,O,es,es)}var G0={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},iu={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},ru={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},nv={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},ji={mathClass:"",textClass:"",font:""},au={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},su={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},ou={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},V0={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},W0={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},lu={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},q0={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},cu=[G0,G0,iu,iu,ru,ru,nv,ji,ji,ji,au,au,su,su,ou,ou,V0,V0,W0,W0,lu,lu,ji,ji,q0,q0],iv=[G0,ji,V0,W0,q0],rv=i=>{var e=i.charCodeAt(0),t=i.charCodeAt(1),n=(e-55296)*1024+(t-56320)+65536;if(119808<=n&&n<120484){var r=Math.floor((n-119808)/26);return cu[r]}else if(120782<=n&&n<=120831){var a=Math.floor((n-120782)/10);return iv[a]}else{if(n===120485||n===120486)return cu[0];if(120486<n&&n<120782)return ji;throw new ce("Unsupported character: "+i)}},Ds=function(e,t,n){if(Tt[n][e]){var r=Tt[n][e].replace;r&&(e=r)}return{value:e,metrics:bl(e,t,n)}},tn=function(e,t,n,r,a){var s=Ds(e,t,n),o=s.metrics;e=s.value;var l;if(o){var c=o.italic;(n==="text"||r&&r.font==="mathit")&&(c=0),l=new _n(e,o.height,o.depth,c,o.skew,o.width,a)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+e+"' in style '"+t+"' and mode '"+n+"'")),l=new _n(e,0,0,0,0,0,a);if(r){l.maxFontSize=r.sizeMultiplier,r.style.isTight()&&l.classes.push("mtight");var u=r.getColor();u&&(l.style.color=u)}return l},Ml=function(e,t,n,r){return r===void 0&&(r=[]),n.font==="boldsymbol"&&Ds(e,"Main-Bold",t).metrics?tn(e,"Main-Bold",t,n,r.concat(["mathbf"])):e==="\\"||Tt[t][e].font==="main"?tn(e,"Main-Regular",t,n,r):tn(e,"AMS-Regular",t,n,r.concat(["amsrm"]))},av=function(e,t,n){return n!=="textord"&&Ds(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Ps=function(e,t,n){var r=e.mode,a=e.text,s=["mord"],{font:o,fontFamily:l,fontWeight:c,fontShape:u}=t,d=r==="math"||r==="text"&&!!o,p=d?o:l,g="",x="";if(a.charCodeAt(0)===55349){var b=rv(a);g=b.font,x=b[r+"Class"]}if(g)return tn(a,g,r,t,s.concat(x));if(p){var v,f;if(p==="boldsymbol"){var A=av(a,r,n);v=A.fontName,f=[A.fontClass]}else d?(v=X0[o].fontName,f=[o]):(v=ts(l,c,u),f=[l,c,u]);if(Ds(a,v,r).metrics)return tn(a,v,r,t,s.concat(f));if(Ch.hasOwnProperty(a)&&v.slice(0,10)==="Typewriter"){for(var R=[],w=0;w<a.length;w++)R.push(tn(a[w],v,r,t,s.concat(f)));return fi(R)}}if(n==="mathord")return tn(a,"Math-Italic",r,t,s.concat(["mathnormal"]));if(n==="textord"){var P=Tt[r][a]&&Tt[r][a].font;if(P==="ams"){var L=ts("amsrm",c,u);return tn(a,L,r,t,s.concat("amsrm",c,u))}else if(P==="main"||!P){var N=ts("textrm",c,u);return tn(a,N,r,t,s.concat(c,u))}else{var D=ts(P,c,u);return tn(a,D,r,t,s.concat(D,c,u))}}else throw new Error("unexpected type: "+n+" in makeOrd")},sv=(i,e)=>{if(Di(i.classes)!==Di(e.classes)||i.skew!==e.skew||i.maxFontSize!==e.maxFontSize||i.italic!==0&&i.hasClass("mathnormal"))return!1;if(i.classes.length===1){var t=i.classes[0];if(t==="mbin"||t==="mord")return!1}for(var n of Object.keys(i.style))if(i.style[n]!==e.style[n])return!1;for(var r of Object.keys(e.style))if(i.style[r]!==e.style[r])return!1;return!0},Dh=i=>{for(var e=0;e<i.length-1;e++){var t=i[e],n=i[e+1];t instanceof _n&&n instanceof _n&&sv(t,n)&&(t.text+=n.text,t.height=Math.max(t.height,n.height),t.depth=Math.max(t.depth,n.depth),t.italic=n.italic,i.splice(e+1,1),e--)}return i},Sl=function(e){for(var t=0,n=0,r=0,a=0;a<e.children.length;a++){var s=e.children[a];s.height>t&&(t=s.height),s.depth>n&&(n=s.depth),s.maxFontSize>r&&(r=s.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=r},oe=function(e,t,n,r){var a=new Wr(e,t,n,r);return Sl(a),a},Ii=(i,e,t,n)=>new Wr(i,e,t,n),zr=function(e,t,n){var r=oe([e],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=ge(r.height),r.maxFontSize=1,r},ov=function(e,t,n,r){var a=new Cs(e,t,n,r);return Sl(a),a},fi=function(e){var t=new Vr(e);return Sl(t),t},Br=function(e,t){return e instanceof Vr?oe([],[e],t):e},lv=function(e){if(e.positionType==="individualShift"){for(var t=e.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,a=r,s=1;s<t.length;s++){var o=-t[s].shift-a-t[s].elem.depth,l=o-(t[s-1].elem.height+t[s-1].elem.depth);a=a+o,n.push({type:"kern",size:l}),n.push(t[s])}return{children:n,depth:r}}var c;if(e.positionType==="top"){for(var u=e.positionData,d=0;d<e.children.length;d++){var p=e.children[d];u-=p.type==="kern"?p.size:p.elem.height+p.elem.depth}c=u}else if(e.positionType==="bottom")c=-e.positionData;else{var g=e.children[0];if(g.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")c=-g.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")c=-g.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:c}},dt=function(e,t){for(var{children:n,depth:r}=lv(e),a=0,s=0;s<n.length;s++){var o=n[s];if(o.type==="elem"){var l=o.elem;a=Math.max(a,l.maxFontSize,l.height)}}a+=2;var c=oe(["pstrut"],[]);c.style.height=ge(a);for(var u=[],d=r,p=r,g=r,x=0;x<n.length;x++){var b=n[x];if(b.type==="kern")g+=b.size;else{var v=b.elem,f=b.wrapperClasses||[],A=b.wrapperStyle||{},R=oe(f,[c,v],void 0,A);R.style.top=ge(-a-g-v.depth),b.marginLeft&&(R.style.marginLeft=b.marginLeft),b.marginRight&&(R.style.marginRight=b.marginRight),u.push(R),g+=v.height+v.depth}d=Math.min(d,g),p=Math.max(p,g)}var w=oe(["vlist"],u);w.style.height=ge(p);var P;if(d<0){var L=oe([],[]),N=oe(["vlist"],[L]);N.style.height=ge(-d);var D=oe(["vlist-s"],[new _n("​")]);P=[oe(["vlist-r"],[w,D]),oe(["vlist-r"],[N])]}else P=[oe(["vlist-r"],[w])];var y=oe(["vlist-t"],P);return P.length===2&&y.classes.push("vlist-t2"),y.height=p,y.depth=-d,y},Ph=(i,e)=>{var t=oe(["mspace"],[],e),n=It(i,e);return t.style.marginRight=ge(n),t},ts=(i,e,t)=>{var n,r;switch(i){case"amsrm":n="AMS";break;case"textrm":n="Main";break;case"textsf":n="SansSerif";break;case"texttt":n="Typewriter";break;default:n=i}return e==="textbf"&&t==="textit"?r="BoldItalic":e==="textbf"?r="Bold":t==="textit"?r="Italic":r="Regular",n+"-"+r},X0={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Ih={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Lh=function(e,t){var[n,r,a]=Ih[e],s=new Pi(n),o=new ui([s],{width:ge(r),height:ge(a),style:"width:"+ge(r),viewBox:"0 0 "+1e3*r+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),l=Ii(["overlay"],[o],t);return l.height=a,l.style.height=ge(a),l.style.width=ge(r),l},Pt={number:3,unit:"mu"},Xi={number:4,unit:"mu"},ei={number:5,unit:"mu"},cv={mord:{mop:Pt,mbin:Xi,mrel:ei,minner:Pt},mop:{mord:Pt,mop:Pt,mrel:ei,minner:Pt},mbin:{mord:Xi,mop:Xi,mopen:Xi,minner:Xi},mrel:{mord:ei,mop:ei,mopen:ei,minner:ei},mopen:{},mclose:{mop:Pt,mbin:Xi,mrel:ei,minner:Pt},mpunct:{mord:Pt,mop:Pt,mrel:ei,mopen:Pt,mclose:Pt,mpunct:Pt,minner:Pt},minner:{mord:Pt,mop:Pt,mbin:Xi,mrel:ei,mopen:Pt,mpunct:Pt,minner:Pt}},uv={mord:{mop:Pt},mop:{mord:Pt,mop:Pt},mbin:{},mrel:{},mopen:{},mclose:{mop:Pt},mpunct:{},minner:{mop:Pt}},Uh={},bs={},Ms={};function Se(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:a,mathmlBuilder:s}=i,o={type:e,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:r},l=0;l<t.length;++l)Uh[t[l]]=o;e&&(a&&(bs[e]=a),s&&(Ms[e]=s))}function ir(i){var{type:e,htmlBuilder:t,mathmlBuilder:n}=i;Se({type:e,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:t,mathmlBuilder:n})}var Ss=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},zt=function(e){return e.type==="ordgroup"?e.body:[e]},hv=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),dv=new Set(["rightmost","mrel","mclose","mpunct"]),fv={display:je.DISPLAY,text:je.TEXT,script:je.SCRIPT,scriptscript:je.SCRIPTSCRIPT},pv={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Wt=function(e,t,n,r){r===void 0&&(r=[null,null]);for(var a=[],s=0;s<e.length;s++){var o=ft(e[s],t);if(o instanceof Vr){var l=o.children;a.push(...l)}else a.push(o)}if(Dh(a),!n)return a;var c=t;if(e.length===1){var u=e[0];u.type==="sizing"?c=t.havingSize(u.size):u.type==="styling"&&(c=t.havingStyle(fv[u.style]))}var d=oe([r[0]||"leftmost"],[],t),p=oe([r[1]||"rightmost"],[],t),g=n==="root";return Y0(a,(x,b)=>{var v=b.classes[0],f=x.classes[0];v==="mbin"&&dv.has(f)?b.classes[0]="mord":f==="mbin"&&hv.has(v)&&(x.classes[0]="mord")},{node:d},p,g),Y0(a,(x,b)=>{var v,f,A=K0(b),R=K0(x),w=A&&R?x.hasClass("mtight")?(v=uv[A])==null?void 0:v[R]:(f=cv[A])==null?void 0:f[R]:null;if(w)return Ph(w,c)},{node:d},p,g),a},Y0=function(e,t,n,r,a){r&&e.push(r);for(var s=0;s<e.length;s++){var o=e[s],l=Nh(o);if(l){Y0(l.children,t,n,null,a);continue}var c=!o.hasClass("mspace");if(c){var u=t(o,n.node);u&&(n.insertAfter?n.insertAfter(u):(e.unshift(u),s++))}c?n.node=o:a&&o.hasClass("newline")&&(n.node=oe(["leftmost"])),n.insertAfter=(d=>p=>{e.splice(d+1,0,p),s++})(s)}r&&e.pop()},Nh=function(e){return e instanceof Vr||e instanceof Cs||e instanceof Wr&&e.hasClass("enclosing")?e:null},$0=function(e,t){var n=Nh(e);if(n){var r=n.children;if(r.length){if(t==="right")return $0(r[r.length-1],"right");if(t==="left")return $0(r[0],"left")}}return e},K0=function(e,t){if(!e)return null;t&&(e=$0(e,t));var n=e.classes[0];return pv[n]||null},fa=function(e,t){var n=["nulldelimiter"].concat(e.baseSizingClasses());return oe(t.concat(n))},ft=function(e,t,n){if(!e)return oe();if(bs[e.type]){var r=bs[e.type](e,t);if(n&&t.size!==n.size){r=oe(t.sizingClasses(n),[r],t);var a=t.sizeMultiplier/n.sizeMultiplier;r.height*=a,r.depth*=a}return r}else throw new ce("Got group of unknown type: '"+e.type+"'")};function ns(i,e){var t=oe(["base"],i,e),n=oe(["strut"]);return n.style.height=ge(t.height+t.depth),t.depth&&(n.style.verticalAlign=ge(-t.depth)),t.children.unshift(n),t}function Z0(i,e){var t=null;i.length===1&&i[0].type==="tag"&&(t=i[0].tag,i=i[0].body);var n=Wt(i,e,"root"),r;n.length===2&&n[1].hasClass("tag")&&(r=n.pop());for(var a=[],s=[],o=0;o<n.length;o++)if(s.push(n[o]),n[o].hasClass("mbin")||n[o].hasClass("mrel")||n[o].hasClass("allowbreak")){for(var l=!1;o<n.length-1&&n[o+1].hasClass("mspace")&&!n[o+1].hasClass("newline");)o++,s.push(n[o]),n[o].hasClass("nobreak")&&(l=!0);l||(a.push(ns(s,e)),s=[])}else n[o].hasClass("newline")&&(s.pop(),s.length>0&&(a.push(ns(s,e)),s=[]),a.push(n[o]));s.length>0&&a.push(ns(s,e));var c;t?(c=ns(Wt(t,e,!0),e),c.classes=["tag"],a.push(c)):r&&a.push(r);var u=oe(["katex-html"],a);if(u.setAttribute("aria-hidden","true"),c){var d=c.children[0];d.style.height=ge(u.height+u.depth),u.depth&&(d.style.verticalAlign=ge(-u.depth))}return u}function Fh(i){return new Vr(i)}class ue{constructor(e,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Di(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof Bt&&this.children[n+1]instanceof Bt){for(var r=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof Bt;)r+=this.children[++n].toText();e.appendChild(new Bt(r).toNode())}else e.appendChild(this.children[n].toNode());return e}toMarkup(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=Zt(this.attributes[t]),e+='"');this.classes.length>0&&(e+=' class ="'+Zt(Di(this.classes))+'"'),e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}class Bt{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return Zt(this.toText())}toText(){return this.text}}class zh{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",ge(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+ge(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var mv=new Set(["\\imath","\\jmath"]),gv=new Set(["mrow","mtable"]),Cn=function(e,t,n){return Tt[t][e]&&Tt[t][e].replace&&e.charCodeAt(0)!==55349&&!(Ch.hasOwnProperty(e)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(e=Tt[t][e].replace),new Bt(e)},wl=function(e){return e.length===1?e[0]:new ue("mrow",e)},vv={mathit:"italic",boldsymbol:i=>i.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},El=(i,e)=>{if(i.mode==="text"){if(e.fontFamily==="texttt")return"monospace";if(e.fontFamily==="textsf")return e.fontShape==="textit"&&e.fontWeight==="textbf"?"sans-serif-bold-italic":e.fontShape==="textit"?"sans-serif-italic":e.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(e.fontShape==="textit"&&e.fontWeight==="textbf")return"bold-italic";if(e.fontShape==="textit")return"italic";if(e.fontWeight==="textbf")return"bold"}var t=e.font;if(!t||t==="mathnormal")return null;var n=i.mode,r=vv[t];if(r)return typeof r=="function"?r(i):r;var a=i.text;if(mv.has(a))return null;if(Tt[n][a]){var s=Tt[n][a].replace;s&&(a=s)}var o=X0[t].fontName;return bl(a,o,n)?X0[t].variant:null};function Lo(i){if(!i)return!1;if(i.type==="mi"&&i.children.length===1){var e=i.children[0];return e instanceof Bt&&e.text==="."}else if(i.type==="mo"&&i.children.length===1&&i.getAttribute("separator")==="true"&&i.getAttribute("lspace")==="0em"&&i.getAttribute("rspace")==="0em"){var t=i.children[0];return t instanceof Bt&&t.text===","}else return!1}var bn=function(e,t,n){if(e.length===1){var r=Mt(e[0],t);return n&&r instanceof ue&&r.type==="mo"&&(r.setAttribute("lspace","0em"),r.setAttribute("rspace","0em")),[r]}for(var a=[],s,o=0;o<e.length;o++){var l=Mt(e[o],t);if(l instanceof ue&&s instanceof ue){if(l.type==="mtext"&&s.type==="mtext"&&l.getAttribute("mathvariant")===s.getAttribute("mathvariant")){s.children.push(...l.children);continue}else if(l.type==="mn"&&s.type==="mn"){s.children.push(...l.children);continue}else if(Lo(l)&&s.type==="mn"){s.children.push(...l.children);continue}else if(l.type==="mn"&&Lo(s))l.children=[...s.children,...l.children],a.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(s.type==="mn"||Lo(s))){var c=l.children[0];c instanceof ue&&c.type==="mn"&&(c.children=[...s.children,...c.children],a.pop())}else if(s.type==="mi"&&s.children.length===1){var u=s.children[0];if(u instanceof Bt&&u.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var d=l.children[0];d instanceof Bt&&d.text.length>0&&(d.text=d.text.slice(0,1)+"̸"+d.text.slice(1),a.pop())}}}a.push(l),s=l}return a},Li=function(e,t,n){return wl(bn(e,t,n))},Mt=function(e,t){if(!e)return new ue("mrow");if(Ms[e.type])return Ms[e.type](e,t);throw new ce("Got group of unknown type: '"+e.type+"'")};function uu(i,e,t,n,r){var a=bn(i,t),s;a.length===1&&a[0]instanceof ue&&gv.has(a[0].type)?s=a[0]:s=new ue("mrow",a);var o=new ue("annotation",[new Bt(e)]);o.setAttribute("encoding","application/x-tex");var l=new ue("semantics",[s,o]),c=new ue("math",[l]);c.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&c.setAttribute("display","block");var u=r?"katex":"katex-mathml";return oe([u],[c])}var xv=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],hu=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],du=function(e,t){return t.size<2?e:xv[e-1][t.size-1]};class ii{constructor(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=e.style,this.color=e.color,this.size=e.size||ii.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=hu[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this._fontMetrics=void 0}extend(e){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(t,e),new ii(t)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:du(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:hu[e-1]})}havingBaseStyle(e){e=e||this.style.text();var t=du(ii.BASESIZE,e);return this.size===t&&this.textSize===ii.BASESIZE&&this.style===e?this:this.extend({style:e,size:t})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==ii.BASESIZE?["sizing","reset-size"+this.size,"size"+ii.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=tv(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}ii.BASESIZE=6;var Bh=function(e){return new ii({style:e.displayMode?je.DISPLAY:je.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},Oh=function(e,t){if(t.displayMode){var n=["katex-display"];t.leqno&&n.push("leqno"),t.fleqn&&n.push("fleqn"),e=oe(n,[e])}return e},_v=function(e,t,n){var r=Bh(n),a;if(n.output==="mathml")return uu(e,t,r,n.displayMode,!0);if(n.output==="html"){var s=Z0(e,r);a=oe(["katex"],[s])}else{var o=uu(e,t,r,n.displayMode,!1),l=Z0(e,r);a=oe(["katex"],[o,l])}return Oh(a,n)},yv=function(e,t,n){var r=Bh(n),a=Z0(e,r),s=oe(["katex"],[a]);return Oh(s,n)},bv={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Is=function(e){var t=new ue("mo",[new Bt(bv[e.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},Mv={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},Sv=new Set(["widehat","widecheck","widetilde","utilde"]),Ls=function(e,t){function n(){var o=4e5,l=e.label.slice(1);if(Sv.has(l)&&"base"in e){var c=e.base.type==="ordgroup"?e.base.body.length:1,u,d,p;if(c>5)l==="widehat"||l==="widecheck"?(u=420,o=2364,p=.42,d=l+"4"):(u=312,o=2340,p=.34,d="tilde4");else{var g=[1,1,2,2,3,3][c];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][g],u=[0,239,300,360,420][g],p=[0,.24,.3,.3,.36,.42][g],d=l+g):(o=[0,600,1033,2339,2340][g],u=[0,260,286,306,312][g],p=[0,.26,.286,.3,.306,.34][g],d="tilde"+g)}var x=new Pi(d),b=new ui([x],{width:"100%",height:ge(p),viewBox:"0 0 "+o+" "+u,preserveAspectRatio:"none"});return{span:Ii([],[b],t),minWidth:0,height:p}}else{var v=[],f=Mv[l];if(!f)throw new Error('No SVG data for "'+l+'".');var[A,R,w]=f,P=w/1e3,L=A.length,N,D;if(L===1){if(f.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+l+'".');N=["hide-tail"],D=[f[3]]}else if(L===2)N=["halfarrow-left","halfarrow-right"],D=["xMinYMin","xMaxYMin"];else if(L===3)N=["brace-left","brace-center","brace-right"],D=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+L+" children.");for(var y=0;y<L;y++){var M=new Pi(A[y]),C=new ui([M],{width:"400em",height:ge(P),viewBox:"0 0 "+o+" "+w,preserveAspectRatio:D[y]+" slice"}),z=Ii([N[y]],[C],t);if(L===1)return{span:z,minWidth:R,height:P};z.style.height=ge(P),v.push(z)}return{span:oe(["stretchy"],v,t),minWidth:R,height:P}}}var{span:r,minWidth:a,height:s}=n();return r.height=s,r.style.height=ge(s),a>0&&(r.style.minWidth=ge(a)),r},wv=function(e,t,n,r,a){var s,o=e.height+e.depth+n+r;if(/fbox|color|angl/.test(t)){if(s=oe(["stretchy",t],[],a),t==="fbox"){var l=a.color&&a.getColor();l&&(s.style.borderColor=l)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new k0({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&c.push(new k0({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var u=new ui(c,{width:"100%",height:ge(o)});s=Ii([],[u],a)}return s.height=o,s.style.height=ge(o),s},Ev={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Tv={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function Av(i){return i in Ev}function rt(i,e){if(!i||i.type!==e)throw new Error("Expected node of type "+e+", but got "+(i?"node of type "+i.type:String(i)));return i}function Us(i){var e=Ns(i);if(!e)throw new Error("Expected node of symbol group type, but got "+(i?"node of type "+i.type:String(i)));return e}function Ns(i){return i&&(i.type==="atom"||Tv.hasOwnProperty(i.type))?i:null}var kh=i=>{if(i instanceof _n)return i;if(Qg(i)&&i.children.length===1)return kh(i.children[0])},Tl=(i,e)=>{var t,n,r;i&&i.type==="supsub"?(n=rt(i.base,"accent"),t=n.base,i.base=t,r=Jg(ft(i,e)),i.base=n):(n=rt(i,"accent"),t=n.base);var a=ft(t,e.havingCrampedStyle()),s=n.isShifty&&hi(t),o=0;if(s){var l,c;o=(l=(c=kh(a))==null?void 0:c.skew)!=null?l:0}var u=n.label==="\\c",d=u?a.height+a.depth:Math.min(a.height,e.fontMetrics().xHeight),p;if(n.isStretchy)p=Ls(n,e),p=dt({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"elem",elem:p,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+ge(2*o)+")",marginLeft:ge(2*o)}:void 0}]});else{var g,x;n.label==="\\vec"?(g=Lh("vec",e),x=Ih.vec[1]):(g=Ps({mode:n.mode,text:n.label},e,"textord"),g=jg(g),g.italic=0,x=g.width,u&&(d+=g.depth)),p=oe(["accent-body"],[g]);var b=n.label==="\\textcircled";b&&(p.classes.push("accent-full"),d=a.height);var v=o;b||(v-=x/2),p.style.left=ge(v),n.label==="\\textcircled"&&(p.style.top=".2em"),p=dt({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:-d},{type:"elem",elem:p}]})}var f=oe(["mord","accent"],[p],e);return r?(r.children[0]=f,r.height=Math.max(f.height,r.height),r.classes[0]="mord",r):f},Hh=(i,e)=>{var t=i.isStretchy?Is(i.label):new ue("mo",[Cn(i.label,i.mode)]),n=new ue("mover",[Mt(i.base,e),t]);return n.setAttribute("accent","true"),n},Rv=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(i=>"\\"+i).join("|"));Se({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(i,e)=>{var t=Ss(e[0]),n=!Rv.test(i.funcName),r=!n||i.funcName==="\\widehat"||i.funcName==="\\widetilde"||i.funcName==="\\widecheck";return{type:"accent",mode:i.parser.mode,label:i.funcName,isStretchy:n,isShifty:r,base:t}},htmlBuilder:Tl,mathmlBuilder:Hh});Se({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(i,e)=>{var t=e[0],n=i.parser.mode;return n==="math"&&(i.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+i.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:i.funcName,isStretchy:!1,isShifty:!0,base:t}},htmlBuilder:Tl,mathmlBuilder:Hh});Se({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"accentUnder",mode:t.mode,label:n,base:r}},htmlBuilder:(i,e)=>{var t=ft(i.base,e),n=Ls(i,e),r=i.label==="\\utilde"?.12:0,a=dt({positionType:"top",positionData:t.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:r},{type:"elem",elem:t}]});return oe(["mord","accentunder"],[a],e)},mathmlBuilder:(i,e)=>{var t=Is(i.label),n=new ue("munder",[Mt(i.base,e),t]);return n.setAttribute("accentunder","true"),n}});var is=i=>{var e=new ue("mpadded",i?[i]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};Se({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n,funcName:r}=i;return{type:"xArrow",mode:n.mode,label:r,body:e[0],below:t[0]}},htmlBuilder(i,e){var t=e.style,n=e.havingStyle(t.sup()),r=Br(ft(i.body,n,e),e),a=i.label.slice(0,2)==="\\x"?"x":"cd";r.classes.push(a+"-arrow-pad");var s;i.below&&(n=e.havingStyle(t.sub()),s=Br(ft(i.below,n,e),e),s.classes.push(a+"-arrow-pad"));var o=Ls(i,e),l=-e.fontMetrics().axisHeight+.5*o.height,c=-e.fontMetrics().axisHeight-.5*o.height-.111;(r.depth>.25||i.label==="\\xleftequilibrium")&&(c-=r.depth);var u;if(s){var d=-e.fontMetrics().axisHeight+s.height+.5*o.height+.111;u=dt({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]},{type:"elem",elem:s,shift:d}]})}else u=dt({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]}]});return oe(["mrel","x-arrow"],[u],e)},mathmlBuilder(i,e){var t=Is(i.label);t.setAttribute("minsize",i.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(i.body){var r=is(Mt(i.body,e));if(i.below){var a=is(Mt(i.below,e));n=new ue("munderover",[t,a,r])}else n=new ue("mover",[t,r])}else if(i.below){var s=is(Mt(i.below,e));n=new ue("munder",[t,s])}else n=is(),n=new ue("mover",[t,n]);return n}});function Gh(i,e){var t=Wt(i.body,e,!0);return oe([i.mclass],t,e)}function Vh(i,e){var t,n=bn(i.body,e);return i.mclass==="minner"?t=new ue("mpadded",n):i.mclass==="mord"?i.isCharacterBox?(t=n[0],t.type="mi"):t=new ue("mi",n):(i.isCharacterBox?(t=n[0],t.type="mo"):t=new ue("mo",n),i.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):i.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):i.mclass==="mopen"||i.mclass==="mclose"?(t.attributes.lspace="0em",t.attributes.rspace="0em"):i.mclass==="minner"&&(t.attributes.lspace="0.0556em",t.attributes.width="+0.1111em")),t}Se({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"mclass",mode:t.mode,mclass:"m"+n.slice(5),body:zt(r),isCharacterBox:hi(r)}},htmlBuilder:Gh,mathmlBuilder:Vh});var Fs=i=>{var e=i.type==="ordgroup"&&i.body.length?i.body[0]:i;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};Se({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(i,e){var{parser:t}=i;return{type:"mclass",mode:t.mode,mclass:Fs(e[0]),body:zt(e[1]),isCharacterBox:hi(e[1])}}});Se({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(i,e){var{parser:t,funcName:n}=i,r=e[1],a=e[0],s;n!=="\\stackrel"?s=Fs(r):s="mrel";var o={type:"op",mode:r.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:zt(r)},l={type:"supsub",mode:a.mode,base:o,sup:n==="\\underset"?null:a,sub:n==="\\underset"?a:null};return{type:"mclass",mode:t.mode,mclass:s,body:[l],isCharacterBox:hi(l)}},htmlBuilder:Gh,mathmlBuilder:Vh});Se({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"pmb",mode:t.mode,mclass:Fs(e[0]),body:zt(e[0])}},htmlBuilder(i,e){var t=Wt(i.body,e,!0),n=oe([i.mclass],t,e);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(i,e){var t=bn(i.body,e),n=new ue("mstyle",t);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var Cv={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},fu=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),pu=i=>i.type==="textord"&&i.text==="@",Dv=(i,e)=>(i.type==="mathord"||i.type==="atom")&&i.text===e;function Pv(i,e,t){var n=Cv[i];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(n,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var r=t.callFunction("\\\\cdleft",[e[0]],[]),a={type:"atom",text:n,mode:"math",family:"rel"},s=t.callFunction("\\Big",[a],[]),o=t.callFunction("\\\\cdright",[e[1]],[]),l={type:"ordgroup",mode:"math",body:[r,s,o]};return t.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var c={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[c],[])}default:return{type:"textord",text:" ",mode:"math"}}}function Iv(i){var e=[];for(i.gullet.beginGroup(),i.gullet.macros.set("\\cr","\\\\\\relax"),i.gullet.beginGroup();;){e.push(i.parseExpression(!1,"\\\\")),i.gullet.endGroup(),i.gullet.beginGroup();var t=i.fetch().text;if(t==="&"||t==="\\\\")i.consume();else if(t==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new ce("Expected \\\\ or \\cr or \\end",i.nextToken)}for(var n=[],r=[n],a=0;a<e.length;a++){for(var s=e[a],o=fu(),l=0;l<s.length;l++)if(!pu(s[l]))o.body.push(s[l]);else{n.push(o),l+=1;var c=Us(s[l]).text,u=new Array(2);if(u[0]={type:"ordgroup",mode:"math",body:[]},u[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(c))if("<>AV".includes(c))for(var d=0;d<2;d++){for(var p=!0,g=l+1;g<s.length;g++){if(Dv(s[g],c)){p=!1,l=g;break}if(pu(s[g]))throw new ce("Missing a "+c+" character to complete a CD arrow.",s[g]);u[d].body.push(s[g])}if(p)throw new ce("Missing a "+c+" character to complete a CD arrow.",s[l])}else throw new ce('Expected one of "<>AV=|." after @',s[l]);var x=Pv(c,u,i),b={type:"styling",body:[x],mode:"math",style:"display",resetFont:!0};n.push(b),o=fu()}a%2===0?n.push(o):n.shift(),n=[],r.push(n)}i.gullet.endGroup(),i.gullet.endGroup();var v=new Array(r[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:r,arraystretch:1,addJot:!0,rowGaps:[null],cols:v,colSeparationType:"CD",hLinesBeforeRow:new Array(r.length+1).fill([])}}Se({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"cdlabel",mode:t.mode,side:n.slice(4),label:e[0]}},htmlBuilder(i,e){var t=e.havingStyle(e.style.sup()),n=Br(ft(i.label,t,e),e);return n.classes.push("cd-label-"+i.side),n.style.bottom=ge(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(i,e){var t=new ue("mrow",[Mt(i.label,e)]);return t=new ue("mpadded",[t]),t.setAttribute("width","0"),i.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new ue("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});Se({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(i,e){var{parser:t}=i;return{type:"cdlabelparent",mode:t.mode,fragment:e[0]}},htmlBuilder(i,e){var t=Br(ft(i.fragment,e),e);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(i,e){return new ue("mrow",[Mt(i.fragment,e)])}});Se({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(i,e){for(var{parser:t}=i,n=rt(e[0],"ordgroup"),r=n.body,a="",s=0;s<r.length;s++){var o=rt(r[s],"textord");a+=o.text}var l=parseInt(a),c;if(isNaN(l))throw new ce("\\@char has non-numeric argument "+a);if(l<0||l>=1114111)throw new ce("\\@char with invalid code point "+a);return l<=65535?c=String.fromCharCode(l):(l-=65536,c=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:t.mode,text:c}}});var Wh=(i,e)=>{var t=Wt(i.body,e.withColor(i.color),!1);return fi(t)},qh=(i,e)=>{var t=bn(i.body,e.withColor(i.color)),n=new ue("mstyle",t);return n.setAttribute("mathcolor",i.color),n};Se({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(i,e){var{parser:t}=i,n=rt(e[0],"color-token").color,r=e[1];return{type:"color",mode:t.mode,color:n,body:zt(r)}},htmlBuilder:Wh,mathmlBuilder:qh});Se({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(i,e){var{parser:t,breakOnTokenText:n}=i,r=rt(e[0],"color-token").color;t.gullet.macros.set("\\current@color",r);var a=t.parseExpression(!0,n);return{type:"color",mode:t.mode,color:r,body:a}},htmlBuilder:Wh,mathmlBuilder:qh});Se({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(i,e,t){var{parser:n}=i,r=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,a=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:a,size:r&&rt(r,"size").value}},htmlBuilder(i,e){var t=oe(["mspace"],[],e);return i.newLine&&(t.classes.push("newline"),i.size&&(t.style.marginTop=ge(It(i.size,e)))),t},mathmlBuilder(i,e){var t=new ue("mspace");return i.newLine&&(t.setAttribute("linebreak","newline"),i.size&&t.setAttribute("height",ge(It(i.size,e)))),t}});var j0={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Xh=i=>{var e=i.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new ce("Expected a control sequence",i);return e},Lv=i=>{var e=i.gullet.popToken();return e.text==="="&&(e=i.gullet.popToken(),e.text===" "&&(e=i.gullet.popToken())),e},Yh=(i,e,t,n)=>{var r=i.gullet.macros.get(t.text);r==null&&(t.noexpand=!0,r={tokens:[t],numArgs:0,unexpandable:!i.gullet.isExpandable(t.text)}),i.gullet.macros.set(e,r,n)};Se({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(i){var{parser:e,funcName:t}=i;e.consumeSpaces();var n=e.fetch();if(j0[n.text])return(t==="\\global"||t==="\\\\globallong")&&(n.text=j0[n.text]),rt(e.parseFunction(),"internal");throw new ce("Invalid token after macro prefix",n)}});Se({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=e.gullet.popToken(),r=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(r))throw new ce("Expected a control sequence",n);for(var a=0,s,o=[[]];e.gullet.future().text!=="{";)if(n=e.gullet.popToken(),n.text==="#"){if(e.gullet.future().text==="{"){s=e.gullet.future(),o[a].push("{");break}if(n=e.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new ce('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==a+1)throw new ce('Argument number "'+n.text+'" out of order');a++,o.push([])}else{if(n.text==="EOF")throw new ce("Expected a macro definition");o[a].push(n.text)}var{tokens:l}=e.gullet.consumeArg();return s&&l.unshift(s),(t==="\\edef"||t==="\\xdef")&&(l=e.gullet.expandTokens(l),l.reverse()),e.gullet.macros.set(r,{tokens:l,numArgs:a,delimiters:o},t===j0[t]),{type:"internal",mode:e.mode}}});Se({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=Xh(e.gullet.popToken());e.gullet.consumeSpaces();var r=Lv(e);return Yh(e,n,r,t==="\\\\globallet"),{type:"internal",mode:e.mode}}});Se({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=Xh(e.gullet.popToken()),r=e.gullet.popToken(),a=e.gullet.popToken();return Yh(e,n,a,t==="\\\\globalfuture"),e.gullet.pushToken(a),e.gullet.pushToken(r),{type:"internal",mode:e.mode}}});var aa=function(e,t,n){var r=Tt.math[e]&&Tt.math[e].replace,a=bl(r||e,t,n);if(!a)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return a},Al=function(e,t,n,r){var a=n.havingBaseStyle(t),s=oe(r.concat(a.sizingClasses(n)),[e],n),o=a.sizeMultiplier/n.sizeMultiplier;return s.height*=o,s.depth*=o,s.maxFontSize=a.sizeMultiplier,s},$h=function(e,t,n){var r=t.havingBaseStyle(n),a=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=ge(a),e.height-=a,e.depth+=a},Uv=function(e,t,n,r,a,s){var o=tn(e,"Main-Regular",a,r),l=Al(o,t,r,s);return $h(l,r,t),l},Nv=function(e,t,n,r){return tn(e,"Size"+t+"-Regular",n,r)},Kh=function(e,t,n,r,a,s){var o=Nv(e,t,a,r),l=Al(oe(["delimsizing","size"+t],[o],r),je.TEXT,r,s);return n&&$h(l,r,je.TEXT),l},Uo=function(e,t,n){var r;t==="Size1-Regular"?r="delim-size1":r="delim-size4";var a=oe(["delimsizinginner",r],[oe([],[tn(e,t,n)])]);return{type:"elem",elem:a}},No=function(e,t,n){var r=Gn["Size4-Regular"][e.charCodeAt(0)]?Gn["Size4-Regular"][e.charCodeAt(0)][4]:Gn["Size1-Regular"][e.charCodeAt(0)][4],a=new Pi("inner",Wg(e,Math.round(1e3*t))),s=new ui([a],{width:ge(r),height:ge(t),style:"width:"+ge(r),viewBox:"0 0 "+1e3*r+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),o=Ii([],[s],n);return o.height=t,o.style.height=ge(t),o.style.width=ge(r),{type:"elem",elem:o}},J0=.008,rs={type:"kern",size:-1*J0},Fv=new Set(["|","\\lvert","\\rvert","\\vert"]),zv=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Zh=function(e,t,n,r,a,s){var o,l,c,u,d="",p=0;o=c=u=e,l=null;var g="Size1-Regular";e==="\\uparrow"?c=u="⏐":e==="\\Uparrow"?c=u="‖":e==="\\downarrow"?o=c="⏐":e==="\\Downarrow"?o=c="‖":e==="\\updownarrow"?(o="\\uparrow",c="⏐",u="\\downarrow"):e==="\\Updownarrow"?(o="\\Uparrow",c="‖",u="\\Downarrow"):Fv.has(e)?(c="∣",d="vert",p=333):zv.has(e)?(c="∥",d="doublevert",p=556):e==="["||e==="\\lbrack"?(o="⎡",c="⎢",u="⎣",g="Size4-Regular",d="lbrack",p=667):e==="]"||e==="\\rbrack"?(o="⎤",c="⎥",u="⎦",g="Size4-Regular",d="rbrack",p=667):e==="\\lfloor"||e==="⌊"?(c=o="⎢",u="⎣",g="Size4-Regular",d="lfloor",p=667):e==="\\lceil"||e==="⌈"?(o="⎡",c=u="⎢",g="Size4-Regular",d="lceil",p=667):e==="\\rfloor"||e==="⌋"?(c=o="⎥",u="⎦",g="Size4-Regular",d="rfloor",p=667):e==="\\rceil"||e==="⌉"?(o="⎤",c=u="⎥",g="Size4-Regular",d="rceil",p=667):e==="("||e==="\\lparen"?(o="⎛",c="⎜",u="⎝",g="Size4-Regular",d="lparen",p=875):e===")"||e==="\\rparen"?(o="⎞",c="⎟",u="⎠",g="Size4-Regular",d="rparen",p=875):e==="\\{"||e==="\\lbrace"?(o="⎧",l="⎨",u="⎩",c="⎪",g="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(o="⎫",l="⎬",u="⎭",c="⎪",g="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(o="⎧",u="⎩",c="⎪",g="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(o="⎫",u="⎭",c="⎪",g="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(o="⎧",u="⎭",c="⎪",g="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(o="⎫",u="⎩",c="⎪",g="Size4-Regular");var x=aa(o,g,a),b=x.height+x.depth,v=aa(c,g,a),f=v.height+v.depth,A=aa(u,g,a),R=A.height+A.depth,w=0,P=1;if(l!==null){var L=aa(l,g,a);w=L.height+L.depth,P=2}var N=b+R+w,D=Math.max(0,Math.ceil((t-N)/(P*f))),y=N+D*P*f,M=r.fontMetrics().axisHeight;n&&(M*=r.sizeMultiplier);var C=y/2-M,z=[];if(d.length>0){var H=y-b-R,$=Math.round(y*1e3),G=qg(d,Math.round(H*1e3)),K=new Pi(d,G),Q=ge(p/1e3),X=ge($/1e3),le=new ui([K],{width:Q,height:X,viewBox:"0 0 "+p+" "+$}),me=Ii([],[le],r);me.height=$/1e3,me.style.width=Q,me.style.height=X,z.push({type:"elem",elem:me})}else{if(z.push(Uo(u,g,a)),z.push(rs),l===null){var _e=y-b-R+2*J0;z.push(No(c,_e,r))}else{var Ge=(y-b-R-w)/2+2*J0;z.push(No(c,Ge,r)),z.push(rs),z.push(Uo(l,g,a)),z.push(rs),z.push(No(c,Ge,r))}z.push(rs),z.push(Uo(o,g,a))}var Ve=r.havingBaseStyle(je.TEXT),Ke=dt({positionType:"bottom",positionData:C,children:z});return Al(oe(["delimsizing","mult"],[Ke],Ve),je.TEXT,r,s)},Fo=80,zo=.08,Bo=function(e,t,n,r,a){var s=Vg(e,r,n),o=new Pi(e,s),l=new ui([o],{width:"400em",height:ge(t),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return Ii(["hide-tail"],[l],a)},Bv=function(e,t){var n=t.havingBaseSizing(),r=td("\\surd",e*n.sizeMultiplier,ed,n),a=n.sizeMultiplier,s=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,l,c,u,d;return r.type==="small"?(u=1e3+1e3*s+Fo,e<1?a=1:e<1.4&&(a=.7),l=(1+s+zo)/a,c=(1+s)/a,o=Bo("sqrtMain",l,u,s,t),o.style.minWidth="0.853em",d=.833/a):r.type==="large"?(u=(1e3+Fo)*sa[r.size],c=(sa[r.size]+s)/a,l=(sa[r.size]+s+zo)/a,o=Bo("sqrtSize"+r.size,l,u,s,t),o.style.minWidth="1.02em",d=1/a):(l=e+s+zo,c=e+s,u=Math.floor(1e3*e+s)+Fo,o=Bo("sqrtTall",l,u,s,t),o.style.minWidth="0.742em",d=1.056),o.height=c,o.style.height=ge(l),{span:o,advanceWidth:d,ruleWidth:(t.fontMetrics().sqrtRuleThickness+s)*a}},jh=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),Ov=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Jh=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),sa=[0,1.2,1.8,2.4,3],Qh=function(e,t,n,r,a){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),jh.has(e)||Jh.has(e))return Kh(e,t,!1,n,r,a);if(Ov.has(e))return Zh(e,sa[t],!1,n,r,a);throw new ce("Illegal delimiter: '"+e+"'")},kv=[{type:"small",style:je.SCRIPTSCRIPT},{type:"small",style:je.SCRIPT},{type:"small",style:je.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],Hv=[{type:"small",style:je.SCRIPTSCRIPT},{type:"small",style:je.SCRIPT},{type:"small",style:je.TEXT},{type:"stack"}],ed=[{type:"small",style:je.SCRIPTSCRIPT},{type:"small",style:je.SCRIPT},{type:"small",style:je.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Gv=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";var t=e.type;throw new Error("Add support for delim type '"+t+"' here.")},td=function(e,t,n,r){for(var a=Math.min(2,3-r.style.size),s=a;s<n.length;s++){var o=n[s];if(o.type==="stack")break;var l=aa(e,Gv(o),"math"),c=l.height+l.depth;if(o.type==="small"){var u=r.havingBaseStyle(o.style);c*=u.sizeMultiplier}if(c>t)return o}return n[n.length-1]},Q0=function(e,t,n,r,a,s){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var o;Jh.has(e)?o=kv:jh.has(e)?o=ed:o=Hv;var l=td(e,t,o,r);return l.type==="small"?Uv(e,l.style,n,r,a,s):l.type==="large"?Kh(e,l.size,n,r,a,s):Zh(e,t,n,r,a,s)},Oo=function(e,t,n,r,a,s){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,l=901,c=5/r.fontMetrics().ptPerEm,u=Math.max(t-o,n+o),d=Math.max(u/500*l,2*u-c);return Q0(e,d,!0,r,a,s)},mu={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},Vv=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function gu(i){return"isMiddle"in i}function zs(i,e){var t=Ns(i);if(t&&Vv.has(t.text))return t;throw t?new ce("Invalid delimiter '"+t.text+"' after '"+e.funcName+"'",i):new ce("Invalid delimiter type '"+i.type+"'",i)}Se({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(i,e)=>{var t=zs(e[0],i);return{type:"delimsizing",mode:i.parser.mode,size:mu[i.funcName].size,mclass:mu[i.funcName].mclass,delim:t.text}},htmlBuilder:(i,e)=>i.delim==="."?oe([i.mclass]):Qh(i.delim,i.size,e,i.mode,[i.mclass]),mathmlBuilder:i=>{var e=[];i.delim!=="."&&e.push(Cn(i.delim,i.mode));var t=new ue("mo",e);i.mclass==="mopen"||i.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var n=ge(sa[i.size]);return t.setAttribute("minsize",n),t.setAttribute("maxsize",n),t}});function vu(i){if(!i.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}Se({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=i.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new ce("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:i.parser.mode,delim:zs(e[0],i).text,color:t}}});Se({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=zs(e[0],i),n=i.parser;++n.leftrightDepth;var r=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var a=rt(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:r,left:t.text,right:a.delim,rightColor:a.color}},htmlBuilder:(i,e)=>{vu(i);for(var t=Wt(i.body,e,!0,["mopen","mclose"]),n=0,r=0,a=!1,s=0;s<t.length;s++){var o=t[s];gu(o)?a=!0:(n=Math.max(t[s].height,n),r=Math.max(t[s].depth,r))}n*=e.sizeMultiplier,r*=e.sizeMultiplier;var l;if(i.left==="."?l=fa(e,["mopen"]):l=Oo(i.left,n,r,e,i.mode,["mopen"]),t.unshift(l),a)for(var c=1;c<t.length;c++){var u=t[c];if(gu(u)){var d=u.isMiddle;t[c]=Oo(d.delim,n,r,d.options,i.mode,[])}}var p;if(i.right===".")p=fa(e,["mclose"]);else{var g=i.rightColor?e.withColor(i.rightColor):e;p=Oo(i.right,n,r,g,i.mode,["mclose"])}return t.push(p),oe(["minner"],t,e)},mathmlBuilder:(i,e)=>{vu(i);var t=bn(i.body,e);if(i.left!=="."){var n=new ue("mo",[Cn(i.left,i.mode)]);n.setAttribute("fence","true"),t.unshift(n)}if(i.right!=="."){var r=new ue("mo",[Cn(i.right,i.mode)]);r.setAttribute("fence","true"),i.rightColor&&r.setAttribute("mathcolor",i.rightColor),t.push(r)}return wl(t)}});Se({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=zs(e[0],i);if(!i.parser.leftrightDepth)throw new ce("\\middle without preceding \\left",t);return{type:"middle",mode:i.parser.mode,delim:t.text}},htmlBuilder:(i,e)=>{var t;return i.delim==="."?t=fa(e,[]):(t=Qh(i.delim,1,e,i.mode,[]),t.isMiddle={delim:i.delim,options:e}),t},mathmlBuilder:(i,e)=>{var t=i.delim==="\\vert"||i.delim==="|"?Cn("|","text"):Cn(i.delim,i.mode),n=new ue("mo",[t]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var Bs=(i,e)=>{var t=Br(ft(i.body,e),e),n=i.label.slice(1),r=e.sizeMultiplier,a,s,o=hi(i.body);if(n==="sout")a=oe(["stretchy","sout"]),a.height=e.fontMetrics().defaultRuleThickness/r,s=-.5*e.fontMetrics().xHeight;else if(n==="phase"){var l=It({number:.6,unit:"pt"},e),c=It({number:.35,unit:"ex"},e),u=e.havingBaseSizing();r=r/u.sizeMultiplier;var d=t.height+t.depth+l+c;t.style.paddingLeft=ge(d/2+l);var p=Math.floor(1e3*d*r),g=Hg(p),x=new ui([new Pi("phase",g)],{width:"400em",height:ge(p/1e3),viewBox:"0 0 400000 "+p,preserveAspectRatio:"xMinYMin slice"});a=Ii(["hide-tail"],[x],e),a.style.height=ge(d),s=t.depth+l+c}else{/cancel/.test(n)?o||t.classes.push("cancel-pad"):n==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var b,v,f=0;/box/.test(n)?(f=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),b=e.fontMetrics().fboxsep+(n==="colorbox"?0:f),v=b):n==="angl"?(f=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),b=4*f,v=Math.max(0,.25-t.depth)):(b=o?.2:0,v=b),a=wv(t,n,b,v,e),/fbox|boxed|fcolorbox/.test(n)?(a.style.borderStyle="solid",a.style.borderWidth=ge(f)):n==="angl"&&f!==.049&&(a.style.borderTopWidth=ge(f),a.style.borderRightWidth=ge(f)),s=t.depth+v,i.backgroundColor&&(a.style.backgroundColor=i.backgroundColor,i.borderColor&&(a.style.borderColor=i.borderColor))}var A;if(i.backgroundColor)A=dt({positionType:"individualShift",children:[{type:"elem",elem:a,shift:s},{type:"elem",elem:t,shift:0}]});else{var R=/cancel|phase/.test(n)?["svg-align"]:[];A=dt({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:a,shift:s,wrapperClasses:R}]})}return/cancel/.test(n)&&(A.height=t.height,A.depth=t.depth),/cancel/.test(n)&&!o?oe(["mord","cancel-lap"],[A],e):oe(["mord"],[A],e)},Os=(i,e)=>{var t,n=new ue(i.label.includes("colorbox")?"mpadded":"menclose",[Mt(i.body,e)]);switch(i.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*t+"pt"),n.setAttribute("height","+"+2*t+"pt"),n.setAttribute("lspace",t+"pt"),n.setAttribute("voffset",t+"pt"),i.label==="\\fcolorbox"){var r=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);n.setAttribute("style","border: "+ge(r)+" solid "+i.borderColor)}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return i.backgroundColor&&n.setAttribute("mathbackground",i.backgroundColor),n};Se({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","hbox"]},handler(i,e,t){var{parser:n,funcName:r}=i,a=rt(e[0],"color-token").color,s=e[1];return{type:"enclose",mode:n.mode,label:r,backgroundColor:a,body:s}},htmlBuilder:Bs,mathmlBuilder:Os});Se({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"]},handler(i,e,t){var{parser:n,funcName:r}=i,a=rt(e[0],"color-token").color,s=rt(e[1],"color-token").color,o=e[2];return{type:"enclose",mode:n.mode,label:r,backgroundColor:s,borderColor:a,body:o}},htmlBuilder:Bs,mathmlBuilder:Os});Se({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\fbox",body:e[0]}}});Se({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"enclose",mode:t.mode,label:n,body:r}},htmlBuilder:Bs,mathmlBuilder:Os});Se({type:"enclose",names:["\\sout"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i;t.mode==="math"&&t.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var r=e[0];return{type:"enclose",mode:t.mode,label:n,body:r}},htmlBuilder:Bs,mathmlBuilder:Os});Se({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\angl",body:e[0]}}});var nd={};function Wn(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:a,mathmlBuilder:s}=i,o={type:e,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:r},l=0;l<t.length;++l)nd[t[l]]=o;a&&(bs[e]=a),s&&(Ms[e]=s)}var id={};function E(i,e){id[i]=e}class cn{constructor(e,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=n}static range(e,t){return t?!e||!e.loc||!t.loc||e.loc.lexer!==t.loc.lexer?null:new cn(e.loc.lexer,e.loc.start,t.loc.end):e&&e.loc}}class xn{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(e,t){return new xn(t,cn.range(this,e))}}function xu(i){var e=[];i.consumeSpaces();var t=i.fetch().text;for(t==="\\relax"&&(i.consume(),i.consumeSpaces(),t=i.fetch().text);t==="\\hline"||t==="\\hdashline";)i.consume(),e.push(t==="\\hdashline"),i.consumeSpaces(),t=i.fetch().text;return e}var ks=i=>{var e=i.parser.settings;if(!e.displayMode)throw new ce("{"+i.envName+"} can be used only in display mode.")},Wv=new Set(["gather","gather*"]);function Rl(i){if(!i.includes("ed"))return!i.includes("*")}function Ui(i,e,t){var{hskipBeforeAndAfter:n,addJot:r,cols:a,arraystretch:s,colSeparationType:o,autoTag:l,singleRow:c,emptySingleRow:u,maxNumCols:d,leqno:p}=e;if(i.gullet.beginGroup(),c||i.gullet.macros.set("\\cr","\\\\\\relax"),!s){var g=i.gullet.expandMacroAsText("\\arraystretch");if(g==null)s=1;else if(s=parseFloat(g),!s||s<0)throw new ce("Invalid \\arraystretch: "+g)}i.gullet.beginGroup();var x=[],b=[x],v=[],f=[],A=l!=null?[]:void 0;function R(){l&&i.gullet.macros.set("\\@eqnsw","1",!0)}function w(){A&&(i.gullet.macros.get("\\df@tag")?(A.push(i.subparse([new xn("\\df@tag")])),i.gullet.macros.set("\\df@tag",void 0,!0)):A.push(!!l&&i.gullet.macros.get("\\@eqnsw")==="1"))}for(R(),f.push(xu(i));;){var P=i.parseExpression(!1,c?"\\end":"\\\\");i.gullet.endGroup(),i.gullet.beginGroup();var L={type:"ordgroup",mode:i.mode,body:P};t&&(L={type:"styling",mode:i.mode,style:t,resetFont:!0,body:[L]}),x.push(L);var N=i.fetch().text;if(N==="&"){if(d&&x.length===d){if(c||o)throw new ce("Too many tab characters: &",i.nextToken);i.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}i.consume()}else if(N==="\\end"){w(),x.length===1&&L.type==="styling"&&L.body.length===1&&L.body[0].type==="ordgroup"&&L.body[0].body.length===0&&(b.length>1||!u)&&b.pop(),f.length<b.length+1&&f.push([]);break}else if(N==="\\\\"){i.consume();var D=void 0;i.gullet.future().text!==" "&&(D=i.parseSizeGroup(!0)),v.push(D?D.value:null),w(),f.push(xu(i)),x=[],b.push(x),R()}else throw new ce("Expected & or \\\\ or \\cr or \\end",i.nextToken)}return i.gullet.endGroup(),i.gullet.endGroup(),{type:"array",mode:i.mode,addJot:r,arraystretch:s,body:b,cols:a,rowGaps:v,hskipBeforeAndAfter:n,hLinesBeforeRow:f,colSeparationType:o,tags:A,leqno:p}}function Cl(i){return i.slice(0,1)==="d"?"display":"text"}var qn=function(e,t){var n,r,a=e.body.length,s=e.hLinesBeforeRow,o=0,l=new Array(a),c=[],u=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),d=1/t.fontMetrics().ptPerEm,p=5*d;if(e.colSeparationType&&e.colSeparationType==="small"){var g=t.havingStyle(je.SCRIPT).sizeMultiplier;p=.2778*(g/t.sizeMultiplier)}var x=e.colSeparationType==="CD"?It({number:3,unit:"ex"},t):12*d,b=3*d,v=e.arraystretch*x,f=.7*v,A=.3*v,R=0;function w(ee){for(var Pe=0;Pe<ee.length;++Pe)Pe>0&&(R+=.25),c.push({pos:R,isDashed:ee[Pe]})}for(w(s[0]),n=0;n<e.body.length;++n){var P=e.body[n],L=f,N=A;o<P.length&&(o=P.length);var D={cells:new Array(P.length),height:0,depth:0,pos:0};for(r=0;r<P.length;++r){var y=ft(P[r],t);N<y.depth&&(N=y.depth),L<y.height&&(L=y.height),D.cells[r]=y}var M=e.rowGaps[n],C=0;M&&(C=It(M,t),C>0&&(C+=A,N<C&&(N=C),C=0)),e.addJot&&n<e.body.length-1&&(N+=b),D.height=L,D.depth=N,R+=L,D.pos=R,R+=N+C,l[n]=D,w(s[n+1])}var z=R/2+t.fontMetrics().axisHeight,H=e.cols||[],$=[],G,K,Q=[];if(e.tags&&e.tags.some(ee=>ee))for(n=0;n<a;++n){var X=l[n],le=X.pos-z,me=e.tags[n],_e=void 0;me===!0?_e=oe(["eqn-num"],[],t):me===!1?_e=oe([],[],t):_e=oe([],Wt(me,t,!0),t),_e.depth=X.depth,_e.height=X.height,Q.push({type:"elem",elem:_e,shift:le})}for(r=0,K=0;r<o||K<H.length;++r,++K){for(var Ge,Ve=H[K],Ke=!0;((tt=Ve)==null?void 0:tt.type)==="separator";){var tt;if(Ke||(G=oe(["arraycolsep"],[]),G.style.width=ge(t.fontMetrics().doubleRuleSep),$.push(G)),Ve.separator==="|"||Ve.separator===":"){var te=Ve.separator==="|"?"solid":"dashed",ie=oe(["vertical-separator"],[],t);ie.style.height=ge(R),ie.style.borderRightWidth=ge(u),ie.style.borderRightStyle=te,ie.style.margin="0 "+ge(-u/2);var Te=R-z;Te&&(ie.style.verticalAlign=ge(-Te)),$.push(ie)}else throw new ce("Invalid separator type: "+Ve.separator);K++,Ve=H[K],Ke=!1}if(!(r>=o)){var Oe=void 0;if(r>0||e.hskipBeforeAndAfter){var Ue,st;Oe=(Ue=(st=Ve)==null?void 0:st.pregap)!=null?Ue:p,Oe!==0&&(G=oe(["arraycolsep"],[]),G.style.width=ge(Oe),$.push(G))}var kt=[];for(n=0;n<a;++n){var B=l[n],mt=B.cells[r];if(mt){var Je=B.pos-z;mt.depth=B.depth,mt.height=B.height,kt.push({type:"elem",elem:mt,shift:Je})}}var We=dt({positionType:"individualShift",children:kt}),De=oe(["col-align-"+(((Ge=Ve)==null?void 0:Ge.align)||"c")],[We]);if($.push(De),r<o-1||e.hskipBeforeAndAfter){var yt,Ce;Oe=(yt=(Ce=Ve)==null?void 0:Ce.postgap)!=null?yt:p,Oe!==0&&(G=oe(["arraycolsep"],[]),G.style.width=ge(Oe),$.push(G))}}}var Ze=oe(["mtable"],$);if(c.length>0){for(var Nt=zr("hline",t,u),Rt=zr("hdashline",t,u),I=[{type:"elem",elem:Ze,shift:0}];c.length>0;){var S=c.pop(),Y=S.pos-z;S.isDashed?I.push({type:"elem",elem:Rt,shift:Y}):I.push({type:"elem",elem:Nt,shift:Y})}Ze=dt({positionType:"individualShift",children:I})}if(Q.length===0)return oe(["mord"],[Ze],t);var ne=dt({positionType:"individualShift",children:Q}),se=oe(["tag"],[ne],t);return fi([Ze,se])},qv={c:"center ",l:"left ",r:"right "},Xn=function(e,t){for(var n=[],r=new ue("mtd",[],["mtr-glue"]),a=new ue("mtd",[],["mml-eqn-num"]),s=0;s<e.body.length;s++){for(var o=e.body[s],l=[],c=0;c<o.length;c++)l.push(new ue("mtd",[Mt(o[c],t)]));e.tags&&e.tags[s]&&(l.unshift(r),l.push(r),e.leqno?l.unshift(a):l.push(a)),n.push(new ue("mtr",l))}var u=new ue("mtable",n),d=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);u.setAttribute("rowspacing",ge(d));var p="",g="";if(e.cols&&e.cols.length>0){var x=e.cols,b="",v=!1,f=0,A=x.length;x[0].type==="separator"&&(p+="top ",f=1),x[x.length-1].type==="separator"&&(p+="bottom ",A-=1);for(var R=f;R<A;R++){var w=x[R];w.type==="align"?(g+=qv[w.align],v&&(b+="none "),v=!0):w.type==="separator"&&v&&(b+=w.separator==="|"?"solid ":"dashed ",v=!1)}u.setAttribute("columnalign",g.trim()),/[sd]/.test(b)&&u.setAttribute("columnlines",b.trim())}if(e.colSeparationType==="align"){for(var P=e.cols||[],L="",N=1;N<P.length;N++)L+=N%2?"0em ":"1em ";u.setAttribute("columnspacing",L.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?u.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?u.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?u.setAttribute("columnspacing","0.5em"):u.setAttribute("columnspacing","1em");var D="",y=e.hLinesBeforeRow;p+=y[0].length>0?"left ":"",p+=y[y.length-1].length>0?"right ":"";for(var M=1;M<y.length-1;M++)D+=y[M].length===0?"none ":y[M][0]?"dashed ":"solid ";return/[sd]/.test(D)&&u.setAttribute("rowlines",D.trim()),p!==""&&(u=new ue("menclose",[u]),u.setAttribute("notation",p.trim())),e.arraystretch&&e.arraystretch<1&&(u=new ue("mstyle",[u]),u.setAttribute("scriptlevel","1")),u},rd=function(e,t){e.envName.includes("ed")||ks(e);var n=[],r=e.envName.includes("at")?"alignat":"align",a=e.envName==="split",s=Ui(e.parser,{cols:n,addJot:!0,autoTag:a?void 0:Rl(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:a?2:void 0,leqno:e.parser.settings.leqno},"display"),o=0,l=0,c={type:"ordgroup",mode:e.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var u="",d=0;d<t[0].body.length;d++){var p=rt(t[0].body[d],"textord");u+=p.text}o=Number(u),l=o*2}var g=!l;s.body.forEach(function(f){for(var A=1;A<f.length;A+=2){var R=rt(f[A],"styling"),w=rt(R.body[0],"ordgroup");w.body.unshift(c)}if(g)l<f.length&&(l=f.length);else{var P=f.length/2;if(o<P)throw new ce("Too many math in a row: "+("expected "+o+", but got "+P),f[0])}});for(var x=0;x<l;++x){var b="r",v=0;x%2===1?b="l":x>0&&g&&(v=1),n[x]={type:"align",align:b,pregap:v,postgap:0}}return s.colSeparationType=g?"align":"alignat",s};Wn({type:"array",names:["array","darray"],props:{numArgs:1},handler(i,e){var t=Ns(e[0]),n=t?[e[0]]:rt(e[0],"ordgroup").body,r=n.map(function(s){var o=Us(s),l=o.text;if("lcr".includes(l))return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new ce("Unknown column alignment: "+l,s)}),a={cols:r,hskipBeforeAndAfter:!0,maxNumCols:r.length};return Ui(i.parser,a,Cl(i.envName))},htmlBuilder:qn,mathmlBuilder:Xn});Wn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(i){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[i.envName.replace("*","")],t="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(i.envName.charAt(i.envName.length-1)==="*"){var r=i.parser;if(r.consumeSpaces(),r.fetch().text==="["){if(r.consume(),r.consumeSpaces(),t=r.fetch().text,!"lcr".includes(t))throw new ce("Expected l or c or r",r.nextToken);r.consume(),r.consumeSpaces(),r.expect("]"),r.consume(),n.cols=[{type:"align",align:t}]}}var a=Ui(i.parser,n,Cl(i.envName)),s=Math.max(0,...a.body.map(o=>o.length));return a.cols=new Array(s).fill({type:"align",align:t}),e?{type:"leftright",mode:i.mode,body:[a],left:e[0],right:e[1],rightColor:void 0}:a},htmlBuilder:qn,mathmlBuilder:Xn});Wn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(i){var e={arraystretch:.5},t=Ui(i.parser,e,"script");return t.colSeparationType="small",t},htmlBuilder:qn,mathmlBuilder:Xn});Wn({type:"array",names:["subarray"],props:{numArgs:1},handler(i,e){var t=Ns(e[0]),n=t?[e[0]]:rt(e[0],"ordgroup").body,r=n.map(function(o){var l=Us(o),c=l.text;if("lc".includes(c))return{type:"align",align:c};throw new ce("Unknown column alignment: "+c,o)});if(r.length>1)throw new ce("{subarray} can contain only one column");var a={cols:r,hskipBeforeAndAfter:!1,arraystretch:.5},s=Ui(i.parser,a,"script");if(s.body.length>0&&s.body[0].length>1)throw new ce("{subarray} can contain only one column");return s},htmlBuilder:qn,mathmlBuilder:Xn});Wn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(i){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=Ui(i.parser,e,Cl(i.envName));return{type:"leftright",mode:i.mode,body:[t],left:i.envName.includes("r")?".":"\\{",right:i.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:qn,mathmlBuilder:Xn});Wn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:rd,htmlBuilder:qn,mathmlBuilder:Xn});Wn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(i){Wv.has(i.envName)&&ks(i);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Rl(i.envName),emptySingleRow:!0,leqno:i.parser.settings.leqno};return Ui(i.parser,e,"display")},htmlBuilder:qn,mathmlBuilder:Xn});Wn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:rd,htmlBuilder:qn,mathmlBuilder:Xn});Wn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(i){ks(i);var e={autoTag:Rl(i.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:i.parser.settings.leqno};return Ui(i.parser,e,"display")},htmlBuilder:qn,mathmlBuilder:Xn});Wn({type:"array",names:["CD"],props:{numArgs:0},handler(i){return ks(i),Iv(i.parser)},htmlBuilder:qn,mathmlBuilder:Xn});E("\\nonumber","\\gdef\\@eqnsw{0}");E("\\notag","\\nonumber");Se({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(i,e){throw new ce(i.funcName+" valid only within array environment")}});var _u=nd;Se({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];if(r.type!=="ordgroup")throw new ce("Invalid environment name",r);for(var a="",s=0;s<r.body.length;++s)a+=rt(r.body[s],"textord").text;if(n==="\\begin"){if(!_u.hasOwnProperty(a))throw new ce("No such environment: "+a,r);var o=_u[a],{args:l,optArgs:c}=t.parseArguments("\\begin{"+a+"}",o),u={mode:t.mode,envName:a,parser:t},d=o.handler(u,l,c);t.expect("\\end",!1);var p=t.nextToken,g=rt(t.parseFunction(),"environment");if(g.name!==a)throw new ce("Mismatch: \\begin{"+a+"} matched by \\end{"+g.name+"}",p);return d}return{type:"environment",mode:t.mode,name:a,nameGroup:r}}});var ad=(i,e)=>{var t=i.font,n=e.withFont(t);return ft(i.body,n)},sd=(i,e)=>{var t=i.font,n=e.withFont(t);return Mt(i.body,n)},yu={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};Se({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=Ss(e[0]),a=n;return a in yu&&(a=yu[a]),{type:"font",mode:t.mode,font:a.slice(1),body:r}},htmlBuilder:ad,mathmlBuilder:sd});Se({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"mclass",mode:t.mode,mclass:Fs(n),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:n}],isCharacterBox:hi(n)}}});Se({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,breakOnTokenText:r}=i,{mode:a}=t,s=t.parseExpression(!0,r);return{type:"font",mode:a,font:"math"+n.slice(1),body:{type:"ordgroup",mode:t.mode,body:s}}},htmlBuilder:ad,mathmlBuilder:sd});var Xv=(i,e)=>{var t=e.style,n=t.fracNum(),r=t.fracDen(),a;a=e.havingStyle(n);var s=ft(i.numer,a,e);if(i.continued){var o=8.5/e.fontMetrics().ptPerEm,l=3.5/e.fontMetrics().ptPerEm;s.height=s.height<o?o:s.height,s.depth=s.depth<l?l:s.depth}a=e.havingStyle(r);var c=ft(i.denom,a,e),u,d,p;i.hasBarLine?(i.barSize?(d=It(i.barSize,e),u=zr("frac-line",e,d)):u=zr("frac-line",e),d=u.height,p=u.height):(u=null,d=0,p=e.fontMetrics().defaultRuleThickness);var g,x,b;t.size===je.DISPLAY.size?(g=e.fontMetrics().num1,d>0?x=3*p:x=7*p,b=e.fontMetrics().denom1):(d>0?(g=e.fontMetrics().num2,x=p):(g=e.fontMetrics().num3,x=3*p),b=e.fontMetrics().denom2);var v;if(u){var A=e.fontMetrics().axisHeight;g-s.depth-(A+.5*d)<x&&(g+=x-(g-s.depth-(A+.5*d))),A-.5*d-(c.height-b)<x&&(b+=x-(A-.5*d-(c.height-b)));var R=-(A-.5*d);v=dt({positionType:"individualShift",children:[{type:"elem",elem:c,shift:b},{type:"elem",elem:u,shift:R},{type:"elem",elem:s,shift:-g}]})}else{var f=g-s.depth-(c.height-b);f<x&&(g+=.5*(x-f),b+=.5*(x-f)),v=dt({positionType:"individualShift",children:[{type:"elem",elem:c,shift:b},{type:"elem",elem:s,shift:-g}]})}a=e.havingStyle(t),v.height*=a.sizeMultiplier/e.sizeMultiplier,v.depth*=a.sizeMultiplier/e.sizeMultiplier;var w;t.size===je.DISPLAY.size?w=e.fontMetrics().delim1:t.size===je.SCRIPTSCRIPT.size?w=e.havingStyle(je.SCRIPT).fontMetrics().delim2:w=e.fontMetrics().delim2;var P,L;return i.leftDelim==null?P=fa(e,["mopen"]):P=Q0(i.leftDelim,w,!0,e.havingStyle(t),i.mode,["mopen"]),i.continued?L=oe([]):i.rightDelim==null?L=fa(e,["mclose"]):L=Q0(i.rightDelim,w,!0,e.havingStyle(t),i.mode,["mclose"]),oe(["mord"].concat(a.sizingClasses(e)),[P,oe(["mfrac"],[v]),L],e)},Yv=(i,e)=>{var t=new ue("mfrac",[Mt(i.numer,e),Mt(i.denom,e)]);if(!i.hasBarLine)t.setAttribute("linethickness","0px");else if(i.barSize){var n=It(i.barSize,e);t.setAttribute("linethickness",ge(n))}if(i.leftDelim!=null||i.rightDelim!=null){var r=[];if(i.leftDelim!=null){var a=new ue("mo",[new Bt(i.leftDelim.replace("\\",""))]);a.setAttribute("fence","true"),r.push(a)}if(r.push(t),i.rightDelim!=null){var s=new ue("mo",[new Bt(i.rightDelim.replace("\\",""))]);s.setAttribute("fence","true"),r.push(s)}return wl(r)}return t},od=(i,e)=>{if(!e)return i;var t={type:"styling",mode:i.mode,style:e,body:[i]};return t};Se({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],a=e[1],s,o=null,l=null;switch(n){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":s=!0;break;case"\\\\atopfrac":s=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":s=!1,o="(",l=")";break;case"\\\\bracefrac":s=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":s=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}var c=n==="\\cfrac",u=null;return c||n.startsWith("\\d")?u="display":n.startsWith("\\t")&&(u="text"),od({type:"genfrac",mode:t.mode,numer:r,denom:a,continued:c,hasBarLine:s,leftDelim:o,rightDelim:l,barSize:null},u)},htmlBuilder:Xv,mathmlBuilder:Yv});Se({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(i){var{parser:e,funcName:t,token:n}=i,r;switch(t){case"\\over":r="\\frac";break;case"\\choose":r="\\binom";break;case"\\atop":r="\\\\atopfrac";break;case"\\brace":r="\\\\bracefrac";break;case"\\brack":r="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:r,token:n}}});var bu=["display","text","script","scriptscript"],Mu=function(e){var t=null;return e.length>0&&(t=e,t=t==="."?null:t),t};Se({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(i,e){var{parser:t}=i,n=e[4],r=e[5],a=Ss(e[0]),s=a.type==="atom"&&a.family==="open"?Mu(a.text):null,o=Ss(e[1]),l=o.type==="atom"&&o.family==="close"?Mu(o.text):null,c=rt(e[2],"size"),u,d=null;c.isBlank?u=!0:(d=c.value,u=d.number>0);var p=null,g=e[3];if(g.type==="ordgroup"){if(g.body.length>0){var x=rt(g.body[0],"textord");p=bu[Number(x.text)]}}else g=rt(g,"textord"),p=bu[Number(g.text)];return od({type:"genfrac",mode:t.mode,numer:n,denom:r,continued:!1,hasBarLine:u,barSize:d,leftDelim:s,rightDelim:l},p)}});Se({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(i,e){var{parser:t,funcName:n,token:r}=i;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:rt(e[0],"size").value,token:r}}});Se({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],a=rt(e[1],"infix").size;if(!a)throw new Error("\\\\abovefrac expected size, but got "+String(a));var s=e[2],o=a.number>0;return{type:"genfrac",mode:t.mode,numer:r,denom:s,continued:!1,hasBarLine:o,barSize:a,leftDelim:null,rightDelim:null}}});var ld=(i,e)=>{var t=e.style,n,r;i.type==="supsub"?(n=i.sup?ft(i.sup,e.havingStyle(t.sup()),e):ft(i.sub,e.havingStyle(t.sub()),e),r=rt(i.base,"horizBrace")):r=rt(i,"horizBrace");var a=ft(r.base,e.havingBaseStyle(je.DISPLAY)),s=Ls(r,e),o;if(r.isOver?o=dt({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:.1},{type:"elem",elem:s,wrapperClasses:["svg-align"]}]}):o=dt({positionType:"bottom",positionData:a.depth+.1+s.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:a}]}),n){var l=oe(["minner",r.isOver?"mover":"munder"],[o],e);r.isOver?o=dt({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:n}]}):o=dt({positionType:"bottom",positionData:l.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:l}]})}return oe(["minner",r.isOver?"mover":"munder"],[o],e)},$v=(i,e)=>{var t=Is(i.label);return new ue(i.isOver?"mover":"munder",[Mt(i.base,e),t])};Se({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"horizBrace",mode:t.mode,label:n,isOver:n.includes("\\over"),base:e[0]}},htmlBuilder:ld,mathmlBuilder:$v});Se({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[1],r=rt(e[0],"url").url;return t.settings.isTrusted({command:"\\href",url:r})?{type:"href",mode:t.mode,href:r,body:zt(n)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(i,e)=>{var t=Wt(i.body,e,!1);return ov(i.href,[],t,e)},mathmlBuilder:(i,e)=>{var t=Li(i.body,e);return t instanceof ue||(t=new ue("mrow",[t])),t.setAttribute("href",i.href),t}});Se({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=rt(e[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:n}))return t.formatUnsupportedCmd("\\url");for(var r=[],a=0;a<n.length;a++){var s=n[a];s==="~"&&(s="\\textasciitilde"),r.push({type:"textord",mode:"text",text:s})}var o={type:"text",mode:t.mode,font:"\\texttt",body:r};return{type:"href",mode:t.mode,href:n,body:zt(o)}}});Se({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(i,e){var{parser:t}=i;return{type:"hbox",mode:t.mode,body:zt(e[0])}},htmlBuilder(i,e){var t=Wt(i.body,e.withFont(""),!1);return fi(t)},mathmlBuilder(i,e){return new ue("mrow",bn(i.body,e.withFont("")))}});Se({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,token:r}=i,a=rt(e[0],"raw").string,s=e[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(n){case"\\htmlClass":l.class=a,o={command:"\\htmlClass",class:a};break;case"\\htmlId":l.id=a,o={command:"\\htmlId",id:a};break;case"\\htmlStyle":l.style=a,o={command:"\\htmlStyle",style:a};break;case"\\htmlData":{for(var c=a.split(","),u=0;u<c.length;u++){var d=c[u],p=d.indexOf("=");if(p<0)throw new ce("\\htmlData key/value '"+d+"' missing equals sign");var g=d.slice(0,p),x=d.slice(p+1);l["data-"+g.trim()]=x}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(o)?{type:"html",mode:t.mode,attributes:l,body:zt(s)}:t.formatUnsupportedCmd(n)},htmlBuilder:(i,e)=>{var t=Wt(i.body,e,!1),n=["enclosing"];i.attributes.class&&n.push(...i.attributes.class.trim().split(/\s+/));var r=oe(n,t,e);for(var a in i.attributes)a!=="class"&&i.attributes.hasOwnProperty(a)&&r.setAttribute(a,i.attributes[a]);return r},mathmlBuilder:(i,e)=>Li(i.body,e)});Se({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"htmlmathml",mode:t.mode,html:zt(e[0]),mathml:zt(e[1])}},htmlBuilder:(i,e)=>{var t=Wt(i.html,e,!1);return fi(t)},mathmlBuilder:(i,e)=>Li(i.mathml,e)});var ko=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new ce("Invalid size: '"+e+"' in \\includegraphics");var n={number:+(t[1]+t[2]),unit:t[3]};if(!Eh(n))throw new ce("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};Se({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(i,e,t)=>{var{parser:n}=i,r={number:0,unit:"em"},a={number:.9,unit:"em"},s={number:0,unit:"em"},o="";if(t[0])for(var l=rt(t[0],"raw").string,c=l.split(","),u=0;u<c.length;u++){var d=c[u].split("=");if(d.length===2){var p=d[1].trim();switch(d[0].trim()){case"alt":o=p;break;case"width":r=ko(p);break;case"height":a=ko(p);break;case"totalheight":s=ko(p);break;default:throw new ce("Invalid key: '"+d[0]+"' in \\includegraphics.")}}}var g=rt(e[0],"url").url;return o===""&&(o=g,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:g})?{type:"includegraphics",mode:n.mode,alt:o,width:r,height:a,totalheight:s,src:g}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(i,e)=>{var t=It(i.height,e),n=0;i.totalheight.number>0&&(n=It(i.totalheight,e)-t);var r=0;i.width.number>0&&(r=It(i.width,e));var a={height:ge(t+n)};r>0&&(a.width=ge(r)),n>0&&(a.verticalAlign=ge(-n));var s=new Kg(i.src,i.alt,a);return s.height=t,s.depth=n,s},mathmlBuilder:(i,e)=>{var t=new ue("mglyph",[]);t.setAttribute("alt",i.alt);var n=It(i.height,e),r=0;if(i.totalheight.number>0&&(r=It(i.totalheight,e)-n,t.setAttribute("valign",ge(-r))),t.setAttribute("height",ge(n+r)),i.width.number>0){var a=It(i.width,e);t.setAttribute("width",ge(a))}return t.setAttribute("src",i.src),t}});Se({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=rt(e[0],"size");if(t.settings.strict){var a=n[1]==="m",s=r.value.unit==="mu";a?(s||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+r.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):s&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:r.value}},htmlBuilder(i,e){return Ph(i.dimension,e)},mathmlBuilder(i,e){var t=It(i.dimension,e);return new zh(t)}});Se({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"lap",mode:t.mode,alignment:n.slice(5),body:r}},htmlBuilder:(i,e)=>{var t;i.alignment==="clap"?(t=oe([],[ft(i.body,e)]),t=oe(["inner"],[t],e)):t=oe(["inner"],[ft(i.body,e)]);var n=oe(["fix"],[]),r=oe([i.alignment],[t,n],e),a=oe(["strut"]);return a.style.height=ge(r.height+r.depth),r.depth&&(a.style.verticalAlign=ge(-r.depth)),r.children.unshift(a),r=oe(["thinbox"],[r],e),oe(["mord","vbox"],[r],e)},mathmlBuilder:(i,e)=>{var t=new ue("mpadded",[Mt(i.body,e)]);if(i.alignment!=="rlap"){var n=i.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",n+"width")}return t.setAttribute("width","0px"),t}});Se({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){var{funcName:t,parser:n}=i,r=n.mode;n.switchMode("math");var a=t==="\\("?"\\)":"$",s=n.parseExpression(!1,a);return n.expect(a),n.switchMode(r),{type:"styling",mode:n.mode,style:"text",resetFont:!0,body:s}}});Se({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){throw new ce("Mismatched "+i.funcName)}});var Su=(i,e)=>{switch(e.style.size){case je.DISPLAY.size:return i.display;case je.TEXT.size:return i.text;case je.SCRIPT.size:return i.script;case je.SCRIPTSCRIPT.size:return i.scriptscript;default:return i.text}};Se({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"mathchoice",mode:t.mode,display:zt(e[0]),text:zt(e[1]),script:zt(e[2]),scriptscript:zt(e[3])}},htmlBuilder:(i,e)=>{var t=Su(i,e),n=Wt(t,e,!1);return fi(n)},mathmlBuilder:(i,e)=>{var t=Su(i,e);return Li(t,e)}});var cd=(i,e,t,n,r,a,s)=>{i=oe([],[i]);var o=t&&hi(t),l,c;if(e){var u=ft(e,n.havingStyle(r.sup()),n);c={elem:u,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-u.depth)}}if(t){var d=ft(t,n.havingStyle(r.sub()),n);l={elem:d,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-d.height)}}var p;if(c&&l){var g=n.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+i.depth+s;p=dt({positionType:"bottom",positionData:g,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:ge(-a)},{type:"kern",size:l.kern},{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:ge(a)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else if(l){var x=i.height-s;p=dt({positionType:"top",positionData:x,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:ge(-a)},{type:"kern",size:l.kern},{type:"elem",elem:i}]})}else if(c){var b=i.depth+s;p=dt({positionType:"bottom",positionData:b,children:[{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:ge(a)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else return i;var v=[p];if(l&&a!==0&&!o){var f=oe(["mspace"],[],n);f.style.marginRight=ge(a),v.unshift(f)}return oe(["mop","op-limits"],v,n)},ud=new Set(["\\smallint"]),Xr=(i,e)=>{var t,n,r=!1,a;i.type==="supsub"?(t=i.sup,n=i.sub,a=rt(i.base,"op"),r=!0):a=rt(i,"op");var s=e.style,o=!1;s.size===je.DISPLAY.size&&a.symbol&&!ud.has(a.name)&&(o=!0);var l,c;if(a.symbol){var u=o?"Size2-Regular":"Size1-Regular",d="";if((a.name==="\\oiint"||a.name==="\\oiiint")&&(d=a.name.slice(1),a.name=d==="oiint"?"\\iint":"\\iiint"),l=tn(a.name,u,"math",e,["mop","op-symbol",o?"large-op":"small-op"]),c=l.italic,d.length>0){var p=Lh(d+"Size"+(o?"2":"1"),e);l=dt({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:p,shift:o?.08:0}]}),a.name="\\"+d,l.classes.unshift("mop"),l.italic=c}}else if(a.body){var g=Wt(a.body,e,!0);g.length===1&&g[0]instanceof _n?(l=g[0],l.classes[0]="mop"):l=oe(["mop"],g,e)}else{for(var x=[],b=1;b<a.name.length;b++)x.push(Ml(a.name[b],a.mode,e));l=oe(["mop"],x,e)}var v=0,f=0;if((l instanceof _n||a.name==="\\oiint"||a.name==="\\oiiint")&&!a.suppressBaseShift){var A;v=(l.height-l.depth)/2-e.fontMetrics().axisHeight,f=(A=l.italic)!=null?A:0}return r?cd(l,t,n,e,s,f,v):(v&&(l.style.position="relative",l.style.top=ge(v)),l)},_a=(i,e)=>{var t;if(i.symbol)t=new ue("mo",[Cn(i.name,i.mode)]),ud.has(i.name)&&t.setAttribute("largeop","false");else if(i.body)t=new ue("mo",bn(i.body,e));else{t=new ue("mi",[new Bt(i.name.slice(1))]);var n=new ue("mo",[Cn("⁡","text")]);i.parentIsSupSub?t=new ue("mrow",[t,n]):t=Fh([t,n])}return t},Kv={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};Se({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=n;return r.length===1&&(r=Kv[r]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Xr,mathmlBuilder:_a});Se({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:zt(n)}},htmlBuilder:Xr,mathmlBuilder:_a});var Zv={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};Se({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Xr,mathmlBuilder:_a});Se({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Xr,mathmlBuilder:_a});Se({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(i){var{parser:e,funcName:t}=i,n=t;return n.length===1&&(n=Zv[n]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:Xr,mathmlBuilder:_a});var hd=(i,e)=>{var t,n,r=!1,a;i.type==="supsub"?(t=i.sup,n=i.sub,a=rt(i.base,"operatorname"),r=!0):a=rt(i,"operatorname");var s;if(a.body.length>0){for(var o=a.body.map(d=>{var p="text"in d?d.text:void 0;return typeof p=="string"?{type:"textord",mode:d.mode,text:p}:d}),l=Wt(o,e.withFont("mathrm"),!0),c=0;c<l.length;c++){var u=l[c];u instanceof _n&&(u.text=u.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}s=oe(["mop"],l,e)}else s=oe(["mop"],[],e);return r?cd(s,t,n,e,e.style,0,0):s},jv=(i,e)=>{for(var t=bn(i.body,e.withFont("mathrm")),n=!0,r=0;r<t.length;r++){var a=t[r];if(!(a instanceof zh))if(a instanceof ue)switch(a.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var s=a.children[0];a.children.length===1&&s instanceof Bt?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var o=t.map(u=>u.toText()).join("");t=[new Bt(o)]}var l=new ue("mi",t);l.setAttribute("mathvariant","normal");var c=new ue("mo",[Cn("⁡","text")]);return i.parentIsSupSub?new ue("mrow",[l,c]):Fh([l,c])};Se({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"operatorname",mode:t.mode,body:zt(r),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:hd,mathmlBuilder:jv});E("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");ir({type:"ordgroup",htmlBuilder(i,e){return i.semisimple?fi(Wt(i.body,e,!1)):oe(["mord"],Wt(i.body,e,!0),e)},mathmlBuilder(i,e){return Li(i.body,e,!0)}});Se({type:"overline",names:["\\overline"],props:{numArgs:1},handler(i,e){var{parser:t}=i,n=e[0];return{type:"overline",mode:t.mode,body:n}},htmlBuilder(i,e){var t=ft(i.body,e.havingCrampedStyle()),n=zr("overline-line",e),r=e.fontMetrics().defaultRuleThickness,a=dt({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*r},{type:"elem",elem:n},{type:"kern",size:r}]});return oe(["mord","overline"],[a],e)},mathmlBuilder(i,e){var t=new ue("mo",[new Bt("‾")]);t.setAttribute("stretchy","true");var n=new ue("mover",[Mt(i.body,e),t]);return n.setAttribute("accent","true"),n}});Se({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"phantom",mode:t.mode,body:zt(n)}},htmlBuilder:(i,e)=>{var t=Wt(i.body,e.withPhantom(),!1);return fi(t)},mathmlBuilder:(i,e)=>{var t=bn(i.body,e);return new ue("mphantom",t)}});E("\\hphantom","\\smash{\\phantom{#1}}");Se({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"vphantom",mode:t.mode,body:n}},htmlBuilder:(i,e)=>{var t=oe(["inner"],[ft(i.body,e.withPhantom())]),n=oe(["fix"],[]);return oe(["mord","rlap"],[t,n],e)},mathmlBuilder:(i,e)=>{var t=bn(zt(i.body),e),n=new ue("mphantom",t),r=new ue("mpadded",[n]);return r.setAttribute("width","0px"),r}});Se({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i,n=rt(e[0],"size").value,r=e[1];return{type:"raisebox",mode:t.mode,dy:n,body:r}},htmlBuilder(i,e){var t=ft(i.body,e),n=It(i.dy,e);return dt({positionType:"shift",positionData:-n,children:[{type:"elem",elem:t}]})},mathmlBuilder(i,e){var t=new ue("mpadded",[Mt(i.body,e)]),n=i.dy.number+i.dy.unit;return t.setAttribute("voffset",n),t}});Se({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(i){var{parser:e}=i;return{type:"internal",mode:e.mode}}});Se({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(i,e,t){var{parser:n}=i,r=t[0],a=rt(e[0],"size"),s=rt(e[1],"size");return{type:"rule",mode:n.mode,shift:r&&rt(r,"size").value,width:a.value,height:s.value}},htmlBuilder(i,e){var t=oe(["mord","rule"],[],e),n=It(i.width,e),r=It(i.height,e),a=i.shift?It(i.shift,e):0;return t.style.borderRightWidth=ge(n),t.style.borderTopWidth=ge(r),t.style.bottom=ge(a),t.width=n,t.height=r+a,t.depth=-a,t.maxFontSize=r*1.125*e.sizeMultiplier,t},mathmlBuilder(i,e){var t=It(i.width,e),n=It(i.height,e),r=i.shift?It(i.shift,e):0,a=e.color&&e.getColor()||"black",s=new ue("mspace");s.setAttribute("mathbackground",a),s.setAttribute("width",ge(t)),s.setAttribute("height",ge(n));var o=new ue("mpadded",[s]);return r>=0?o.setAttribute("height",ge(r)):(o.setAttribute("height",ge(r)),o.setAttribute("depth",ge(-r))),o.setAttribute("voffset",ge(r)),o}});function dd(i,e,t){for(var n=Wt(i,e,!1),r=e.sizeMultiplier/t.sizeMultiplier,a=0;a<n.length;a++){var s=n[a].classes.indexOf("sizing");s<0?Array.prototype.push.apply(n[a].classes,e.sizingClasses(t)):n[a].classes[s+1]==="reset-size"+e.size&&(n[a].classes[s+1]="reset-size"+t.size),n[a].height*=r,n[a].depth*=r}return fi(n)}var wu=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],Jv=(i,e)=>{var t=e.havingSize(i.size);return dd(i.body,t,e)};Se({type:"sizing",names:wu,props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{breakOnTokenText:t,funcName:n,parser:r}=i,a=r.parseExpression(!1,t);return{type:"sizing",mode:r.mode,size:wu.indexOf(n)+1,body:a}},htmlBuilder:Jv,mathmlBuilder:(i,e)=>{var t=e.havingSize(i.size),n=bn(i.body,t),r=new ue("mstyle",n);return r.setAttribute("mathsize",ge(t.sizeMultiplier)),r}});Se({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(i,e,t)=>{var{parser:n}=i,r=!1,a=!1,s=t[0]&&rt(t[0],"ordgroup");if(s)for(var o,l=0;l<s.body.length;++l){var c=s.body[l];if(o=Us(c).text,o==="t")r=!0;else if(o==="b")a=!0;else{r=!1,a=!1;break}}else r=!0,a=!0;var u=e[0];return{type:"smash",mode:n.mode,body:u,smashHeight:r,smashDepth:a}},htmlBuilder:(i,e)=>{var t=oe([],[ft(i.body,e)]);if(!i.smashHeight&&!i.smashDepth)return t;if(i.smashHeight&&(t.height=0),i.smashDepth&&(t.depth=0),i.smashHeight&&i.smashDepth)return oe(["mord","smash"],[t],e);if(t.children)for(var n=0;n<t.children.length;n++)i.smashHeight&&(t.children[n].height=0),i.smashDepth&&(t.children[n].depth=0);var r=dt({positionType:"firstBaseline",children:[{type:"elem",elem:t}]});return oe(["mord"],[r],e)},mathmlBuilder:(i,e)=>{var t=new ue("mpadded",[Mt(i.body,e)]);return i.smashHeight&&t.setAttribute("height","0px"),i.smashDepth&&t.setAttribute("depth","0px"),t}});Se({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n}=i,r=t[0],a=e[0];return{type:"sqrt",mode:n.mode,body:a,index:r}},htmlBuilder(i,e){var t=ft(i.body,e.havingCrampedStyle());t.height===0&&(t.height=e.fontMetrics().xHeight),t=Br(t,e);var n=e.fontMetrics(),r=n.defaultRuleThickness,a=r;e.style.id<je.TEXT.id&&(a=e.fontMetrics().xHeight);var s=r+a/4,o=t.height+t.depth+s+r,{span:l,ruleWidth:c,advanceWidth:u}=Bv(o,e),d=l.height-c;d>t.height+t.depth+s&&(s=(s+d-t.height-t.depth)/2);var p=l.height-t.height-s-c;t.style.paddingLeft=ge(u);var g=dt({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+p)},{type:"elem",elem:l},{type:"kern",size:c}]});if(i.index){var x=e.havingStyle(je.SCRIPTSCRIPT),b=ft(i.index,x,e),v=.6*(g.height-g.depth),f=dt({positionType:"shift",positionData:-v,children:[{type:"elem",elem:b}]}),A=oe(["root"],[f]);return oe(["mord","sqrt"],[A,g],e)}else return oe(["mord","sqrt"],[g],e)},mathmlBuilder(i,e){var{body:t,index:n}=i;return n?new ue("mroot",[Mt(t,e),Mt(n,e)]):new ue("msqrt",[Mt(t,e)])}});var el={display:je.DISPLAY,text:je.TEXT,script:je.SCRIPT,scriptscript:je.SCRIPTSCRIPT};function Qv(i){return i in el}Se({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i,e){var{breakOnTokenText:t,funcName:n,parser:r}=i,a=r.parseExpression(!0,t),s=n.slice(1,n.length-5);if(!Qv(s))throw new Error("Unknown style: "+s);return{type:"styling",mode:r.mode,style:s,body:a}},htmlBuilder(i,e){var t=el[i.style],n=e.havingStyle(t);return i.resetFont&&(n=n.withFont("")),dd(i.body,n,e)},mathmlBuilder(i,e){var t=el[i.style],n=e.havingStyle(t);i.resetFont&&(n=n.withFont(""));var r=bn(i.body,n),a=new ue("mstyle",r),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=s[i.style];return a.setAttribute("scriptlevel",o[0]),a.setAttribute("displaystyle",o[1]),a}});var e3=function(e,t){var n=e.base;if(n)if(n.type==="op"){var r=n.limits&&(t.style.size===je.DISPLAY.size||n.alwaysHandleSupSub);return r?Xr:null}else if(n.type==="operatorname"){var a=n.alwaysHandleSupSub&&(t.style.size===je.DISPLAY.size||n.limits);return a?hd:null}else{if(n.type==="accent")return hi(n.base)?Tl:null;if(n.type==="horizBrace"){var s=!e.sub;return s===n.isOver?ld:null}else return null}else return null};ir({type:"supsub",htmlBuilder(i,e){var t=e3(i,e);if(t)return t(i,e);var{base:n,sup:r,sub:a}=i,s=ft(n,e),o,l,c=e.fontMetrics(),u=0,d=0,p=n&&hi(n);if(r){var g=e.havingStyle(e.style.sup());o=ft(r,g,e),p||(u=s.height-g.fontMetrics().supDrop*g.sizeMultiplier/e.sizeMultiplier)}if(a){var x=e.havingStyle(e.style.sub());l=ft(a,x,e),p||(d=s.depth+x.fontMetrics().subDrop*x.sizeMultiplier/e.sizeMultiplier)}var b;e.style===je.DISPLAY?b=c.sup1:e.style.cramped?b=c.sup3:b=c.sup2;var v=e.sizeMultiplier,f=ge(.5/c.ptPerEm/v),A=null;if(l){var R=i.base&&i.base.type==="op"&&i.base.name&&(i.base.name==="\\oiint"||i.base.name==="\\oiiint");if(s instanceof _n||R){var w;A=ge(-((w=s.italic)!=null?w:0))}}var P;if(o&&l){u=Math.max(u,b,o.depth+.25*c.xHeight),d=Math.max(d,c.sub2);var L=c.defaultRuleThickness,N=4*L;if(u-o.depth-(l.height-d)<N){d=N-(u-o.depth)+l.height;var D=.8*c.xHeight-(u-o.depth);D>0&&(u+=D,d-=D)}var y=[{type:"elem",elem:l,shift:d,marginRight:f,marginLeft:A},{type:"elem",elem:o,shift:-u,marginRight:f}];P=dt({positionType:"individualShift",children:y})}else if(l){d=Math.max(d,c.sub1,l.height-.8*c.xHeight);var M=[{type:"elem",elem:l,marginLeft:A,marginRight:f}];P=dt({positionType:"shift",positionData:d,children:M})}else if(o)u=Math.max(u,b,o.depth+.25*c.xHeight),P=dt({positionType:"shift",positionData:-u,children:[{type:"elem",elem:o,marginRight:f}]});else throw new Error("supsub must have either sup or sub.");var C=K0(s,"right")||"mord";return oe([C],[s,oe(["msupsub"],[P])],e)},mathmlBuilder(i,e){var t=!1,n,r;i.base&&i.base.type==="horizBrace"&&(r=!!i.sup,r===i.base.isOver&&(t=!0,n=i.base.isOver)),i.base&&(i.base.type==="op"||i.base.type==="operatorname")&&(i.base.parentIsSupSub=!0);var a=[Mt(i.base,e)];i.sub&&a.push(Mt(i.sub,e)),i.sup&&a.push(Mt(i.sup,e));var s;if(t)s=n?"mover":"munder";else if(i.sub)if(i.sup){var c=i.base;c&&c.type==="op"&&c.limits&&e.style===je.DISPLAY||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(e.style===je.DISPLAY||c.limits)?s="munderover":s="msubsup"}else{var l=i.base;l&&l.type==="op"&&l.limits&&(e.style===je.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||e.style===je.DISPLAY)?s="munder":s="msub"}else{var o=i.base;o&&o.type==="op"&&o.limits&&(e.style===je.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||e.style===je.DISPLAY)?s="mover":s="msup"}return new ue(s,a)}});ir({type:"atom",htmlBuilder(i,e){return Ml(i.text,i.mode,e,["m"+i.family])},mathmlBuilder(i,e){var t=new ue("mo",[Cn(i.text,i.mode)]);if(i.family==="bin"){var n=El(i,e);n==="bold-italic"&&t.setAttribute("mathvariant",n)}else i.family==="punct"?t.setAttribute("separator","true"):(i.family==="open"||i.family==="close")&&t.setAttribute("stretchy","false");return t}});var fd={mi:"italic",mn:"normal",mtext:"normal"};ir({type:"mathord",htmlBuilder(i,e){return Ps(i,e,"mathord")},mathmlBuilder(i,e){var t=new ue("mi",[Cn(i.text,i.mode,e)]),n=El(i,e)||"italic";return n!==fd[t.type]&&t.setAttribute("mathvariant",n),t}});ir({type:"textord",htmlBuilder(i,e){return Ps(i,e,"textord")},mathmlBuilder(i,e){var t=Cn(i.text,i.mode,e),n=El(i,e)||"normal",r;return i.mode==="text"?r=new ue("mtext",[t]):/[0-9]/.test(i.text)?r=new ue("mn",[t]):i.text==="\\prime"?r=new ue("mo",[t]):r=new ue("mi",[t]),n!==fd[r.type]&&r.setAttribute("mathvariant",n),r}});var Ho={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Go={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};ir({type:"spacing",htmlBuilder(i,e){if(Go.hasOwnProperty(i.text)){var t=Go[i.text].className||"";if(i.mode==="text"){var n=Ps(i,e,"textord");return n.classes.push(t),n}else return oe(["mspace",t],[Ml(i.text,i.mode,e)],e)}else{if(Ho.hasOwnProperty(i.text))return oe(["mspace",Ho[i.text]],[],e);throw new ce('Unknown type of space "'+i.text+'"')}},mathmlBuilder(i,e){var t;if(Go.hasOwnProperty(i.text))t=new ue("mtext",[new Bt(" ")]);else{if(Ho.hasOwnProperty(i.text))return new ue("mspace");throw new ce('Unknown type of space "'+i.text+'"')}return t}});var Eu=()=>{var i=new ue("mtd",[]);return i.setAttribute("width","50%"),i};ir({type:"tag",mathmlBuilder(i,e){var t=new ue("mtable",[new ue("mtr",[Eu(),new ue("mtd",[Li(i.body,e)]),Eu(),new ue("mtd",[Li(i.tag,e)])])]);return t.setAttribute("width","100%"),t}});var Tu={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Au={"\\textbf":"textbf","\\textmd":"textmd"},t3={"\\textit":"textit","\\textup":"textup"},Ru=(i,e)=>{var t=i.font;if(t){if(Tu[t])return e.withTextFontFamily(Tu[t]);if(Au[t])return e.withTextFontWeight(Au[t]);if(t==="\\emph")return e.fontShape==="textit"?e.withTextFontShape("textup"):e.withTextFontShape("textit")}else return e;return e.withTextFontShape(t3[t])};Se({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"text",mode:t.mode,body:zt(r),font:n}},htmlBuilder(i,e){var t=Ru(i,e),n=Wt(i.body,t,!0);return oe(["mord","text"],n,t)},mathmlBuilder(i,e){var t=Ru(i,e);return Li(i.body,t)}});Se({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"underline",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=ft(i.body,e),n=zr("underline-line",e),r=e.fontMetrics().defaultRuleThickness,a=dt({positionType:"top",positionData:t.height,children:[{type:"kern",size:r},{type:"elem",elem:n},{type:"kern",size:3*r},{type:"elem",elem:t}]});return oe(["mord","underline"],[a],e)},mathmlBuilder(i,e){var t=new ue("mo",[new Bt("‾")]);t.setAttribute("stretchy","true");var n=new ue("munder",[Mt(i.body,e),t]);return n.setAttribute("accentunder","true"),n}});Se({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"vcenter",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=ft(i.body,e),n=e.fontMetrics().axisHeight,r=.5*(t.height-n-(t.depth+n));return dt({positionType:"shift",positionData:r,children:[{type:"elem",elem:t}]})},mathmlBuilder(i,e){var t=new ue("mpadded",[Mt(i.body,e)],["vcenter"]);return new ue("mrow",[t])}});Se({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(i,e,t){throw new ce("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(i,e){for(var t=Cu(i),n=[],r=e.havingStyle(e.style.text()),a=0;a<t.length;a++){var s=t[a];s==="~"&&(s="\\textasciitilde"),n.push(tn(s,"Typewriter-Regular",i.mode,r,["mord","texttt"]))}return oe(["mord","text"].concat(r.sizingClasses(e)),Dh(n),r)},mathmlBuilder(i,e){var t=new Bt(Cu(i)),n=new ue("mtext",[t]);return n.setAttribute("mathvariant","monospace"),n}});var Cu=i=>i.body.replace(/ /g,i.star?"␣":" "),Ei=Uh,pd=`[ \r
	]`,n3="\\\\[a-zA-Z@]+",i3="\\\\[^\uD800-\uDFFF]",r3="("+n3+")"+pd+"*",a3=`\\\\(
|[ \r	]+
?)[ \r	]*`,tl="[̀-ͯ]",s3=new RegExp(tl+"+$"),o3="("+pd+"+)|"+(a3+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(tl+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(tl+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+r3)+("|"+i3+")");class Du{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(o3,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new xn("EOF",new cn(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new ce("Unexpected character: '"+e[t]+"'",new xn(e[t],new cn(this,t,t+1)));var r=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[r]===14){var a=e.indexOf(`
`,this.tokenRegex.lastIndex);return a===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=a+1,this.lex()}return new xn(r,new cn(this,t,this.tokenRegex.lastIndex))}}class l3{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new ce("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var a=this.undefStack[this.undefStack.length-1];a&&!a.hasOwnProperty(e)&&(a[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}}var c3=id;E("\\noexpand",function(i){var e=i.popToken();return i.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});E("\\expandafter",function(i){var e=i.popToken();return i.expandOnce(!0),{tokens:[e],numArgs:0}});E("\\@firstoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[0],numArgs:0}});E("\\@secondoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[1],numArgs:0}});E("\\@ifnextchar",function(i){var e=i.consumeArgs(3);i.consumeSpaces();var t=i.future();return e[0].length===1&&e[0][0].text===t.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});E("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");E("\\TextOrMath",function(i){var e=i.consumeArgs(2);return i.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var Pu={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};E("\\char",function(i){var e=i.popToken(),t,n=0;if(e.text==="'")t=8,e=i.popToken();else if(e.text==='"')t=16,e=i.popToken();else if(e.text==="`")if(e=i.popToken(),e.text[0]==="\\")n=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new ce("\\char` missing argument");n=e.text.charCodeAt(0)}else t=10;if(t){if(n=Pu[e.text],n==null||n>=t)throw new ce("Invalid base-"+t+" digit "+e.text);for(var r;(r=Pu[i.future().text])!=null&&r<t;)n*=t,n+=r,i.popToken()}return"\\@char{"+n+"}"});var Dl=(i,e,t,n)=>{var r=i.consumeArg().tokens;if(r.length!==1)throw new ce("\\newcommand's first argument must be a macro name");var a=r[0].text,s=i.isDefined(a);if(s&&!e)throw new ce("\\newcommand{"+a+"} attempting to redefine "+(a+"; use \\renewcommand"));if(!s&&!t)throw new ce("\\renewcommand{"+a+"} when command "+a+" does not yet exist; use \\newcommand");var o=0;if(r=i.consumeArg().tokens,r.length===1&&r[0].text==="["){for(var l="",c=i.expandNextToken();c.text!=="]"&&c.text!=="EOF";)l+=c.text,c=i.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new ce("Invalid number of arguments: "+l);o=parseInt(l),r=i.consumeArg().tokens}return s&&n||i.macros.set(a,{tokens:r,numArgs:o}),""};E("\\newcommand",i=>Dl(i,!1,!0,!1));E("\\renewcommand",i=>Dl(i,!0,!1,!1));E("\\providecommand",i=>Dl(i,!0,!0,!0));E("\\message",i=>{var e=i.consumeArgs(1)[0];return console.log(e.reverse().map(t=>t.text).join("")),""});E("\\errmessage",i=>{var e=i.consumeArgs(1)[0];return console.error(e.reverse().map(t=>t.text).join("")),""});E("\\show",i=>{var e=i.popToken(),t=e.text;return console.log(e,i.macros.get(t),Ei[t],Tt.math[t],Tt.text[t]),""});E("\\bgroup","{");E("\\egroup","}");E("~","\\nobreakspace");E("\\lq","`");E("\\rq","'");E("\\aa","\\r a");E("\\AA","\\r A");E("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");E("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");E("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");E("ℬ","\\mathscr{B}");E("ℰ","\\mathscr{E}");E("ℱ","\\mathscr{F}");E("ℋ","\\mathscr{H}");E("ℐ","\\mathscr{I}");E("ℒ","\\mathscr{L}");E("ℳ","\\mathscr{M}");E("ℛ","\\mathscr{R}");E("ℭ","\\mathfrak{C}");E("ℌ","\\mathfrak{H}");E("ℨ","\\mathfrak{Z}");E("\\Bbbk","\\Bbb{k}");E("\\llap","\\mathllap{\\textrm{#1}}");E("\\rlap","\\mathrlap{\\textrm{#1}}");E("\\clap","\\mathclap{\\textrm{#1}}");E("\\mathstrut","\\vphantom{(}");E("\\underbar","\\underline{\\text{#1}}");E("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');E("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");E("\\ne","\\neq");E("≠","\\neq");E("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");E("∉","\\notin");E("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");E("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");E("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");E("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");E("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");E("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");E("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");E("⟂","\\perp");E("‼","\\mathclose{!\\mkern-0.8mu!}");E("∌","\\notni");E("⌜","\\ulcorner");E("⌝","\\urcorner");E("⌞","\\llcorner");E("⌟","\\lrcorner");E("©","\\copyright");E("®","\\textregistered");E("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');E("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');E("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');E("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');E("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");E("⋮","\\vdots");E("\\varGamma","\\mathit{\\Gamma}");E("\\varDelta","\\mathit{\\Delta}");E("\\varTheta","\\mathit{\\Theta}");E("\\varLambda","\\mathit{\\Lambda}");E("\\varXi","\\mathit{\\Xi}");E("\\varPi","\\mathit{\\Pi}");E("\\varSigma","\\mathit{\\Sigma}");E("\\varUpsilon","\\mathit{\\Upsilon}");E("\\varPhi","\\mathit{\\Phi}");E("\\varPsi","\\mathit{\\Psi}");E("\\varOmega","\\mathit{\\Omega}");E("\\substack","\\begin{subarray}{c}#1\\end{subarray}");E("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");E("\\boxed","\\fbox{$\\displaystyle{#1}$}");E("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");E("\\implies","\\DOTSB\\;\\Longrightarrow\\;");E("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");E("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");E("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Iu={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},u3=new Set(["bin","rel"]);E("\\dots",function(i){var e="\\dotso",t=i.expandAfterFuture().text;return t in Iu?e=Iu[t]:(t.slice(0,4)==="\\not"||t in Tt.math&&u3.has(Tt.math[t].group))&&(e="\\dotsb"),e});var Pl={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};E("\\dotso",function(i){var e=i.future().text;return e in Pl?"\\ldots\\,":"\\ldots"});E("\\dotsc",function(i){var e=i.future().text;return e in Pl&&e!==","?"\\ldots\\,":"\\ldots"});E("\\cdots",function(i){var e=i.future().text;return e in Pl?"\\@cdots\\,":"\\@cdots"});E("\\dotsb","\\cdots");E("\\dotsm","\\cdots");E("\\dotsi","\\!\\cdots");E("\\dotsx","\\ldots\\,");E("\\DOTSI","\\relax");E("\\DOTSB","\\relax");E("\\DOTSX","\\relax");E("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");E("\\,","\\tmspace+{3mu}{.1667em}");E("\\thinspace","\\,");E("\\>","\\mskip{4mu}");E("\\:","\\tmspace+{4mu}{.2222em}");E("\\medspace","\\:");E("\\;","\\tmspace+{5mu}{.2777em}");E("\\thickspace","\\;");E("\\!","\\tmspace-{3mu}{.1667em}");E("\\negthinspace","\\!");E("\\negmedspace","\\tmspace-{4mu}{.2222em}");E("\\negthickspace","\\tmspace-{5mu}{.277em}");E("\\enspace","\\kern.5em ");E("\\enskip","\\hskip.5em\\relax");E("\\quad","\\hskip1em\\relax");E("\\qquad","\\hskip2em\\relax");E("\\tag","\\@ifstar\\tag@literal\\tag@paren");E("\\tag@paren","\\tag@literal{({#1})}");E("\\tag@literal",i=>{if(i.macros.get("\\df@tag"))throw new ce("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});E("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");E("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");E("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");E("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");E("\\newline","\\\\\\relax");E("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var md=ge(Gn["Main-Regular"][84][1]-.7*Gn["Main-Regular"][65][1]);E("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+md+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");E("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+md+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");E("\\hspace","\\@ifstar\\@hspacer\\@hspace");E("\\@hspace","\\hskip #1\\relax");E("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");E("\\ordinarycolon",":");E("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");E("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');E("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');E("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');E("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');E("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');E("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');E("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');E("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');E("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');E("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');E("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');E("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');E("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');E("∷","\\dblcolon");E("∹","\\eqcolon");E("≔","\\coloneqq");E("≕","\\eqqcolon");E("⩴","\\Coloneqq");E("\\ratio","\\vcentcolon");E("\\coloncolon","\\dblcolon");E("\\colonequals","\\coloneqq");E("\\coloncolonequals","\\Coloneqq");E("\\equalscolon","\\eqqcolon");E("\\equalscoloncolon","\\Eqqcolon");E("\\colonminus","\\coloneq");E("\\coloncolonminus","\\Coloneq");E("\\minuscolon","\\eqcolon");E("\\minuscoloncolon","\\Eqcolon");E("\\coloncolonapprox","\\Colonapprox");E("\\coloncolonsim","\\Colonsim");E("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");E("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");E("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");E("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");E("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");E("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");E("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");E("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");E("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");E("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");E("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");E("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");E("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");E("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");E("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");E("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");E("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");E("\\nleqq","\\html@mathml{\\@nleqq}{≰}");E("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");E("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");E("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");E("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");E("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");E("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");E("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");E("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");E("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");E("\\imath","\\html@mathml{\\@imath}{ı}");E("\\jmath","\\html@mathml{\\@jmath}{ȷ}");E("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");E("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");E("⟦","\\llbracket");E("⟧","\\rrbracket");E("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");E("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");E("⦃","\\lBrace");E("⦄","\\rBrace");E("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");E("⦵","\\minuso");E("\\darr","\\downarrow");E("\\dArr","\\Downarrow");E("\\Darr","\\Downarrow");E("\\lang","\\langle");E("\\rang","\\rangle");E("\\uarr","\\uparrow");E("\\uArr","\\Uparrow");E("\\Uarr","\\Uparrow");E("\\N","\\mathbb{N}");E("\\R","\\mathbb{R}");E("\\Z","\\mathbb{Z}");E("\\alef","\\aleph");E("\\alefsym","\\aleph");E("\\Alpha","\\mathrm{A}");E("\\Beta","\\mathrm{B}");E("\\bull","\\bullet");E("\\Chi","\\mathrm{X}");E("\\clubs","\\clubsuit");E("\\cnums","\\mathbb{C}");E("\\Complex","\\mathbb{C}");E("\\Dagger","\\ddagger");E("\\diamonds","\\diamondsuit");E("\\empty","\\emptyset");E("\\Epsilon","\\mathrm{E}");E("\\Eta","\\mathrm{H}");E("\\exist","\\exists");E("\\harr","\\leftrightarrow");E("\\hArr","\\Leftrightarrow");E("\\Harr","\\Leftrightarrow");E("\\hearts","\\heartsuit");E("\\image","\\Im");E("\\infin","\\infty");E("\\Iota","\\mathrm{I}");E("\\isin","\\in");E("\\Kappa","\\mathrm{K}");E("\\larr","\\leftarrow");E("\\lArr","\\Leftarrow");E("\\Larr","\\Leftarrow");E("\\lrarr","\\leftrightarrow");E("\\lrArr","\\Leftrightarrow");E("\\Lrarr","\\Leftrightarrow");E("\\Mu","\\mathrm{M}");E("\\natnums","\\mathbb{N}");E("\\Nu","\\mathrm{N}");E("\\Omicron","\\mathrm{O}");E("\\plusmn","\\pm");E("\\rarr","\\rightarrow");E("\\rArr","\\Rightarrow");E("\\Rarr","\\Rightarrow");E("\\real","\\Re");E("\\reals","\\mathbb{R}");E("\\Reals","\\mathbb{R}");E("\\Rho","\\mathrm{P}");E("\\sdot","\\cdot");E("\\sect","\\S");E("\\spades","\\spadesuit");E("\\sub","\\subset");E("\\sube","\\subseteq");E("\\supe","\\supseteq");E("\\Tau","\\mathrm{T}");E("\\thetasym","\\vartheta");E("\\weierp","\\wp");E("\\Zeta","\\mathrm{Z}");E("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");E("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");E("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");E("\\bra","\\mathinner{\\langle{#1}|}");E("\\ket","\\mathinner{|{#1}\\rangle}");E("\\braket","\\mathinner{\\langle{#1}\\rangle}");E("\\Bra","\\left\\langle#1\\right|");E("\\Ket","\\left|#1\\right\\rangle");var gd=i=>e=>{var t=e.consumeArg().tokens,n=e.consumeArg().tokens,r=e.consumeArg().tokens,a=e.consumeArg().tokens,s=e.macros.get("|"),o=e.macros.get("\\|");e.macros.beginGroup();var l=d=>p=>{i&&(p.macros.set("|",s),r.length&&p.macros.set("\\|",o));var g=d;if(!d&&r.length){var x=p.future();x.text==="|"&&(p.popToken(),g=!0)}return{tokens:g?r:n,numArgs:0}};e.macros.set("|",l(!1)),r.length&&e.macros.set("\\|",l(!0));var c=e.consumeArg().tokens,u=e.expandTokens([...a,...c,...t]);return e.macros.endGroup(),{tokens:u.reverse(),numArgs:0}};E("\\bra@ket",gd(!1));E("\\bra@set",gd(!0));E("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");E("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");E("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");E("\\angln","{\\angl n}");E("\\blue","\\textcolor{##6495ed}{#1}");E("\\orange","\\textcolor{##ffa500}{#1}");E("\\pink","\\textcolor{##ff00af}{#1}");E("\\red","\\textcolor{##df0030}{#1}");E("\\green","\\textcolor{##28ae7b}{#1}");E("\\gray","\\textcolor{gray}{#1}");E("\\purple","\\textcolor{##9d38bd}{#1}");E("\\blueA","\\textcolor{##ccfaff}{#1}");E("\\blueB","\\textcolor{##80f6ff}{#1}");E("\\blueC","\\textcolor{##63d9ea}{#1}");E("\\blueD","\\textcolor{##11accd}{#1}");E("\\blueE","\\textcolor{##0c7f99}{#1}");E("\\tealA","\\textcolor{##94fff5}{#1}");E("\\tealB","\\textcolor{##26edd5}{#1}");E("\\tealC","\\textcolor{##01d1c1}{#1}");E("\\tealD","\\textcolor{##01a995}{#1}");E("\\tealE","\\textcolor{##208170}{#1}");E("\\greenA","\\textcolor{##b6ffb0}{#1}");E("\\greenB","\\textcolor{##8af281}{#1}");E("\\greenC","\\textcolor{##74cf70}{#1}");E("\\greenD","\\textcolor{##1fab54}{#1}");E("\\greenE","\\textcolor{##0d923f}{#1}");E("\\goldA","\\textcolor{##ffd0a9}{#1}");E("\\goldB","\\textcolor{##ffbb71}{#1}");E("\\goldC","\\textcolor{##ff9c39}{#1}");E("\\goldD","\\textcolor{##e07d10}{#1}");E("\\goldE","\\textcolor{##a75a05}{#1}");E("\\redA","\\textcolor{##fca9a9}{#1}");E("\\redB","\\textcolor{##ff8482}{#1}");E("\\redC","\\textcolor{##f9685d}{#1}");E("\\redD","\\textcolor{##e84d39}{#1}");E("\\redE","\\textcolor{##bc2612}{#1}");E("\\maroonA","\\textcolor{##ffbde0}{#1}");E("\\maroonB","\\textcolor{##ff92c6}{#1}");E("\\maroonC","\\textcolor{##ed5fa6}{#1}");E("\\maroonD","\\textcolor{##ca337c}{#1}");E("\\maroonE","\\textcolor{##9e034e}{#1}");E("\\purpleA","\\textcolor{##ddd7ff}{#1}");E("\\purpleB","\\textcolor{##c6b9fc}{#1}");E("\\purpleC","\\textcolor{##aa87ff}{#1}");E("\\purpleD","\\textcolor{##7854ab}{#1}");E("\\purpleE","\\textcolor{##543b78}{#1}");E("\\mintA","\\textcolor{##f5f9e8}{#1}");E("\\mintB","\\textcolor{##edf2df}{#1}");E("\\mintC","\\textcolor{##e0e5cc}{#1}");E("\\grayA","\\textcolor{##f6f7f7}{#1}");E("\\grayB","\\textcolor{##f0f1f2}{#1}");E("\\grayC","\\textcolor{##e3e5e6}{#1}");E("\\grayD","\\textcolor{##d6d8da}{#1}");E("\\grayE","\\textcolor{##babec2}{#1}");E("\\grayF","\\textcolor{##888d93}{#1}");E("\\grayG","\\textcolor{##626569}{#1}");E("\\grayH","\\textcolor{##3b3e40}{#1}");E("\\grayI","\\textcolor{##21242c}{#1}");E("\\kaBlue","\\textcolor{##314453}{#1}");E("\\kaGreen","\\textcolor{##71B307}{#1}");var vd={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class h3{constructor(e,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new l3(c3,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new Du(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,r;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:r,end:n}=this.consumeArg(["]"])}else({tokens:r,start:t,end:n}=this.consumeArg());return this.pushToken(new xn("EOF",n.loc)),this.pushTokens(r),new xn("",cn.range(t,n))}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var r=this.future(),a,s=0,o=0;do{if(a=this.popToken(),t.push(a),a.text==="{")++s;else if(a.text==="}"){if(--s,s===-1)throw new ce("Extra }",a)}else if(a.text==="EOF")throw new ce("Unexpected end of input in a macro argument, expected '"+(e&&n?e[o]:"}")+"'",a);if(e&&n)if((s===0||s===1&&e[o]==="{")&&a.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(s!==0||n);return r.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:a}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new ce("The length of delimiters doesn't match the number of args!");for(var n=t[0],r=0;r<n.length;r++){var a=this.popToken();if(n[r]!==a.text)throw new ce("Use of the macro doesn't match its definition",a)}}for(var s=[],o=0;o<e;o++)s.push(this.consumeArg(t&&t[o+1]).tokens);return s}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new ce("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(e){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||e&&r.unexpandable){if(e&&r==null&&n[0]==="\\"&&!this.isDefined(n))throw new ce("Undefined control sequence: "+n);return this.pushToken(t),!1}this.countExpansion(1);var a=r.tokens,s=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){a=a.slice();for(var o=a.length-1;o>=0;--o){var l=a[o];if(l.text==="#"){if(o===0)throw new ce("Incomplete placeholder at end of macro body",l);if(l=a[--o],l.text==="#")a.splice(o+1,1);else if(/^[1-9]$/.test(l.text))a.splice(o,2,...s[+l.text-1]);else throw new ce("Not a valid argument number",l)}}}return this.pushTokens(a),a.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text="\\relax"),e}}expandMacro(e){return this.macros.has(e)?this.expandTokens([new xn(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&(r.noexpand=!1,r.treatAsRelax=!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(n=>n.text).join("")}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var r=typeof t=="function"?t(this):t;if(typeof r=="string"){var a=0;if(r.includes("#"))for(var s=r.replace(/##/g,"");s.includes("#"+(a+1));)++a;for(var o=new Du(r,this.settings),l=[],c=o.lex();c.text!=="EOF";)l.push(c),c=o.lex();l.reverse();var u={tokens:l,numArgs:a};return u}return r}isDefined(e){return this.macros.has(e)||Ei.hasOwnProperty(e)||Tt.math.hasOwnProperty(e)||Tt.text.hasOwnProperty(e)||vd.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:Ei.hasOwnProperty(e)&&!Ei[e].primitive}}var Lu=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,as=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Vo={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Uu={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Hs{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new h3(e,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new ce("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new xn("}")),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,n}parseExpression(e,t){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var r=this.fetch();if(Hs.endOfExpression.has(r.text)||t&&r.text===t||e&&Ei[r.text]&&Ei[r.text].infix)break;var a=this.parseAtom(t);if(a){if(a.type==="internal")continue}else break;n.push(a)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(e){for(var t=-1,n,r=0;r<e.length;r++){var a=e[r];if(a.type==="infix"){if(t!==-1)throw new ce("only one infix operator per group",a.token);t=r,n=a.replaceWith}}if(t!==-1&&n){var s,o,l=e.slice(0,t),c=e.slice(t+1);l.length===1&&l[0].type==="ordgroup"?s=l[0]:s={type:"ordgroup",mode:this.mode,body:l},c.length===1&&c[0].type==="ordgroup"?o=c[0]:o={type:"ordgroup",mode:this.mode,body:c};var u;return n==="\\\\abovefrac"?u=this.callFunction(n,[s,e[t],o],[]):u=this.callFunction(n,[s,o],[]),[u]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r;do{var a;r=this.parseGroup(e)}while(((a=r)==null?void 0:a.type)==="internal");if(!r)throw new ce("Expected group after '"+n+"'",t);return r}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:"textord",mode:"text",text:e[n]});var r={type:"text",mode:this.mode,body:t},a={type:"color",mode:this.mode,color:this.settings.errorColor,body:[r]};return a}parseAtom(e){var t=this.parseGroup("atom",e);if(t?.type==="internal"||this.mode==="text")return t;for(var n,r;;){this.consumeSpaces();var a=this.fetch();if(a.text==="\\limits"||a.text==="\\nolimits"){if(t&&t.type==="op"){var s=a.text==="\\limits";t.limits=s,t.alwaysHandleSupSub=!0}else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=a.text==="\\limits");else throw new ce("Limit controls must follow a math operator",a);this.consume()}else if(a.text==="^"){if(n)throw new ce("Double superscript",a);n=this.handleSupSubscript("superscript")}else if(a.text==="_"){if(r)throw new ce("Double subscript",a);r=this.handleSupSubscript("subscript")}else if(a.text==="'"){if(n)throw new ce("Double superscript",a);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:l}}else if(as[a.text]){var c=Lu.test(a.text),u=[];for(u.push(new xn(as[a.text])),this.consume();;){var d=this.fetch().text;if(!as[d]||Lu.test(d)!==c)break;u.unshift(new xn(as[d])),this.consume()}var p=this.subparse(u);c?r={type:"ordgroup",mode:"math",body:p}:n={type:"ordgroup",mode:"math",body:p}}else break}return n||r?{type:"supsub",mode:this.mode,base:t,sup:n,sub:r}:t}parseFunction(e,t){var n=this.fetch(),r=n.text,a=Ei[r];if(!a)return null;if(this.consume(),t&&t!=="atom"&&!a.allowedInArgument)throw new ce("Got function '"+r+"' with no arguments"+(t?" as "+t:""),n);if(this.mode==="text"&&!a.allowedInText)throw new ce("Can't use function '"+r+"' in text mode",n);if(this.mode==="math"&&a.allowedInMath===!1)throw new ce("Can't use function '"+r+"' in math mode",n);var{args:s,optArgs:o}=this.parseArguments(r,a);return this.callFunction(r,s,o,n,e)}callFunction(e,t,n,r,a){var s={funcName:e,parser:this,token:r,breakOnTokenText:a},o=Ei[e];if(o&&o.handler)return o.handler(s,t,n);throw new ce("No function handler for "+e)}parseArguments(e,t){var n=t.numArgs+t.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var r=[],a=[],s=0;s<n;s++){var o=t.argTypes&&t.argTypes[s],l=s<t.numOptionalArgs;("primitive"in t&&t.primitive&&o==null||t.type==="sqrt"&&s===1&&a[0]==null)&&(o="primitive");var c=this.parseGroupOfType("argument to '"+e+"'",o,l);if(l)a.push(c);else if(c!=null)r.push(c);else throw new ce("Null argument, please report this as a bug")}return{args:r,optArgs:a}}parseGroupOfType(e,t,n){switch(t){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,t);case"hbox":{var r=this.parseArgumentGroup(n,"text");return r!=null?{type:"styling",mode:r.mode,body:[r],style:"text",resetFont:!0}:null}case"raw":{var a=this.parseStringGroup("raw",n);return a!=null?{type:"raw",mode:"text",string:a.text}:null}case"primitive":{if(n)throw new ce("A primitive argument cannot be optional");var s=this.parseGroup(e);if(s==null)throw new ce("Expected group as "+e,this.fetch());return s}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new ce("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e,t){var n=this.gullet.scanArgument(t);if(n==null)return null;for(var r="",a;(a=this.fetch()).text!=="EOF";)r+=a.text,this.consume();return this.consume(),n.text=r,n}parseRegexGroup(e,t){for(var n=this.fetch(),r=n,a="",s;(s=this.fetch()).text!=="EOF"&&e.test(a+s.text);)r=s,a+=r.text,this.consume();if(a==="")throw new ce("Invalid "+t+": '"+n.text+"'",n);return n.range(r,a)}parseColorGroup(e){var t=this.parseStringGroup("color",e);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new ce("Invalid color: '"+t.text+"'",t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r="#"+r),{type:"color-token",mode:this.mode,color:r}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup("size",e),!t)return null;!e&&t.text.length===0&&(t.text="0pt",n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new ce("Invalid size: '"+t.text+"'",t);var a={number:+(r[1]+r[2]),unit:r[3]};if(!Eh(a))throw new ce("Invalid unit: '"+a.unit+"'",t);return{type:"size",mode:this.mode,value:a,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup("url",e);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var a=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var s={type:"ordgroup",mode:this.mode,loc:n.loc,body:a};return t&&this.switchMode(r),s}parseGroup(e,t){var n=this.fetch(),r=n.text,a;if(r==="{"||r==="\\begingroup"){this.consume();var s=r==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,s),l=this.fetch();this.expect(s),this.gullet.endGroup(),a={type:"ordgroup",mode:this.mode,loc:cn.range(n,l),body:o,semisimple:r==="\\begingroup"||void 0}}else if(a=this.parseFunction(t,e)||this.parseSymbol(),a==null&&r[0]==="\\"&&!vd.hasOwnProperty(r)){if(this.settings.throwOnError)throw new ce("Undefined control sequence: "+r,n);a=this.formatUnsupportedCmd(r),this.consume()}return a}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var r=e[n];if(r.type==="textord"){var a=r.text,s=e[n+1];if(!(!s||s.type!=="textord")){if(a==="-"&&s.text==="-"){var o=e[n+2];n+1<t&&o&&o.type==="textord"&&o.text==="-"?(e.splice(n,3,{type:"textord",mode:"text",loc:cn.range(r,o),text:"---"}),t-=2):(e.splice(n,2,{type:"textord",mode:"text",loc:cn.range(r,s),text:"--"}),t-=1)}(a==="'"||a==="`")&&s.text===a&&(e.splice(n,2,{type:"textord",mode:"text",loc:cn.range(r,s),text:a+a}),t-=1)}}}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)==="*";if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new ce(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:r}}Uu.hasOwnProperty(t[0])&&!Tt[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',e),t=Uu[t[0]]+t.slice(1));var a=s3.exec(t);a&&(t=t.substring(0,a.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var s;if(Tt[this.mode][t]){this.settings.strict&&this.mode==="math"&&H0.includes(t)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',e);var o=Tt[this.mode][t].group,l=cn.range(e),c;Av(o)?c={type:"atom",mode:this.mode,family:o,loc:l,text:t}:c={type:o,mode:this.mode,loc:l,text:t},s=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(wh(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),e)),s={type:"textord",mode:"text",loc:cn.range(e),text:t};else return null;if(this.consume(),a)for(var u=0;u<a[0].length;u++){var d=a[0][u];if(!Vo[d])throw new ce("Unknown accent ' "+d+"'",e);var p=Vo[d][this.mode]||Vo[d].text;if(!p)throw new ce("Accent "+d+" unsupported in "+this.mode+" mode",e);s={type:"accent",mode:this.mode,loc:cn.range(e),label:p,isStretchy:!1,isShifty:!0,base:s}}return s}}Hs.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Il=function(e,t){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new Hs(e,t);delete n.gullet.macros.current["\\df@tag"];var r=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new ce("\\tag works only in display equations");r=[{type:"tag",mode:"text",body:r,tag:n.subparse([new xn("\\df@tag")])}]}return r},xd=function(e,t,n){t.textContent="";var r=Ll(e,n).toNode();t.appendChild(r)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),xd=function(){throw new ce("KaTeX doesn't work in quirks mode.")});var d3=function(e,t){var n=Ll(e,t).toMarkup();return n},f3=function(e,t){var n=new xl(t);return Il(e,n)},_d=function(e,t,n){if(n.throwOnError||!(e instanceof ce))throw e;var r=oe(["katex-error"],[new _n(t)]);return r.setAttribute("title",e.toString()),r.setAttribute("style","color:"+n.errorColor),r},Ll=function(e,t){var n=new xl(t);try{var r=Il(e,n);return _v(r,e,n)}catch(a){return _d(a,e,n)}},p3=function(e,t){var n=new xl(t);try{var r=Il(e,n);return yv(r,e,n)}catch(a){return _d(a,e,n)}},m3="0.16.47",g3={Span:Wr,Anchor:Cs,SymbolNode:_n,SvgNode:ui,PathNode:Pi,LineNode:k0},v3={version:m3,render:xd,renderToString:d3,ParseError:ce,SETTINGS_SCHEMA:z0,__parse:f3,__renderToDomTree:Ll,__renderToHTMLTree:p3,__setFontMetrics:ev,__defineSymbol:h,__defineFunction:Se,__defineMacro:E,__domTree:g3};const Nu=i=>i<0?0:i>1?1:i,Fu=i=>i*i*(3-2*i);function x3(){const i=document.getElementById("eqname"),e=document.getElementById("caption"),t=document.getElementById("formula");let n=-1;function r(o){if(o===n)return;n=o;const l=Mh[o];i.textContent=l.name,e.textContent=l.cap,t.innerHTML=v3.renderToString(l.tex,{displayMode:!0,throwOnError:!1,output:"html"})}function a(o,l){if(J.phase.name!=="pde"){i.style.opacity=0,e.style.opacity=0,t.style.opacity=0,n=-1;return}r(o);let c=0;l<ra?c=Fu(Nu((l/ra-.25)/.75)):l<ra+F0?c=1:c=1-Fu(Nu((l-ra-F0)/Sh/.75)),i.style.opacity=String(c*.9),e.style.opacity=String(c),t.style.opacity=String(c)}function s(){n=-1}return{update:a,reset:s,show:r}}function _3(i){const e=new An(new gl(.32,32,24),new vs({color:0})),t=new An(new ml(.38,.62,64),new vs({color:16763e3,side:Bn,transparent:!0,opacity:.55,blending:Cr,depthWrite:!1}));t.rotation.x=Math.PI*.62;const n=new na;n.add(e,t),n.visible=!1,i.add(n);function r(){const a=J.phase.name;if(n.visible=a==="blackhole"||a==="accretion"&&J.phase.lt>4.5,!n.visible)return;const s=a==="blackhole"?Math.min(1,J.phase.lt/6):.15;e.scale.setScalar(.7+.5*s),t.material.opacity=(.25+.45*J.diskFlick)*(.4+.6*s),n.rotation.z=J.spin*.15}return{group:n,update:r}}function y3(i){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,250,236,1)"),n.addColorStop(.22,"rgba(255,236,202,0.55)"),n.addColorStop(1,"rgba(255,220,180,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);const r=new dl(e),a=new lh({map:r,blending:Cr,depthWrite:!1,transparent:!0}),s=new Qf(a);s.scale.set(3.2,3.2,1),s.visible=!1,i.add(s);function o(){const l=J.centerBloom;if(s.visible=l>.02,!s.visible)return;const c=1.4+l*3.2;s.scale.set(c,c,1),a.opacity=Math.min(1,l)}return{sprite:s,update:o}}function b3(i,e=1800){const t=new Float32Array(e*3),n=new Float32Array(e*3);for(let l=0;l<e;l++){const c=8+Math.random()*22,u=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);t[l*3]=c*Math.sin(d)*Math.cos(u),t[l*3+1]=c*Math.cos(d),t[l*3+2]=c*Math.sin(d)*Math.sin(u);const p=.55+Math.random()*.45;n[l*3]=.75*p,n[l*3+1]=.84*p,n[l*3+2]=1*p}const r=new hn;r.setAttribute("position",new an(t,3)),r.setAttribute("color",new an(n,3));const a=new hl({size:.035,vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1,blending:Cr}),s=new uh(r,a);i.add(s);function o(){const l=J.ditherMix>.9;s.visible=!l,a.opacity=(1-J.ditherMix)*.65,s.rotation.y=J.spin*.02}return{points:s,update:o}}function M3(){const i=document.getElementById("actlabel"),e=document.getElementById("wordmark"),t=document.getElementById("loading"),n=document.getElementById("toast");function r(){t&&(t.style.opacity="0",setTimeout(()=>t.remove(),650))}function a(o,l=3200){n.textContent=o,n.style.opacity="1",clearTimeout(a._t),a._t=setTimeout(()=>{n.style.opacity="0"},l)}function s(){const o=J.phase.name;i.textContent=xg(o),i.style.opacity=o==="pde"||o==="core"||o==="glass"?"0":"0.75",e.style.opacity=o==="pde"?"1":"0"}return{hideLoading:r,toast:a,update:s}}function S3({toast:i,onEnter:e}){const t=document.getElementById("enter");let n=!1;async function r(){if(n)return;n=!0,J.entered=!0,t.classList.remove("show"),t.classList.add("hide"),setTimeout(()=>t.remove(),1200),e?.();const s=await Z4();s.ok?i("listening to the room",3500):i(s.reason==="insecure"?"mic needs localhost/https — press O or drop a track":s.reason==="NotAllowedError"?"mic denied — press O or drop a track":"mic unavailable — press O or drop a track",6500)}t.addEventListener("click",r);function a(){t.classList.add("show")}return{enterExperience:r,reveal:a}}function w3({director:i,particles:e,toast:t}){const n=document.createElement("input");n.type="file",n.accept="audio/*",n.style.display="none",document.body.appendChild(n);function r(a){a&&j4(a)?t("reacting to "+a.name.slice(0,42)):t("couldn’t play that file")}return n.addEventListener("change",a=>{a.target.files[0]&&r(a.target.files[0])}),addEventListener("dragover",a=>a.preventDefault()),addEventListener("drop",a=>{a.preventDefault();const s=a.dataTransfer?.files?.[0];s&&r(s)}),addEventListener("pointermove",a=>{J.pointer.x=a.clientX/innerWidth,J.pointer.y=a.clientY/innerHeight,J.pointer.active=!0}),addEventListener("pointerleave",()=>{J.pointer.active=!1}),addEventListener("keydown",a=>{a.code==="Space"?(J.paused=!J.paused,a.preventDefault()):a.code==="ArrowRight"?i.skip(1):a.code==="ArrowLeft"?i.skip(-1):a.key.toLowerCase()==="r"?(i.restart(),e.reset()):a.key.toLowerCase()==="o"?n.click():a.key.toLowerCase()==="s"&&i.skipToCore()}),{onFile:r}}function E3(i){const e={x:0,y:.15,z:7},t={x:0,y:0,z:0};function n(r){const a=J.phase.name,s=(J.pointer.x-.5)*.8,o=(J.pointer.y-.5)*.45;a==="pde"?(e.x=0,e.y=.35,e.z=6.4,t.y=.35):a==="orb"?(e.x=0,e.y=.1,e.z=6.2,t.y=0):a==="accretion"||a==="blackhole"?(e.x=.15,e.y=1.15,e.z=6.8,t.y=-.15):a==="star"||a==="nova"?(e.x=0,e.y=0,e.z=5.4,t.y=0):a==="galaxy"?(e.x=.4,e.y=1.4,e.z=7.2,t.y=-.2):(e.x=0,e.y=.15,e.z=7,t.y=0);const l=1-Math.pow(.08,r*60);i.position.x+=(e.x+s-i.position.x)*l,i.position.y+=(e.y-o-i.position.y)*l,i.position.z+=(e.z-i.position.z)*l,i.lookAt(t.x,t.y,t.z),J.audio.beat>.7&&(a==="accretion"||a==="galaxy")&&(i.position.z-=.04*J.audio.beat)}return{update:n}}function T3(i){const e=new vc(12577008,4,20);e.position.set(2.2,1.4,3.5);const t=new vc(8036607,1.4,18);t.position.set(-3,-.5,-2);const n=new lp(1714224,.4);i.add(e,t,n);function r(){const a=J.audio;e.intensity=2.2+a.energy*4.5+a.beat*3,t.intensity=.8+a.high*2.2;const s=J.meshRGB;e.color.setRGB(s[0]/255,s[1]/255,s[2]/255),e.position.x=2.2+Math.sin(J.time*.4)*.6}return{key:e,rim:t,update:r}}const yd=document.getElementById("stage"),er=new Y4({canvas:yd,antialias:!0,alpha:!0,powerPreference:"high-performance"});er.setClearColor(0,0);er.setPixelRatio(Math.min(devicePixelRatio||1,2));er.outputColorSpace=gn;const Ni=new jf,Or=new vn(45,1,.1,80);Or.position.set(0,.15,7);const A3=ng(),bd=ig(A3),ws=rg(),Md=ag(ws.canvas,yd),R3=eg(),Ul=cg(Ni),Sd=fg(Ni),wd=_3(Ni),Ed=y3(Ni),Td=b3(Ni),C3=T3(Ni),Nl=_g(),zu=x3(),Gs=M3(),D3=E3(Or),Bu=[[9,16,23],[42,85,97],[87,152,166],[155,196,195],[238,240,218]];w3({director:Nl,particles:Ul,toast:Gs.toast});const P3=S3({toast:Gs.toast});function Ad(){J.width=innerWidth,J.height=innerHeight,J.dpr=Math.min(devicePixelRatio||1,2),Or.aspect=J.width/J.height,Or.updateProjectionMatrix(),er.setSize(J.width,J.height,!1),Md.resize();const{W:i,H:e}=bd.resize(J.width,J.height);ws.resize(i,e)}addEventListener("resize",Ad);const I3=new up;let Ou=0;function Rd(){const i=I3.getElapsedTime(),e=Math.min(.05,i-(Ou||i));Ou=i;const t=i;J.time=t,J4(t),Q4(t),R3.paint(),K4(Bu,t,J.audio,J.glassMode),ws.setPalette(Bu),J.meshRGB=N0((t*42+J.audio.high*170)%360,.62,.62);const{ph:n}=Nl.step(e);if(Ul.update(e,t,(r,a)=>zu.update(r,a)),n.name!=="pde"&&zu.update(-1,0),Sd.update(t),wd.update(),Ed.update(),Td.update(),C3.update(),D3.update(e),Gs.update(),J.ditherMix>.001){const r=bd.evaluate(t);ws.quantize(r)}Md.present(),er.render(Ni,Or),J.flash>.001?(J.flash*=.9,er.domElement.style.boxShadow=`inset 0 0 ${80*J.flash}px rgba(255,244,220,${J.flash*.45})`):er.domElement.style.boxShadow="none",requestAnimationFrame(Rd)}Ad();Gs.hideLoading();P3.reveal();try{window.__aurora={scene:Ni,camera:Or,particles:Ul,orb:Sd,cosmos:Ed,blackhole:wd,stars:Td,director:Nl,state:J}}catch{}requestAnimationFrame(Rd);
//# sourceMappingURL=index-BdCqGrgj.js.map
