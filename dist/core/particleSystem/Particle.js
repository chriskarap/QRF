System.register(['../sculpt', '../time', '../utils', '../constants', '../error', '../math'], function (_export, _context) {
    "use strict";

    var Sculpt, Time, number, vector3, CONST, ErrorProtectedMethodCall, Vector3;


    function enforce() {}

    /**
     * set general parameters for each Particle
     * @constructor
     *
     * @version 0.0.1
     *
     * @param { THREE.SpriteMaterial } [ material = new THREE.SpriteMaterial() ] - particle's material
     *
     * @param { Number } [ lifetime ] - Time till die
     * @param { Number } [ lifetime.value = 1000 ] - set value in milliseconds
     * @param { Number } [ lifetime.randomness = 100 ] - particles create in unit of time
     *
     * @param { object } [ particleSize ] - Particle's scale parameter,
     *                                      if value or randomness is a number, it is scale symmetric
     * @param { THREE.Vector3 | Number } [ particleSize.value = new THREE.Vector3(0.05, 0.05, 0.05) ] particle scaling vector
     * @param { THREE.Vector3 | Number } [ particleSize.randomness = new THREE.Vector3(0.01, 0.01, 0.01) ] particle scaling vector randomising parameter
     *
     * @param { object } [ startPositionRandomness ] - Particle's position parameter by randomness
     * @param { Number } [ startPositionRandomness.randomness = 1 ]
     */

    // TODO: set default value
    return {
        setters: [function (_sculpt) {
            Sculpt = _sculpt.Sculpt;
        }, function (_time) {
            Time = _time.Time;
        }, function (_utils) {
            number = _utils.number;
            vector3 = _utils.vector3;
        }, function (_constants) {
            CONST = _constants;
        }, function (_error) {
            ErrorProtectedMethodCall = _error.ErrorProtectedMethodCall;
        }, function (_math) {
            Vector3 = _math.Vector3;
        }],
        execute: function () {
            class Particle extends Sculpt {
                constructor(material, lifetime, particleSize, startPosition) {

                    super(new THREE.Sprite(material));

                    this.bornTime = Time.now;
                    this.lifetime = number.addNoise(lifetime.value, lifetime.randomness);

                    particleSize.value = vector3.toVector3(particleSize.value);
                    startPosition.randomness = vector3.toVector3(startPosition.randomness);

                    // set particle random size
                    this.scale = new Vector3().copy(particleSize.value).addNoise(particleSize.randomness);

                    // set particle random position
                    let initial = new Vector3().addNoise(startPosition.randomness);
                    this.position.copy(initial);
                    this.initialPosition = new Vector3().copy(initial);

                    this.on(CONST.UPDATE, () => {
                        this.update(enforce);
                    });
                }

                update(e) {
                    if (e !== enforce) {
                        throw new ErrorProtectedMethodCall('update');
                    }
                }

                isDead() {
                    return Time.now - this.bornTime > this.lifetime;
                }
            }

            _export('Particle', Particle);
        }
    };
});