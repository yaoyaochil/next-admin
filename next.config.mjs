import fs from 'fs';
import yaml from 'js-yaml';

let yamlConfig = {};
try {
    let fileContents = fs.readFileSync('./config.yaml', 'utf8');
    yamlConfig = yaml.load(fileContents);
} catch (e) {
    console.log(e);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: Object.entries(yamlConfig).reduce((acc, [key, value]) => {
        if (typeof value === 'object' && value !== null) {
            for (const [subKey, subValue] of Object.entries(value)) {
                acc[`${key.toUpperCase()}_${subKey.toUpperCase()}`] = subValue;
            }
        } else {
            acc[key.toUpperCase()] = value;
        }
        return acc;
    }, {}),
};

export default nextConfig;