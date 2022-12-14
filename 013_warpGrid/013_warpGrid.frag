#version 330

// // Name: sunwoo.lee
// // Assignment name: Warp Grid
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
out vec4 FragColor;

void main()
{
    vec2 coord=gl_FragCoord.xy/u_resolution;
    vec3 color=vec3(0.);
    
    color+=sin(coord.x*cos(u_time/60.)*60.)+sin(coord.y*cos(u_time/60.)*10.);
    color+=cos(coord.y*sin(u_time/30.)*10.)+cos(coord.x*sin(u_time/20.)*10.);
    
    color*=sin(u_time/10.)*.5;
    
    FragColor=vec4(color,1.);
}
