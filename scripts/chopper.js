const chopper = extendContent(UnitType, "chopper", {});

chopper.constructor = () => {
	const unit = extend(UnitEntity, {})
	return unit;
}

const weapon = new Weapon("bomber");

const bomb = extend(BombBulletType, {
	splashDamage: 130,
	width: 12,
	height: 10,
	splashDamageRadius: 32,
	hitEffect: Fx.flakExplosion,
	shootEffect: Fx.none,
	smokeEffect: Fx.none,
	status: StatusEffects.blasted,
	statusDuration: 60
});

Object.assign(weapon, {
	reload: 11,
	shootY: 3,
	ejectEffect: Fx.none,
	shootSound: Sounds.none,
	ignoreRotation: true,
	minShootVelocity: 0.15,
	shootCone: 180,
	bullet: bomb
});