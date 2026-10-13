const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=82`

export const categories = [
  {
    id: 'easy-care',
    name: 'Easy-care favorites',
    description: 'Good-looking greens that are happy to take it slow.',
  },
  {
    id: 'bright-light',
    name: 'For brighter corners',
    description: 'Sun-loving shapes for your brightest windowsills.',
  },
  {
    id: 'statement',
    name: 'Statement leaves',
    description: 'Room-making foliage with a little more presence.',
  },
]

export const plants = [
  { id: 'golden-pothos', name: 'Golden Pothos', price: 24, category: 'easy-care', image: photo('photo-1501004318641-b39e6451bec6'), alt: 'Trailing green pothos leaves in a bright room' },
  { id: 'snake-plant', name: 'Snake Plant', price: 32, category: 'easy-care', image: photo('photo-1485955900006-10f4d324d411'), alt: 'Upright sculptural succulent foliage' },
  { id: 'zz-plant', name: 'ZZ Plant', price: 38, category: 'easy-care', image: photo('photo-1497250681960-ef046c08a56e'), alt: 'Glossy green leaves on a healthy indoor plant' },
  { id: 'heartleaf-philodendron', name: 'Heartleaf Philodendron', price: 28, category: 'easy-care', image: photo('photo-1518531933037-91b2f5f229cc'), alt: 'Soft green trailing foliage' },
  { id: 'jade-plant', name: 'Jade Plant', price: 26, category: 'easy-care', image: photo('photo-1494438639946-1ebd1d20bf85'), alt: 'Compact potted greenery on a shelf' },
  { id: 'cast-iron-plant', name: 'Cast Iron Plant', price: 42, category: 'easy-care', image: photo('photo-1483794344563-d27a8d18014e'), alt: 'Broad deep-green leaves in a calm interior' },
  { id: 'echeveria', name: 'Echeveria', price: 18, category: 'bright-light', image: photo('photo-1459156212016-c812468e2115'), alt: 'Sunlit succulent rosette in a small pot' },
  { id: 'aloe-vera', name: 'Aloe Vera', price: 22, category: 'bright-light', image: photo('photo-1525498128493-380d1990a112'), alt: 'Aloe-like pointed leaves growing upright' },
  { id: 'string-of-pearls', name: 'String of Pearls', price: 30, category: 'bright-light', image: photo('photo-1499209974431-9dddcece7f88'), alt: 'Delicate trailing plant in warm natural light' },
  { id: 'bird-of-paradise', name: 'Bird of Paradise', price: 68, category: 'bright-light', image: photo('photo-1466692476868-aef1dfb1e735'), alt: 'Large tropical leaves reaching toward sunlight' },
  { id: 'rubber-plant', name: 'Rubber Plant', price: 48, category: 'bright-light', image: photo('photo-1509114397022-ed747cca3f65'), alt: 'Upright broad-leaf tropical houseplant' },
  { id: 'pencil-cactus', name: 'Pencil Cactus', price: 34, category: 'bright-light', image: photo('photo-1512428813834-c702c7702b78'), alt: 'Architectural cactus-like stems in a planter' },
  { id: 'monstera-deliciosa', name: 'Monstera Deliciosa', price: 54, category: 'statement', image: photo('photo-1459411552884-841db9b3cc2a'), alt: 'Large split tropical leaves with rich green color' },
  { id: 'fiddle-leaf-fig', name: 'Fiddle Leaf Fig', price: 72, category: 'statement', image: photo('photo-1520412099551-62b6bafeb5bb'), alt: 'Tall indoor tree with broad sculptural leaves' },
  { id: 'calathea-orbifolia', name: 'Calathea Orbifolia', price: 46, category: 'statement', image: photo('photo-1527061011665-3652c757a4d4'), alt: 'Decorative broad leaves with a tropical look' },
  { id: 'parlor-palm', name: 'Parlor Palm', price: 36, category: 'statement', image: photo('photo-1487530811176-3780de880c2d'), alt: 'Feathery palm fronds in a home setting' },
  { id: 'bird-nest-fern', name: 'Bird’s Nest Fern', price: 33, category: 'statement', image: photo('photo-1441974231531-c6227db76b6e'), alt: 'Lush fern greenery with layered foliage' },
  { id: 'monstera-adansonii', name: 'Monstera Adansonii', price: 39, category: 'statement', image: photo('photo-1459156212016-c812468e2115'), alt: 'Trailing tropical foliage with a delicate silhouette' },
]