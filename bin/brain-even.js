#!/usr/bin/env node
import getUserName from '../src/cli.js';
import gameEven from '../src/game-even.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
gameEven(userName);
