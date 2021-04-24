const chopper = extendContent(UnitType, "chopper", {});

chopper.constructor = () => {
	const unit = extend(UnitEntity, {})
	return unit;
}

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

