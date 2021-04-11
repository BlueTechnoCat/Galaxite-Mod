const chopper = extendContent(UnitType, "chopper", {});
chopper.constructor = () => {
	const unit = extend(UnitEntity, {})
	return unit;
}

if (!unit.flying()) {
	weapons.remove("bomber");
}
else if(unit.flying()) {
	weapons.add(new Weapon("bomber")); {{
			reload = 25;
			ejectEffect = Fx.none;
			ignoreRotation = true;
			shootSound = Sounds.none;
			damage = 130f;
			inaccuarcy = 12;
		}};
}