#version 330

// // Name: sunwoo.lee
// // Assignment name: Image Color Mix
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

out vec4 FragColor;

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec4 image = texture2D(u_tex0,coord);

    color = mix(color,image.rgb,image.a);

    FragColor = vec4(color,1.0);
}