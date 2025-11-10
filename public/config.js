window.BASE_URL = '';
window.SKIP_PREFLIGHT_CHECK = true;
window.VALHALLA_URL = 'https://valhalla1.openstreetmap.de';
window.NOMINATIM_URL = 'https://nominatim.openstreetmap.org';
window.CENTER = { lng: 105.827799, lat: 21.03116 };
window.ZOOM = 10;
window.MAP_STYLES = [
  {
    id: 'openstreetmap',
    label: 'OpenStreetMap',
    style: 'http://localhost:9090/styles/openstreetmap/style.json',
    image:
      'http://localhost:9090/styles/openstreetmap/11/1626/901.png',
  },
  {
    id: 'basic',
    label: 'Basic',
    style: 'http://localhost:9090/styles/basic/style.json',
    image: 'http://localhost:9090/styles/basic/11/1626/901.png',
  },
  {
    id: 'bright',
    label: 'Bright',
    style: 'http://localhost:9090/styles/bright/style.json',
    image: 'http://localhost:9090/styles/bright/11/1626/901.png',
  },
  {
    id: 'dark',
    label: 'Dark',
    style: 'http://localhost:9090/styles/dark/style.json',
    image: 'http://localhost:9090/styles/dark/11/1626/901.png',
  },
  {
    id: 'fiord',
    label: 'Fiord',
    style: 'http://localhost:9090/styles/fiord/style.json',
    image: 'http://localhost:9090/styles/fiord/11/1626/901.png',
  },
  {
    id: 'liberty',
    label: 'Liberty',
    style: 'http://localhost:9090/styles/liberty/style.json',
    image: 'http://localhost:9090/styles/liberty/11/1626/901.png',
  },
  {
    id: 'positron',
    label: 'Positron',
    style: 'http://localhost:9090/styles/positron/style.json',
    image: 'http://localhost:9090/styles/positron/11/1626/901.png',
  },
  {
    id: 'protomap',
    label: 'Protomap',
    style: 'http://localhost:9090/styles/protomap/style.json',
    image: 'http://localhost:9090/styles/protomap/11/1626/901.png',
  },
];
window.MAP_STYLE = window.MAP_STYLES[0];
