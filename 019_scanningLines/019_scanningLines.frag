#version 330

// // Name: sunwoo.lee
// // Assignment name: Scanning Lines
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 FragColor;

void main()
{
    vec2 coord=gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(1.0);

    float size= 12.0;

    float alpha=sin(floor(coord.x*size)+u_time*4.0)+1.0/2.0;

    FragColor = vec4(color, alpha);
}
