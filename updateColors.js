const fs = require('fs');
const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css') || f.endsWith('.tsx')).map(f => dir + '/' + f);
files.push('./src/index.css');

const replacements = {
  '#0d0b0e': '#0C0D10',
  '#1a1420': '#14161B',
  '#C9A84C': '#E8D8B8',
  '#B76E79': '#9CA3AF',
  '#E8C96A': '#F2E7CF',
  'rgba(201, 168, 76,': 'rgba(232, 216, 184,', 
  '201, 168, 76': '232, 216, 184',
  'rgba(183, 110, 121,': 'rgba(156, 163, 175,',
  '183, 110, 121': '156, 163, 175',
  'rgba(13, 11, 14,': 'rgba(12, 13, 16,',
  'rgba(26, 20, 32,': 'rgba(20, 22, 27,'
};

let replaceCount = 0;
files.forEach(path => {
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');
  let changed = false;
  for (let [old, newStr] of Object.entries(replacements)) {
      if (content.match(new RegExp(old, 'gi'))) {
          content = content.replace(new RegExp(old, 'gi'), newStr);
          changed = true;
          replaceCount++;
      }
  }
  if (changed) fs.writeFileSync(path, content);
});
console.log('Update complete. Replaced ' + replaceCount + ' instances.');

