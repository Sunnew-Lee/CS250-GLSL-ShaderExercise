#version 330

// // Name: sunwoo.lee
// // Assignment name: Image Manipulate
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
    image.r += sin(coord.x * 90.0);
    image.r += cos(coord.y * 90.0);

    FragColor = vec4(image);
}