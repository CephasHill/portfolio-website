export default {
  slug: 'porsche-911-turbo-s-vfx',
  title: 'CG Porsche 911 Turbo S VFX and Composite',
  year: '2026',
  category: 'VFX / Compositing',
  role: 'VFX / Lookdev / Compositing Artist',
  thumbnail: {
    src: '/projects/porsche-911-turbo-s-vfx/thumbnail.png',
    alt: 'Porsche 911 Turbo S VFX project thumbnail.',
  },
  description:
    "Live-action CG integration of a Porsche 911 Turbo S. This project focused on photorealistic lookdev, accurate camera tracking, and seamless compositing to blend the CG asset into a suburban plate.\n\nGeometry Prep: Re-unwrapped and optimized the purchased asset's UVs into a UDIM layout using Houdini. Added custom tire materials using Substance 3D Painter and heavily edited other existing materials in Houdini.\n\nProcedural Modeling: Created a custom license plate procedurally with a Houdini SOP network, allowing non-destructive edits to the text and plate geometry.",
  tools: [
    'Houdini',
    'Nuke',
    'SynthEyes',
    'Substance 3D Painter',
    'DaVinci Resolve',
    'Premiere Pro',
    'Photoshop',
    'Illustrator',
  ],
  media: [
    {
      type: 'embed',
      src: 'https://www.youtube-nocookie.com/embed/g13sdm6cgso?rel=0',
      alt: 'CG Porsche VFX final video',
      caption: 'Finished video.',
    },
    {
      type: 'embed',
      src: 'https://www.youtube-nocookie.com/embed/EM6uJ-nSwmg?rel=0',
      alt: 'CG Porsche VFX breakdown video',
      caption: 'VFX breakdown.',
    },
    {
      type: 'image',
      src: '/projects/porsche-911-turbo-s-vfx/peter-hill-newuvs.webp',
      alt: 'New UVs generated with Houdini. Original UVs associated with image textures were untouched.',
      caption: 'New UVs generated with Houdini. Original UVs associated with image textures were untouched.',
    },
    {
      type: 'image',
      src: '/projects/porsche-911-turbo-s-vfx/peter-hill-shotsnodes.webp',
      alt: 'Houdini node network for USD shot rendering workflow.',
      caption: 'Houdini node network for USD shot rendering workflow.',
    },
    {
      type: 'image',
      src: '/projects/porsche-911-turbo-s-vfx/peter-hill-licenseplatenodes.webp',
      alt: 'Houdini node network for procedural license plate generation.',
      caption: 'Procedural license plate generation in Houdini.',
    },
  ],
  credits: [
    {
      label: '3D Model',
      name: '2026 Porsche 911 Turbo S Coupe 992 by HKV Studios',
      url: 'https://www.turbosquid.com/FullPreview/2483775',
    },
    {
      label: 'Filmed with help from',
      name: 'Matt Arntsen',
      url: 'https://www.linkedin.com/in/mattarnt/',
    },
  ],
  published: true,
  featured: true,
}
