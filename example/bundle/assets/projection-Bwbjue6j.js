import{b3 as nn,ax as qe,b4 as _e,a$ as oe,b5 as on,B as me,d as Ye,l as u,b as rn,U as Xe,b6 as Pe,V as Je,h as sn,r as ie,b7 as an,k as I,M as St,aN as Ke,a as cn,O as ln,C as Cn,Q as bt,at as un,ae as dn,c as Ve,b8 as zn,af as Ln,an as On}from"./three.module-CQU0seT4.js";import{r as o,u as fe,c as fn,a as et,j as $,b as xt,h as An,d as Un,C as Rn,T as Dn,E as Bn}from"./CameraControls-BTa4S6yL.js";import{I as Tn,C as Wn}from"./ImageOverlayPlugin-DZWlCL4f.js";import{_ as Ze}from"./extends-CF3RwP-h.js";import{v as pn}from"./constants-BeIdOgZ8.js";import{T as In}from"./TilesFadePlugin-D_u_P2Qt.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./EnvironmentControls-CLbQ_1-I.js";import"./GlobeControls-CKSk7BfI.js";import"./Ellipsoid-BKsGN9dG.js";import"./I3DMLoader--guqwtSo.js";import"./readMagicBytes-ReGFEf36.js";import"./GLTFLoader-Bzr6GmPM.js";import"./TilesRenderer-Dt06WWnf.js";import"./B3DMLoader-BZtrZCNg.js";import"./PNTSLoader-gB5YPyhc.js";import"./CMPTLoader-VEto4VOC.js";import"./EllipsoidRegion-BEIhCuST.js";import"./TMSImageSource-BwMpBOyS.js";import"./TiledImageSource-Dter0Emb.js";import"./GeometryClipper-DDKqlNfA.js";class jn{constructor(){this.name="ENFORCE_NONZERO_ERROR",this.priority=-1/0,this.originalError=new Map}preprocessNode(e){if(e.geometricError===0){let t=e.parent,i=1,n=-1,r=1/0;for(;t!==null;)t.geometricError!==0&&t.geometricError<r&&(r=t.geometricError,n=i),t=t.parent,i++;n!==-1&&(e.geometricError=r*2**-i)}}}const mn=pn>=125?"uv1":"uv2",zt=new me,De=new u;let Et=class extends nn{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new qe(e,3)),this.setAttribute("uv",new qe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new _e(t,6,1);return this.setAttribute("instanceStart",new oe(i,3,0)),this.setAttribute("instanceEnd",new oe(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const n=new _e(i,t*2,1);return this.setAttribute("instanceColorStart",new oe(n,t,0)),this.setAttribute("instanceColorEnd",new oe(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new on(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new me);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),zt.setFromBufferAttribute(t),this.boundingBox.union(zt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ye),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,c=e.count;r<c;r++)De.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(De)),De.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(De));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};class hn extends Et{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){const i=e.length-t,n=new Float32Array(2*i);if(t===3)for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];else for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5],n[2*r+6]=e[r+6],n[2*r+7]=e[r+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}let Mt=class extends rn{constructor(e){super({type:"LineMaterial",uniforms:Xe.clone(Xe.merge([Pe.common,Pe.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Je(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${pn>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}};const ot=new ie,Lt=new u,Ot=new u,q=new ie,X=new ie,re=new ie,it=new u,rt=new I,Y=new an,At=new u,Be=new me,Te=new Ye,se=new ie;let le,ve;function Ut(s,e,t){return se.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),se.multiplyScalar(1/se.w),se.x=ve/t.width,se.y=ve/t.height,se.applyMatrix4(s.projectionMatrixInverse),se.multiplyScalar(1/se.w),Math.abs(Math.max(se.x,se.y))}function Fn(s,e){const t=s.matrixWorld,i=s.geometry,n=i.attributes.instanceStart,r=i.attributes.instanceEnd,c=Math.min(i.instanceCount,n.count);for(let a=0,d=c;a<d;a++){Y.start.fromBufferAttribute(n,a),Y.end.fromBufferAttribute(r,a),Y.applyMatrix4(t);const h=new u,p=new u;le.distanceSqToSegment(Y.start,Y.end,p,h),p.distanceTo(h)<ve*.5&&e.push({point:p,pointOnLine:h,distance:le.origin.distanceTo(p),object:s,face:null,faceIndex:a,uv:null,[mn]:null})}}function Hn(s,e,t){const i=e.projectionMatrix,r=s.material.resolution,c=s.matrixWorld,a=s.geometry,d=a.attributes.instanceStart,h=a.attributes.instanceEnd,p=Math.min(a.instanceCount,d.count),l=-e.near;le.at(1,re),re.w=1,re.applyMatrix4(e.matrixWorldInverse),re.applyMatrix4(i),re.multiplyScalar(1/re.w),re.x*=r.x/2,re.y*=r.y/2,re.z=0,it.copy(re),rt.multiplyMatrices(e.matrixWorldInverse,c);for(let b=0,W=p;b<W;b++){if(q.fromBufferAttribute(d,b),X.fromBufferAttribute(h,b),q.w=1,X.w=1,q.applyMatrix4(rt),X.applyMatrix4(rt),q.z>l&&X.z>l)continue;if(q.z>l){const f=q.z-X.z,v=(q.z-l)/f;q.lerp(X,v)}else if(X.z>l){const f=X.z-q.z,v=(X.z-l)/f;X.lerp(q,v)}q.applyMatrix4(i),X.applyMatrix4(i),q.multiplyScalar(1/q.w),X.multiplyScalar(1/X.w),q.x*=r.x/2,q.y*=r.y/2,X.x*=r.x/2,X.y*=r.y/2,Y.start.copy(q),Y.start.z=0,Y.end.copy(X),Y.end.z=0;const A=Y.closestPointToPointParameter(it,!0);Y.at(A,At);const R=St.lerp(q.z,X.z,A),w=R>=-1&&R<=1,E=it.distanceTo(At)<ve*.5;if(w&&E){Y.start.fromBufferAttribute(d,b),Y.end.fromBufferAttribute(h,b),Y.start.applyMatrix4(c),Y.end.applyMatrix4(c);const f=new u,v=new u;le.distanceSqToSegment(Y.start,Y.end,v,f),t.push({point:v,pointOnLine:f,distance:le.origin.distanceTo(v),object:s,face:null,faceIndex:b,uv:null,[mn]:null})}}}let gn=class extends sn{constructor(e=new Et,t=new Mt({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let c=0,a=0,d=t.count;c<d;c++,a+=2)Lt.fromBufferAttribute(t,c),Ot.fromBufferAttribute(i,c),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Lt.distanceTo(Ot);const r=new _e(n,2,1);return e.setAttribute("instanceDistanceStart",new oe(r,1,0)),e.setAttribute("instanceDistanceEnd",new oe(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;le=e.ray;const c=this.matrixWorld,a=this.geometry,d=this.material;ve=d.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Te.copy(a.boundingSphere).applyMatrix4(c);let h;if(i)h=ve*.5;else{const l=Math.max(n.near,Te.distanceToPoint(le.origin));h=Ut(n,l,d.resolution)}if(Te.radius+=h,le.intersectsSphere(Te)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Be.copy(a.boundingBox).applyMatrix4(c);let p;if(i)p=ve*.5;else{const l=Math.max(n.near,Be.distanceToPoint(le.origin));p=Ut(n,l,d.resolution)}Be.expandByScalar(p),le.intersectsBox(Be)!==!1&&(i?Fn(this,t):Hn(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ot),this.material.uniforms.resolution.value.set(ot.z,ot.w))}};class kn extends gn{constructor(e=new hn,t=new Mt({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const Ae=new u,Pt=new u,Nn=new u,Rt=new Je;function $n(s,e,t){const i=Ae.setFromMatrixPosition(s.matrixWorld);i.project(e);const n=t.width/2,r=t.height/2;return[i.x*n+n,-(i.y*r)+r]}function Gn(s,e){const t=Ae.setFromMatrixPosition(s.matrixWorld),i=Pt.setFromMatrixPosition(e.matrixWorld),n=t.sub(i),r=e.getWorldDirection(Nn);return n.angleTo(r)>Math.PI/2}function Vn(s,e,t,i){const n=Ae.setFromMatrixPosition(s.matrixWorld),r=n.clone();r.project(e),Rt.set(r.x,r.y),t.setFromCamera(Rt,e);const c=t.intersectObjects(i,!0);if(c.length){const a=c[0].distance;return n.distanceTo(t.ray.origin)<a}return!0}function qn(s,e){if(e instanceof ln)return e.zoom;if(e instanceof cn){const t=Ae.setFromMatrixPosition(s.matrixWorld),i=Pt.setFromMatrixPosition(e.matrixWorld),n=e.fov*Math.PI/180,r=t.distanceTo(i);return 1/(2*Math.tan(n/2)*r)}else return 1}function Xn(s,e,t){if(e instanceof cn||e instanceof ln){const i=Ae.setFromMatrixPosition(s.matrixWorld),n=Pt.setFromMatrixPosition(e.matrixWorld),r=i.distanceTo(n),c=(t[1]-t[0])/(e.far-e.near),a=t[1]-c*e.far;return Math.round(c*r+a)}}const wt=s=>Math.abs(s)<1e-10?0:s;function yn(s,e,t=""){let i="matrix3d(";for(let n=0;n!==16;n++)i+=wt(e[n]*s.elements[n])+(n!==15?",":")");return t+i}const Zn=(s=>e=>yn(e,s))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Qn=(s=>(e,t)=>yn(e,s(t),"translate(-50%,-50%)"))(s=>[1/s,1/s,1/s,1,-1/s,-1/s,-1/s,-1,1/s,1/s,1/s,1,1,1,1,1]);function Yn(s){return s&&typeof s=="object"&&"current"in s}const tt=o.forwardRef(({children:s,eps:e=.001,style:t,className:i,prepend:n,center:r,fullscreen:c,portal:a,distanceFactor:d,sprite:h=!1,transform:p=!1,occlude:l,onOcclude:b,castShadow:W,receiveShadow:O,material:A,geometry:R,zIndexRange:w=[16777271,0],calculatePosition:E=$n,as:f="div",wrapperClass:v,pointerEvents:z="auto",...C},j)=>{const{gl:N,camera:U,scene:G,size:T,raycaster:K,events:te,viewport:k}=fe(),[L]=o.useState(()=>document.createElement(f)),S=o.useRef(),g=o.useRef(null),m=o.useRef(0),y=o.useRef([0,0]),P=o.useRef(null),_=o.useRef(null),M=(a==null?void 0:a.current)||te.connected||N.domElement.parentNode,D=o.useRef(null),F=o.useRef(!1),x=o.useMemo(()=>l&&l!=="blending"||Array.isArray(l)&&l.length&&Yn(l[0]),[l]);o.useLayoutEffect(()=>{const ne=N.domElement;l&&l==="blending"?(ne.style.zIndex=`${Math.floor(w[0]/2)}`,ne.style.position="absolute",ne.style.pointerEvents="none"):(ne.style.zIndex=null,ne.style.position=null,ne.style.pointerEvents=null)},[l]),o.useLayoutEffect(()=>{if(g.current){const ne=S.current=fn.createRoot(L);if(G.updateMatrixWorld(),p)L.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const B=E(g.current,U,T);L.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${B[0]}px,${B[1]}px,0);transform-origin:0 0;`}return M&&(n?M.prepend(L):M.appendChild(L)),()=>{M&&M.removeChild(L),ne.unmount()}}},[M,p]),o.useLayoutEffect(()=>{v&&(L.className=v)},[v]);const ee=o.useMemo(()=>p?{position:"absolute",top:0,left:0,width:T.width,height:T.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:r?"translate3d(-50%,-50%,0)":"none",...c&&{top:-T.height/2,left:-T.width/2,width:T.width,height:T.height},...t},[t,r,c,T,p]),pe=o.useMemo(()=>({position:"absolute",pointerEvents:z}),[z]);o.useLayoutEffect(()=>{if(F.current=!1,p){var ne;(ne=S.current)==null||ne.render(o.createElement("div",{ref:P,style:ee},o.createElement("div",{ref:_,style:pe},o.createElement("div",{ref:j,className:i,style:t,children:s}))))}else{var B;(B=S.current)==null||B.render(o.createElement("div",{ref:j,style:ee,className:i,children:s}))}});const V=o.useRef(!0);et(ne=>{if(g.current){U.updateMatrixWorld(),g.current.updateWorldMatrix(!0,!1);const B=p?y.current:E(g.current,U,T);if(p||Math.abs(m.current-U.zoom)>e||Math.abs(y.current[0]-B[0])>e||Math.abs(y.current[1]-B[1])>e){const he=Gn(g.current,U);let de=!1;x&&(Array.isArray(l)?de=l.map(ge=>ge.current):l!=="blending"&&(de=[G]));const Ce=V.current;if(de){const ge=Vn(g.current,U,K,de);V.current=ge&&!he}else V.current=!he;Ce!==V.current&&(b?b(!V.current):L.style.display=V.current?"block":"none");const Re=Math.floor(w[0]/2),wn=l?x?[w[0],Re]:[Re-1,0]:w;if(L.style.zIndex=`${Xn(g.current,U,wn)}`,p){const[ge,_t]=[T.width/2,T.height/2],nt=U.projectionMatrix.elements[5]*_t,{isOrthographicCamera:Ct,top:Sn,left:bn,bottom:En,right:Mn}=U,Pn=Zn(U.matrixWorldInverse),_n=Ct?`scale(${nt})translate(${wt(-(Mn+bn)/2)}px,${wt((Sn+En)/2)}px)`:`translateZ(${nt}px)`;let ye=g.current.matrixWorld;h&&(ye=U.matrixWorldInverse.clone().transpose().copyPosition(ye).scale(g.current.scale),ye.elements[3]=ye.elements[7]=ye.elements[11]=0,ye.elements[15]=1),L.style.width=T.width+"px",L.style.height=T.height+"px",L.style.perspective=Ct?"":`${nt}px`,P.current&&_.current&&(P.current.style.transform=`${_n}${Pn}translate(${ge}px,${_t}px)`,_.current.style.transform=Qn(ye,1/((d||10)/400)))}else{const ge=d===void 0?1:qn(g.current,U)*d;L.style.transform=`translate3d(${B[0]}px,${B[1]}px,0) scale(${ge})`}y.current=B,m.current=U.zoom}}if(!x&&D.current&&!F.current)if(p){if(P.current){const B=P.current.children[0];if(B!=null&&B.clientWidth&&B!=null&&B.clientHeight){const{isOrthographicCamera:he}=U;if(he||R)C.scale&&(Array.isArray(C.scale)?C.scale instanceof u?D.current.scale.copy(C.scale.clone().divideScalar(1)):D.current.scale.set(1/C.scale[0],1/C.scale[1],1/C.scale[2]):D.current.scale.setScalar(1/C.scale));else{const de=(d||10)/400,Ce=B.clientWidth*de,Re=B.clientHeight*de;D.current.scale.set(Ce,Re,1)}F.current=!0}}}else{const B=L.children[0];if(B!=null&&B.clientWidth&&B!=null&&B.clientHeight){const he=1/k.factor,de=B.clientWidth*he,Ce=B.clientHeight*he;D.current.scale.set(de,Ce,1),F.current=!0}D.current.lookAt(ne.camera.position)}});const H=o.useMemo(()=>({vertexShader:p?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[p]);return o.createElement("group",Ze({},C,{ref:g}),l&&!x&&o.createElement("mesh",{castShadow:W,receiveShadow:O,ref:D},R||o.createElement("planeGeometry",null),A||o.createElement("shaderMaterial",{side:Ke,vertexShader:H.vertexShader,fragmentShader:H.fragmentShader})))}),Jn=new u,Kn=new u,eo=new u,to=(s,e,t)=>{const i=t.width/2,n=t.height/2;e.updateMatrixWorld(!1);const r=s.project(e);return r.x=r.x*i+i,r.y=-(r.y*n)+n,r},no=(s,e,t,i=1)=>{const n=Jn.set(s.x/t.width*2-1,-(s.y/t.height)*2+1,i);return n.unproject(e),n},vn=(s,e,t,i)=>{const n=to(eo.copy(s),t,i);let r=0;for(let c=0;c<2;++c){const a=Kn.copy(n).setComponent(c,n.getComponent(c)+e),d=no(a,t,i,a.z);r=Math.max(r,s.distanceTo(d))}return r},Qe=o.forwardRef(function({points:e,color:t=16777215,vertexColors:i,linewidth:n,lineWidth:r,segments:c,dashed:a,...d},h){var p,l;const b=fe(w=>w.size),W=o.useMemo(()=>c?new gn:new kn,[c]),[O]=o.useState(()=>new Mt),A=(i==null||(p=i[0])==null?void 0:p.length)===4?4:3,R=o.useMemo(()=>{const w=c?new Et:new hn,E=e.map(f=>{const v=Array.isArray(f);return f instanceof u||f instanceof ie?[f.x,f.y,f.z]:f instanceof Je?[f.x,f.y,0]:v&&f.length===3?[f[0],f[1],f[2]]:v&&f.length===2?[f[0],f[1],0]:f});if(w.setPositions(E.flat()),i){t=16777215;const f=i.map(v=>v instanceof Cn?v.toArray():v);w.setColors(f.flat(),A)}return w},[e,c,i,A]);return o.useLayoutEffect(()=>{W.computeLineDistances()},[e,W]),o.useLayoutEffect(()=>{a?O.defines.USE_DASH="":delete O.defines.USE_DASH,O.needsUpdate=!0},[a,O]),o.useEffect(()=>()=>{R.dispose(),O.dispose()},[R]),o.createElement("primitive",Ze({object:W,ref:h},d),o.createElement("primitive",{object:R,attach:"geometry"}),o.createElement("primitive",Ze({object:O,attach:"material",color:t,vertexColors:!!i,resolution:[b.width,b.height],linewidth:(l=n??r)!==null&&l!==void 0?l:1,dashed:a,transparent:A===4},d)))}),Ue=o.createContext(null),We=new u,Dt=new u,oo=(s,e,t,i)=>{const n=e.dot(e),r=e.dot(s)-e.dot(t),c=e.dot(i);return c===0?-r/n:(We.copy(i).multiplyScalar(n/c).sub(e),Dt.copy(i).multiplyScalar(r/c).add(t).sub(s),-We.dot(Dt)/We.dot(We))},io=new u(0,1,0),Bt=new I,st=({direction:s,axis:e})=>{const{translation:t,translationLimits:i,annotations:n,annotationsClass:r,depthTest:c,scale:a,lineWidth:d,fixed:h,axisColors:p,hoveredColor:l,opacity:b,onDragStart:W,onDrag:O,onDragEnd:A,userData:R}=o.useContext(Ue),w=fe(g=>g.controls),E=o.useRef(null),f=o.useRef(null),v=o.useRef(null),z=o.useRef(0),[C,j]=o.useState(!1),N=o.useCallback(g=>{n&&(E.current.innerText=`${t.current[e].toFixed(2)}`,E.current.style.display="block"),g.stopPropagation();const m=new I().extractRotation(f.current.matrixWorld),y=g.point.clone(),P=new u().setFromMatrixPosition(f.current.matrixWorld),_=s.clone().applyMatrix4(m).normalize();v.current={clickPoint:y,dir:_},z.current=t.current[e],W({component:"Arrow",axis:e,origin:P,directions:[_]}),w&&(w.enabled=!1),g.target.setPointerCapture(g.pointerId)},[n,s,w,W,t,e]),U=o.useCallback(g=>{if(g.stopPropagation(),C||j(!0),v.current){const{clickPoint:m,dir:y}=v.current,[P,_]=(i==null?void 0:i[e])||[void 0,void 0];let M=oo(m,y,g.ray.origin,g.ray.direction);P!==void 0&&(M=Math.max(M,P-z.current)),_!==void 0&&(M=Math.min(M,_-z.current)),t.current[e]=z.current+M,n&&(E.current.innerText=`${t.current[e].toFixed(2)}`),Bt.makeTranslation(y.x*M,y.y*M,y.z*M),O(Bt)}},[n,O,C,t,i,e]),G=o.useCallback(g=>{n&&(E.current.style.display="none"),g.stopPropagation(),v.current=null,A(),w&&(w.enabled=!0),g.target.releasePointerCapture(g.pointerId)},[n,w,A]),T=o.useCallback(g=>{g.stopPropagation(),j(!1)},[]),{cylinderLength:K,coneWidth:te,coneLength:k,matrixL:L}=o.useMemo(()=>{const g=h?d/a*1.6:a/20,m=h?.2:a/5,y=h?1-m:a-m,P=new bt().setFromUnitVectors(io,s.clone().normalize()),_=new I().makeRotationFromQuaternion(P);return{cylinderLength:y,coneWidth:g,coneLength:m,matrixL:_}},[s,a,d,h]),S=C?l:p[e];return o.createElement("group",{ref:f},o.createElement("group",{matrix:L,matrixAutoUpdate:!1,onPointerDown:N,onPointerMove:U,onPointerUp:G,onPointerOut:T},n&&o.createElement(tt,{position:[0,-k,0]},o.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:r,ref:E})),o.createElement("mesh",{visible:!1,position:[0,(K+k)/2,0],userData:R},o.createElement("cylinderGeometry",{args:[te*1.4,te*1.4,K+k,8,1]})),o.createElement(Qe,{transparent:!0,raycast:()=>null,depthTest:c,points:[0,0,0,0,K,0],lineWidth:d,side:Ke,color:S,opacity:b,polygonOffset:!0,renderOrder:1,polygonOffsetFactor:-10,fog:!1}),o.createElement("mesh",{raycast:()=>null,position:[0,K+k/2,0],renderOrder:500},o.createElement("coneGeometry",{args:[te,k,24,1]}),o.createElement("meshBasicMaterial",{transparent:!0,depthTest:c,color:S,opacity:b,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))))},at=new u,ct=new u,lt=s=>s*180/Math.PI,ro=s=>s*Math.PI/180,so=(s,e,t,i,n)=>{at.copy(s).sub(t),ct.copy(e).sub(t);const r=i.dot(i),c=n.dot(n),a=at.dot(i)/r,d=at.dot(n)/c,h=ct.dot(i)/r,p=ct.dot(n)/c,l=Math.atan2(d,a);return Math.atan2(p,h)-l},ao=(s,e)=>{let t=Math.floor(s/e);return t=t<0?t+1:t,s-t*e},Tt=s=>{let e=ao(s,2*Math.PI);return Math.abs(e)<1e-6?0:(e<0&&(e+=2*Math.PI),e)},Ie=new I,Wt=new u,je=new dn,ut=new u,dt=({dir1:s,dir2:e,axis:t})=>{const{rotationLimits:i,annotations:n,annotationsClass:r,depthTest:c,scale:a,lineWidth:d,fixed:h,axisColors:p,hoveredColor:l,opacity:b,onDragStart:W,onDrag:O,onDragEnd:A,userData:R}=o.useContext(Ue),w=fe(S=>S.controls),E=o.useRef(null),f=o.useRef(null),v=o.useRef(0),z=o.useRef(0),C=o.useRef(null),[j,N]=o.useState(!1),U=o.useCallback(S=>{n&&(E.current.innerText=`${lt(z.current).toFixed(0)}º`,E.current.style.display="block"),S.stopPropagation();const g=S.point.clone(),m=new u().setFromMatrixPosition(f.current.matrixWorld),y=new u().setFromMatrixColumn(f.current.matrixWorld,0).normalize(),P=new u().setFromMatrixColumn(f.current.matrixWorld,1).normalize(),_=new u().setFromMatrixColumn(f.current.matrixWorld,2).normalize(),M=new un().setFromNormalAndCoplanarPoint(_,m);C.current={clickPoint:g,origin:m,e1:y,e2:P,normal:_,plane:M},W({component:"Rotator",axis:t,origin:m,directions:[y,P,_]}),w&&(w.enabled=!1),S.target.setPointerCapture(S.pointerId)},[n,w,W,t]),G=o.useCallback(S=>{if(S.stopPropagation(),j||N(!0),C.current){const{clickPoint:g,origin:m,e1:y,e2:P,normal:_,plane:M}=C.current,[D,F]=(i==null?void 0:i[t])||[void 0,void 0];je.copy(S.ray),je.intersectPlane(M,ut),je.direction.negate(),je.intersectPlane(M,ut);let x=so(g,ut,m,y,P),ee=lt(x);S.shiftKey&&(ee=Math.round(ee/10)*10,x=ro(ee)),D!==void 0&&F!==void 0&&F-D<2*Math.PI?(x=Tt(x),x=x>Math.PI?x-2*Math.PI:x,x=St.clamp(x,D-v.current,F-v.current),z.current=v.current+x):(z.current=Tt(v.current+x),z.current=z.current>Math.PI?z.current-2*Math.PI:z.current),n&&(ee=lt(z.current),E.current.innerText=`${ee.toFixed(0)}º`),Ie.makeRotationAxis(_,x),Wt.copy(m).applyMatrix4(Ie).sub(m).negate(),Ie.setPosition(Wt),O(Ie)}},[n,O,j,i,t]),T=o.useCallback(S=>{n&&(E.current.style.display="none"),S.stopPropagation(),v.current=z.current,C.current=null,A(),w&&(w.enabled=!0),S.target.releasePointerCapture(S.pointerId)},[n,w,A]),K=o.useCallback(S=>{S.stopPropagation(),N(!1)},[]),te=o.useMemo(()=>{const S=s.clone().normalize(),g=e.clone().normalize();return new I().makeBasis(S,g,S.clone().cross(g))},[s,e]),k=h?.65:a*.65,L=o.useMemo(()=>{const g=[];for(let m=0;m<=32;m++){const y=m*(Math.PI/2)/32;g.push(new u(Math.cos(y)*k,Math.sin(y)*k,0))}return g},[k]);return o.createElement("group",{ref:f,onPointerDown:U,onPointerMove:G,onPointerUp:T,onPointerOut:K,matrix:te,matrixAutoUpdate:!1},n&&o.createElement(tt,{position:[k,k,0]},o.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:r,ref:E})),o.createElement(Qe,{points:L,lineWidth:d*4,visible:!1,userData:R}),o.createElement(Qe,{transparent:!0,raycast:()=>null,depthTest:c,points:L,lineWidth:d,side:Ke,color:j?l:p[t],opacity:b,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))},co=(s,e,t)=>{const i=Math.abs(s.x)>=Math.abs(s.y)&&Math.abs(s.x)>=Math.abs(s.z)?0:Math.abs(s.y)>=Math.abs(s.x)&&Math.abs(s.y)>=Math.abs(s.z)?1:2,n=[0,1,2].sort((O,A)=>Math.abs(e.getComponent(A))-Math.abs(e.getComponent(O))),r=i===n[0]?n[1]:n[0],c=s.getComponent(i),a=s.getComponent(r),d=e.getComponent(i),h=e.getComponent(r),p=t.getComponent(i),b=(t.getComponent(r)-p*(a/c))/(h-d*(a/c));return[(p-b*d)/c,b]},Fe=new dn,He=new u,It=new I,ft=({dir1:s,dir2:e,axis:t})=>{const{translation:i,translationLimits:n,annotations:r,annotationsClass:c,depthTest:a,scale:d,lineWidth:h,fixed:p,axisColors:l,hoveredColor:b,opacity:W,onDragStart:O,onDrag:A,onDragEnd:R,userData:w}=o.useContext(Ue),E=fe(y=>y.controls),f=o.useRef(null),v=o.useRef(null),z=o.useRef(null),C=o.useRef(0),j=o.useRef(0),[N,U]=o.useState(!1),G=o.useCallback(y=>{r&&(f.current.innerText=`${i.current[(t+1)%3].toFixed(2)}, ${i.current[(t+2)%3].toFixed(2)}`,f.current.style.display="block"),y.stopPropagation();const P=y.point.clone(),_=new u().setFromMatrixPosition(v.current.matrixWorld),M=new u().setFromMatrixColumn(v.current.matrixWorld,0).normalize(),D=new u().setFromMatrixColumn(v.current.matrixWorld,1).normalize(),F=new u().setFromMatrixColumn(v.current.matrixWorld,2).normalize(),x=new un().setFromNormalAndCoplanarPoint(F,_);z.current={clickPoint:P,e1:M,e2:D,plane:x},C.current=i.current[(t+1)%3],j.current=i.current[(t+2)%3],O({component:"Slider",axis:t,origin:_,directions:[M,D,F]}),E&&(E.enabled=!1),y.target.setPointerCapture(y.pointerId)},[r,E,O,t]),T=o.useCallback(y=>{if(y.stopPropagation(),N||U(!0),z.current){const{clickPoint:P,e1:_,e2:M,plane:D}=z.current,[F,x]=(n==null?void 0:n[(t+1)%3])||[void 0,void 0],[ee,pe]=(n==null?void 0:n[(t+2)%3])||[void 0,void 0];Fe.copy(y.ray),Fe.intersectPlane(D,He),Fe.direction.negate(),Fe.intersectPlane(D,He),He.sub(P);let[V,H]=co(_,M,He);F!==void 0&&(V=Math.max(V,F-C.current)),x!==void 0&&(V=Math.min(V,x-C.current)),ee!==void 0&&(H=Math.max(H,ee-j.current)),pe!==void 0&&(H=Math.min(H,pe-j.current)),i.current[(t+1)%3]=C.current+V,i.current[(t+2)%3]=j.current+H,r&&(f.current.innerText=`${i.current[(t+1)%3].toFixed(2)}, ${i.current[(t+2)%3].toFixed(2)}`),It.makeTranslation(V*_.x+H*M.x,V*_.y+H*M.y,V*_.z+H*M.z),A(It)}},[r,A,N,i,n,t]),K=o.useCallback(y=>{r&&(f.current.style.display="none"),y.stopPropagation(),z.current=null,R(),E&&(E.enabled=!0),y.target.releasePointerCapture(y.pointerId)},[r,E,R]),te=o.useCallback(y=>{y.stopPropagation(),U(!1)},[]),k=o.useMemo(()=>{const y=s.clone().normalize(),P=e.clone().normalize();return new I().makeBasis(y,P,y.clone().cross(P))},[s,e]),L=p?1/7:d/7,S=p?.225:d*.225,g=N?b:l[t],m=o.useMemo(()=>[new u(0,0,0),new u(0,S,0),new u(S,S,0),new u(S,0,0),new u(0,0,0)],[S]);return o.createElement("group",{ref:v,matrix:k,matrixAutoUpdate:!1},r&&o.createElement(tt,{position:[0,0,0]},o.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:c,ref:f})),o.createElement("group",{position:[L*1.7,L*1.7,0]},o.createElement("mesh",{visible:!0,onPointerDown:G,onPointerMove:T,onPointerUp:K,onPointerOut:te,scale:S,userData:w},o.createElement("planeGeometry",null),o.createElement("meshBasicMaterial",{transparent:!0,depthTest:a,color:g,polygonOffset:!0,polygonOffsetFactor:-10,side:Ke,fog:!1})),o.createElement(Qe,{position:[-S/2,-S/2,0],transparent:!0,depthTest:a,points:m,lineWidth:h,color:g,opacity:W,polygonOffset:!0,polygonOffsetFactor:-10,userData:w,fog:!1})))},Oe=new u,jt=new u,lo=(s,e,t,i)=>{const n=e.dot(e),r=e.dot(s)-e.dot(t),c=e.dot(i);return c===0?-r/n:(Oe.copy(i).multiplyScalar(n/c).sub(e),jt.copy(i).multiplyScalar(r/c).add(t).sub(s),-Oe.dot(jt)/Oe.dot(Oe))},uo=new u(0,1,0),ze=new u,Ft=new I,pt=({direction:s,axis:e})=>{const{scaleLimits:t,annotations:i,annotationsClass:n,depthTest:r,scale:c,lineWidth:a,fixed:d,axisColors:h,hoveredColor:p,opacity:l,onDragStart:b,onDrag:W,onDragEnd:O,userData:A}=o.useContext(Ue),R=fe(m=>m.size),w=fe(m=>m.controls),E=o.useRef(null),f=o.useRef(null),v=o.useRef(null),z=o.useRef(1),C=o.useRef(1),j=o.useRef(null),[N,U]=o.useState(!1),G=d?1.2:1.2*c,T=o.useCallback(m=>{i&&(E.current.innerText=`${C.current.toFixed(2)}`,E.current.style.display="block"),m.stopPropagation();const y=new I().extractRotation(f.current.matrixWorld),P=m.point.clone(),_=new u().setFromMatrixPosition(f.current.matrixWorld),M=s.clone().applyMatrix4(y).normalize(),D=f.current.matrixWorld.clone(),F=D.clone().invert(),x=d?1/vn(f.current.getWorldPosition(Oe),c,m.camera,R):1;j.current={clickPoint:P,dir:M,mPLG:D,mPLGInv:F,offsetMultiplier:x},b({component:"Sphere",axis:e,origin:_,directions:[M]}),w&&(w.enabled=!1),m.target.setPointerCapture(m.pointerId)},[i,w,s,b,e,d,c,R]),K=o.useCallback(m=>{if(m.stopPropagation(),N||U(!0),j.current){const{clickPoint:y,dir:P,mPLG:_,mPLGInv:M,offsetMultiplier:D}=j.current,[F,x]=(t==null?void 0:t[e])||[1e-5,void 0],pe=lo(y,P,m.ray.origin,m.ray.direction)*D,V=d?pe:pe/c;let H=Math.pow(2,V*.2);m.shiftKey&&(H=Math.round(H*10)/10),H=Math.max(H,F/z.current),x!==void 0&&(H=Math.min(H,x/z.current)),C.current=z.current*H,v.current.position.set(0,G+pe,0),i&&(E.current.innerText=`${C.current.toFixed(2)}`),ze.set(1,1,1),ze.setComponent(e,H),Ft.makeScale(ze.x,ze.y,ze.z).premultiply(_).multiply(M),W(Ft)}},[i,G,W,N,t,e]),te=o.useCallback(m=>{i&&(E.current.style.display="none"),m.stopPropagation(),z.current=C.current,j.current=null,v.current.position.set(0,G,0),O(),w&&(w.enabled=!0),m.target.releasePointerCapture(m.pointerId)},[i,w,O,G]),k=o.useCallback(m=>{m.stopPropagation(),U(!1)},[]),{radius:L,matrixL:S}=o.useMemo(()=>{const m=d?a/c*1.8:c/22.5,y=new bt().setFromUnitVectors(uo,s.clone().normalize()),P=new I().makeRotationFromQuaternion(y);return{radius:m,matrixL:P}},[s,c,a,d]),g=N?p:h[e];return o.createElement("group",{ref:f},o.createElement("group",{matrix:S,matrixAutoUpdate:!1,onPointerDown:T,onPointerMove:K,onPointerUp:te,onPointerOut:k},i&&o.createElement(tt,{position:[0,G/2,0]},o.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:n,ref:E})),o.createElement("mesh",{ref:v,position:[0,G,0],renderOrder:500,userData:A},o.createElement("sphereGeometry",{args:[L,12,12]}),o.createElement("meshBasicMaterial",{transparent:!0,depthTest:r,color:g,opacity:l,polygonOffset:!0,polygonOffsetFactor:-10}))))},Ht=new I,kt=new I,Nt=new I,ke=new I,mt=new I,we=new I,$t=new I,Gt=new I,Vt=new I,Se=new me,ht=new me,qt=new u,Xt=new u,Zt=new u,Qt=new u,Le=new u,be=new u(1,0,0),Ee=new u(0,1,0),Me=new u(0,0,1),fo=o.forwardRef(({enabled:s=!0,matrix:e,onDragStart:t,onDrag:i,onDragEnd:n,autoTransform:r=!0,anchor:c,disableAxes:a=!1,disableSliders:d=!1,disableRotations:h=!1,disableScaling:p=!1,activeAxes:l=[!0,!0,!0],offset:b=[0,0,0],rotation:W=[0,0,0],scale:O=1,lineWidth:A=4,fixed:R=!1,translationLimits:w,rotationLimits:E,scaleLimits:f,depthTest:v=!0,axisColors:z=["#ff2060","#20df80","#2080ff"],hoveredColor:C="#ffff40",annotations:j=!1,annotationsClass:N,opacity:U=1,visible:G=!0,userData:T,children:K,...te},k)=>{const L=fe(x=>x.invalidate),S=o.useRef(null),g=o.useRef(null),m=o.useRef(null),y=o.useRef(null),P=o.useRef([0,0,0]),_=o.useRef(new u(1,1,1)),M=o.useRef(new u(1,1,1));o.useLayoutEffect(()=>{c&&(y.current.updateWorldMatrix(!0,!0),ke.copy(y.current.matrixWorld).invert(),Se.makeEmpty(),y.current.traverse(x=>{x.geometry&&(x.geometry.boundingBox||x.geometry.computeBoundingBox(),we.copy(x.matrixWorld).premultiply(ke),ht.copy(x.geometry.boundingBox),ht.applyMatrix4(we),Se.union(ht))}),qt.copy(Se.max).add(Se.min).multiplyScalar(.5),Xt.copy(Se.max).sub(Se.min).multiplyScalar(.5),Zt.copy(Xt).multiply(new u(...c)).add(qt),Qt.set(...b).add(Zt),m.current.position.copy(Qt),L())});const D=o.useMemo(()=>({onDragStart:x=>{Ht.copy(g.current.matrix),kt.copy(g.current.matrixWorld),t&&t(x),L()},onDrag:x=>{Nt.copy(S.current.matrixWorld),ke.copy(Nt).invert(),mt.copy(kt).premultiply(x),we.copy(mt).premultiply(ke),$t.copy(Ht).invert(),Gt.copy(we).multiply($t),r&&g.current.matrix.copy(we),i&&i(we,Gt,mt,x),L()},onDragEnd:()=>{n&&n(),L()},translation:P,translationLimits:w,rotationLimits:E,axisColors:z,hoveredColor:C,opacity:U,scale:O,lineWidth:A,fixed:R,depthTest:v,userData:T,annotations:j,annotationsClass:N}),[t,i,n,P,w,E,f,v,O,A,R,...z,C,U,T,r,j,N]),F=new u;return et(x=>{if(R){const ee=vn(m.current.getWorldPosition(F),O,x.camera,x.size);_.current.setScalar(ee)}e&&e instanceof I&&(g.current.matrix=e),g.current.updateWorldMatrix(!0,!0),Vt.makeRotationFromEuler(m.current.rotation).setPosition(m.current.position).premultiply(g.current.matrixWorld),M.current.setFromMatrixScale(Vt),Le.copy(_.current).divide(M.current),(Math.abs(m.current.scale.x-Le.x)>1e-4||Math.abs(m.current.scale.y-Le.y)>1e-4||Math.abs(m.current.scale.z-Le.z)>1e-4)&&(m.current.scale.copy(Le),x.invalidate())}),o.useImperativeHandle(k,()=>g.current,[]),o.createElement(Ue.Provider,{value:D},o.createElement("group",{ref:S},o.createElement("group",Ze({ref:g,matrix:e,matrixAutoUpdate:!1},te),o.createElement("group",{visible:G,ref:m,position:b,rotation:W},s&&o.createElement(o.Fragment,null,!a&&l[0]&&o.createElement(st,{axis:0,direction:be}),!a&&l[1]&&o.createElement(st,{axis:1,direction:Ee}),!a&&l[2]&&o.createElement(st,{axis:2,direction:Me}),!d&&l[0]&&l[1]&&o.createElement(ft,{axis:2,dir1:be,dir2:Ee}),!d&&l[0]&&l[2]&&o.createElement(ft,{axis:1,dir1:Me,dir2:be}),!d&&l[2]&&l[1]&&o.createElement(ft,{axis:0,dir1:Ee,dir2:Me}),!h&&l[0]&&l[1]&&o.createElement(dt,{axis:2,dir1:be,dir2:Ee}),!h&&l[0]&&l[2]&&o.createElement(dt,{axis:1,dir1:Me,dir2:be}),!h&&l[2]&&l[1]&&o.createElement(dt,{axis:0,dir1:Ee,dir2:Me}),!p&&l[0]&&o.createElement(pt,{axis:0,direction:be}),!p&&l[1]&&o.createElement(pt,{axis:1,direction:Ee}),!p&&l[2]&&o.createElement(pt,{axis:2,direction:Me}))),o.createElement("group",{ref:y},K))))}),po=o.forwardRef(function({children:e,...t},i){const n=fe(r=>r.gl);return $.jsx(xt,{plugin:Tn,args:{renderer:n,...t},ref:i,children:e})}),mo=o.forwardRef(function(e,t){const{type:i,order:n=null,opacity:r=1,color:c=16777215,worldFrame:a=null,...d}=e,h=o.useContext(An),p=o.useContext(Un),l=o.useMemo(()=>new i(d),[i,yo(d)]);o.useEffect(()=>(h.addOverlay(l,n),()=>{h.deleteOverlay(l)}),[l,h]),o.useEffect(()=>{h.setOverlayOrder(l,n)},[l,h,n]),o.useEffect(()=>{l.opacity=r,l.color.set(c),a&&!l.frame?l.frame=a.clone():!a&&l.frame&&(l.frame=null)},[l,r,c,a]),et(()=>{a&&p&&l.frame.copy(a).premultiply(p.group.matrixWorldInverse)}),ho(l,t)});function ho(s,...e){o.useEffect(()=>{e.forEach(t=>{t&&(t instanceof Function?t(s):t.current=s)})},[s,...e])}function go(s,e){if(s===e)return!0;if(!s||!e)return s===e;for(const t in s)if(s[t]!==e[t])return!1;for(const t in e)if(s[t]!==e[t])return!1;return!0}function yo(s){const e=o.useRef();return go(e.current,s)||(e.current=s),e.current}const Yt=new me,Ne=new u;class xn extends nn{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new qe(e,3)),this.setAttribute("uv",new qe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new _e(t,6,1);return this.setAttribute("instanceStart",new oe(i,3,0)),this.setAttribute("instanceEnd",new oe(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new _e(t,6,1);return this.setAttribute("instanceColorStart",new oe(i,3,0)),this.setAttribute("instanceColorEnd",new oe(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new on(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new me);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Yt.setFromBufferAttribute(t),this.boundingBox.union(Yt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ye),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,c=e.count;r<c;r++)Ne.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Ne)),Ne.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ne));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Pe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Je(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ve.line={uniforms:Xe.merge([Pe.common,Pe.fog,Pe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class vo extends rn{static get type(){return"LineMaterial"}constructor(e){super({uniforms:Xe.clone(Ve.line.uniforms),vertexShader:Ve.line.vertexShader,fragmentShader:Ve.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const gt=new ie,Jt=new u,Kt=new u,Z=new ie,Q=new ie,ae=new ie,yt=new u,vt=new I,J=new an,en=new u,$e=new me,Ge=new Ye,ce=new ie;let ue,xe;function tn(s,e,t){return ce.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),ce.multiplyScalar(1/ce.w),ce.x=xe/t.width,ce.y=xe/t.height,ce.applyMatrix4(s.projectionMatrixInverse),ce.multiplyScalar(1/ce.w),Math.abs(Math.max(ce.x,ce.y))}function xo(s,e){const t=s.matrixWorld,i=s.geometry,n=i.attributes.instanceStart,r=i.attributes.instanceEnd,c=Math.min(i.instanceCount,n.count);for(let a=0,d=c;a<d;a++){J.start.fromBufferAttribute(n,a),J.end.fromBufferAttribute(r,a),J.applyMatrix4(t);const h=new u,p=new u;ue.distanceSqToSegment(J.start,J.end,p,h),p.distanceTo(h)<xe*.5&&e.push({point:p,pointOnLine:h,distance:ue.origin.distanceTo(p),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function wo(s,e,t){const i=e.projectionMatrix,r=s.material.resolution,c=s.matrixWorld,a=s.geometry,d=a.attributes.instanceStart,h=a.attributes.instanceEnd,p=Math.min(a.instanceCount,d.count),l=-e.near;ue.at(1,ae),ae.w=1,ae.applyMatrix4(e.matrixWorldInverse),ae.applyMatrix4(i),ae.multiplyScalar(1/ae.w),ae.x*=r.x/2,ae.y*=r.y/2,ae.z=0,yt.copy(ae),vt.multiplyMatrices(e.matrixWorldInverse,c);for(let b=0,W=p;b<W;b++){if(Z.fromBufferAttribute(d,b),Q.fromBufferAttribute(h,b),Z.w=1,Q.w=1,Z.applyMatrix4(vt),Q.applyMatrix4(vt),Z.z>l&&Q.z>l)continue;if(Z.z>l){const f=Z.z-Q.z,v=(Z.z-l)/f;Z.lerp(Q,v)}else if(Q.z>l){const f=Q.z-Z.z,v=(Q.z-l)/f;Q.lerp(Z,v)}Z.applyMatrix4(i),Q.applyMatrix4(i),Z.multiplyScalar(1/Z.w),Q.multiplyScalar(1/Q.w),Z.x*=r.x/2,Z.y*=r.y/2,Q.x*=r.x/2,Q.y*=r.y/2,J.start.copy(Z),J.start.z=0,J.end.copy(Q),J.end.z=0;const A=J.closestPointToPointParameter(yt,!0);J.at(A,en);const R=St.lerp(Z.z,Q.z,A),w=R>=-1&&R<=1,E=yt.distanceTo(en)<xe*.5;if(w&&E){J.start.fromBufferAttribute(d,b),J.end.fromBufferAttribute(h,b),J.start.applyMatrix4(c),J.end.applyMatrix4(c);const f=new u,v=new u;ue.distanceSqToSegment(J.start,J.end,v,f),t.push({point:v,pointOnLine:f,distance:ue.origin.distanceTo(v),object:s,face:null,faceIndex:b,uv:null,uv1:null})}}}class So extends sn{constructor(e=new xn,t=new vo({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let c=0,a=0,d=t.count;c<d;c++,a+=2)Jt.fromBufferAttribute(t,c),Kt.fromBufferAttribute(i,c),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Jt.distanceTo(Kt);const r=new _e(n,2,1);return e.setAttribute("instanceDistanceStart",new oe(r,1,0)),e.setAttribute("instanceDistanceEnd",new oe(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ue=e.ray;const c=this.matrixWorld,a=this.geometry,d=this.material;xe=d.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Ge.copy(a.boundingSphere).applyMatrix4(c);let h;if(i)h=xe*.5;else{const l=Math.max(n.near,Ge.distanceToPoint(ue.origin));h=tn(n,l,d.resolution)}if(Ge.radius+=h,ue.intersectsSphere(Ge)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),$e.copy(a.boundingBox).applyMatrix4(c);let p;if(i)p=xe*.5;else{const l=Math.max(n.near,$e.distanceToPoint(ue.origin));p=tn(n,l,d.resolution)}$e.expandByScalar(p),ue.intersectsBox($e)!==!1&&(i?xo(this,t):wo(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(gt),this.material.uniforms.resolution.value.set(gt.z,gt.w))}}const bo="https://raw.githubusercontent.com/NASA-AMMOS/3DTilesSampleData/master/msl-dingo-gap/0528_0260184_to_s64o256_colorize/0528_0260184_to_s64o256_colorize/0528_0260184_to_s64o256_colorize_tileset.json";function Eo(){const[s,e]=o.useState(null),[t,i]=o.useState(null),n=o.useMemo(()=>{const c=new u().set(40,40,20),a=new u(-c.x,10,c.y*.25),d=new zn(-Math.PI/2),h=new bt().setFromEuler(d);return new I().compose(a,h,c)},[]),r=o.useMemo(()=>{const c=new Ln,a=new On(c),d=new xn().fromEdgesGeometry(a),h=new So(d);return h.material.color.set(16776960),h.material.linewidth=2,h},[]);return o.useEffect(()=>()=>{r.geometry.dispose(),r.material.dispose()},[r]),et(()=>{t&&r&&(r.scale.x=t.aspectRatio,r.position.x=t.aspectRatio/2)}),$.jsxs($.Fragment,{children:[$.jsx("color",{attach:"background",args:[2236962]}),$.jsx("group",{"rotation-x":Math.PI/2,children:$.jsxs(Dn,{url:bo,children:[$.jsx(xt,{plugin:In,fadeDuration:500}),$.jsx(po,{children:$.jsx(mo,{type:Wn,assetId:"3954",apiToken:"",worldFrame:s?s.matrixWorld:null,ref:i})}),$.jsx(xt,{plugin:jn})]})}),$.jsx(Bn,{enableDamping:!0,maxDistance:1e3,minDistance:1,cameraRadius:0}),$.jsx(fo,{scale:150,matrix:n,fixed:!0,children:$.jsx("group",{ref:e,"position-z":-1,children:$.jsx("primitive",{object:r,position:[.5,.5,.5]})})})]})}function Mo(){return $.jsx(Rn,{frameloop:"demand",camera:{position:[0,40,35]},style:{width:"100%",height:"100%",position:"absolute",margin:0,left:0,top:0},onContextMenu:s=>{s.preventDefault()},children:$.jsx(Eo,{})})}fn.createRoot(document.getElementById("root")).render($.jsx(o.StrictMode,{children:$.jsx(Mo,{})}));
//# sourceMappingURL=projection-Bwbjue6j.js.map
