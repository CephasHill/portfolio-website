export default {
  slug: 'cs455-ray-tracer',
  title: 'C++ Ray Tracer',
  year: '2026',
  type: 'Software',
  category: 'Graphics Programming',
  role: 'Graphics Programmer',
  thumbnail: {
    src: '/projects/cs455-ray-tracer/scene6-3.webp',
    alt: 'A stylized orange and black character rendered by the C++ ray tracer.',
  },
  description:
    'An educational C++ ray tracing engine built from scratch for CS455. The renderer supports spheres, planes, triangles, polygons, Phong materials, shadows, and reflections across six selectable scenes.\n\nThe project includes an interactive scene picker and configurable output, including PPM and PNG renders. Building the renderer from the ground up made the connection between geometry, lighting, materials, and image generation tangible.',
  tools: ['C++', 'CMake', 'Computer Graphics', 'Ray Tracing'],
  media: [
    {
      type: 'image',
      src: '/projects/cs455-ray-tracer/scene6-3.webp',
      alt: 'Orange and black character rendered with reflective lighting and a ground plane.',
      caption: 'Custom Flapjack scene with reflective ground and directional lighting.',
    },
    {
      type: 'image',
      src: '/projects/cs455-ray-tracer/scene5-2.webp',
      alt: 'Three colored spheres floating above a blue plane.',
      caption: 'Scene 5-2: colored spheres with shadows and reflective surfaces.',
    },
    {
      type: 'image',
      src: '/projects/cs455-ray-tracer/scene5-3.webp',
      alt: 'Three groups of white spheres arranged as snowmen on a reflective plane.',
      caption: 'Scene 5-3: snowmen built from sphere primitives.',
    },
    {
      type: 'image',
      src: '/projects/cs455-ray-tracer/scene6-1.webp',
      alt: 'Reflective sphere and colored triangles rendered against a dark background.',
      caption: 'Scene 6-1: reflective sphere and triangle geometry.',
    },
    {
      type: 'image',
      src: '/projects/cs455-ray-tracer/scene6-2.webp',
      alt: 'A ray-traced composition of spheres, triangles, and a reflective surface.',
      caption: 'Scene 6-2: mixed primitives and reflections.',
    },
  ],
  credits: [
    {
      label: 'Source',
      name: 'CS455_RayTracer on GitHub',
      url: 'https://github.com/CephasHill/CS455_RayTracer',
    },
    {
      label: 'Course',
      name: 'CS455',
    },
  ],
  published: true,
  featured: false,
}
