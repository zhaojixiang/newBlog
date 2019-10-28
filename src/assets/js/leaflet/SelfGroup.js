// import L from 'leaflet'
/* global L */
L.SelfGroup = L.Layer.extend({

  initialize (layers, options) {
    L.Util.setOptions(this, options);
    this._layers = {};
    var i, len;

    if (layers) {
      for (i = 0, len = layers.length; i < len; i++) {
        this.addLayer(layers[i]);
      }
    }
  },
  // @method addLayer(layer: Layer): this
  // Adds the given layer to the group.
  addLayer (layer) {
    var id = this.getLayerId(layer);

    this._layers[id] = layer;
    if (this._map) {
      this._map.addLayer(layer);
    }

    return this;
  },

  // @method removeLayer(layer: Layer): this
  // Removes the given layer from the group.
  // @alternative
  // @method removeLayer(id: Number): this
  // Removes the layer with the given internal ID from the group.
  removeLayer (layer) {
    var id = layer in this._layers ? layer : this.getLayerId(layer);

    if (this._map && this._layers[id]) {
      this._map.removeLayer(this._layers[id]);
    }

    delete this._layers[id];

    return this;
  },

  // @method hasLayer(layer: Layer): Boolean
  // Returns `true` if the given layer is currently added to the group.
  // @alternative
  // @method hasLayer(id: Number): Boolean
  // Returns `true` if the given internal ID is currently added to the group.
  hasLayer (layer) {
    return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
  },

  // @method clearLayers(): this
  // Removes all the layers from the group.
  clearLayers () {
    return this.eachLayer(this.removeLayer, this);
  },

  // @method invoke(methodName: String, …): this
  // Calls `methodName` on every layer contained in this group, passing any
  // additional parameters. Has no effect if the layers contained do not
  // implement `methodName`.
  invoke (methodName) {
    var args = Array.prototype.slice.call(arguments, 1),
      i, layer;

    for (i in this._layers) {
      layer = this._layers[i];

      if (layer[methodName]) {
        layer[methodName].apply(layer, args);
      }
    }

    return this;
  },

  onAdd (map) {
    this.eachLayer(map.addLayer, map);
  },

  onRemove (map) {
    this.eachLayer(map.removeLayer, map);
  },

  // @method eachLayer(fn: Function, context?: Object): this
  // Iterates over the layers of the group, optionally specifying context of the iterator function.
  // ```js
  // group.eachLayer(function (layer) {
  // 	layer.bindPopup('Hello');
  // });
  // ```
  eachLayer (method, context) {
    for (var i in this._layers) {
      method.call(context, this._layers[i]);
    }
    return this;
  },

  // @method getLayer(id: Number): Layer
  // Returns the layer with the given internal ID.
  getLayer (id) {
    return this._layers[id];
  },

  // @method getLayers(): Layer[]
  // Returns an array of all the layers added to the group.
  getLayers () {
    var layers = [];
    this.eachLayer(layers.push, layers);
    return layers;
  },

  // @method setZIndex(zIndex: Number): this
  // Calls `setZIndex` on every layer contained in this group, passing the z-index.
  setZIndex (zIndex) {
    return this.invoke('setZIndex', zIndex);
  },

  // @method getLayerId(layer: Layer): Number
  // Returns the internal ID for a layer
  getLayerId (layer) {
    return L.Util.stamp(layer);
  }
});
