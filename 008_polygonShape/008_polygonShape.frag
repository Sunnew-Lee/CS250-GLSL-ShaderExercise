#version 330

// // Name: sunwoo.lee
// // Assignment name: Polygon Shape
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

const float PI = 3.14159265359;
uniform vec2 u_resolution;
uniform float u_time;
out vec4 FragColor;

float polygonshape(vec2 position, float radius, float sides){
    position = position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;
    return step(radius, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
}

void main()
{
    vec2 position = gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(0.0);

    float polygon = polygonshape(position,0.6,6.0);

    color = vec3(polygon);

    FragColor = vec4(color, 1.0);
}