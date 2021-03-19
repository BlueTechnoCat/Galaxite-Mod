const chopper = extendContent(UnitType, "chopper", {});
chopper.constructor = () => {
	const unit = extend(UnitEntity, {})
	return unit;
}

if (!unit.IsFlying()) {
	weapons.remove("bomber");
	return;
}
else (unit.IsFlying()) {
	weapons.add(new Weapon("bomber")) {{
		reload = 25;
		ejectEffect = Fx.none;
		ignoreRotation = true;
		shootSound = Sounds.none;
		inaccuarcy = 12;
	}};
}