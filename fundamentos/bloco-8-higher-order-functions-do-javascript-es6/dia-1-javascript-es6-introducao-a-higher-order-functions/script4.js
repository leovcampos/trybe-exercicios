const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
    const minDmgD = 15;
    const dmgDragon = Math.floor(Math.random() * (dragon.strength - minDmgD +1) + minDmgD);
    return dmgDragon;
};

const warriorAttack = (warrior) => {
    const minDmgW = warrior.strength;
    const maxDmgW = minDmgW * warrior.weaponDmg;
    const dmgWarrior = Math.floor(Math.random() * (maxDmgW - minDmgW +1) + minDmgW);
    return dmgWarrior;
}

const mageAttack = (mage) => {
    mage.mana < 15 
    ? {
        dano: 'Não possui mana suficiente',
        manaGasta: 0,
    }
    :{
        dano: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence),
        manaGasta: 15,
    }
}