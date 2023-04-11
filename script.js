(function(){
    var script = {
 "definitions": [{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_camera"
  }
 ],
 "id": "ThumbnailList_637AD26F_7273_8426_41D3_0585C0680C3E_playlist"
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38",
 "thumbnailUrl": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_t.jpg",
 "label": "Comedor",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6666BA08_7294_87EB_41C8_480566562AF3",
  "this.overlay_64BDC53C_7294_8C2A_41CF_F93DBB11A596"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1500,
 "id": "effect_789A2EBA_6C0D_1DE3_41C8_DDF7679BF259",
 "easing": "quad_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
   "media": "this.panorama_6694784F_7295_8466_41C4_50860639EF58",
   "camera": "this.panorama_6694784F_7295_8466_41C4_50860639EF58_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_camera"
  }
 ],
 "id": "ThumbnailList_64524FEE_72B4_9C26_41D1_7B86BE10D72C_playlist"
},
{
 "class": "FadeInEffect",
 "duration": 1500,
 "id": "effect_789A5EBA_6C0D_1DE3_41B5_22218A1745A6",
 "easing": "quad_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68",
 "thumbnailUrl": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_t.jpg",
 "label": "Dist 1",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/b/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/b/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/b/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/b/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/b/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/f/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/f/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/f/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/f/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/f/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/u/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/u/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/u/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/u/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/u/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/r/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/r/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/r/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/r/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/r/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/d/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/d/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/d/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/d/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/d/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/l/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/l/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/l/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/l/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_0/l/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7C5E326D_71C6_7D7F_41B9_E426CB3B29BD",
  "this.overlay_7C5E226D_71C6_7D7F_41D9_81CC31F4079C"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1500,
 "id": "effect_78D72D14_6C15_FCA7_41D5_14279C657260",
 "easing": "quad_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A",
 "thumbnailUrl": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_t.jpg",
 "label": "Estudio",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/b/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/f/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/u/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/r/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/d/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/l/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7FDDDE7D_6C17_1D60_41CE_6E590EBC9860"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1500,
 "id": "effect_786BF722_6C0F_0CE3_41D3_94BFF1973CBF",
 "easing": "quad_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1500,
 "id": "effect_78840D23_6C14_FCE1_41CA_4D69E5905610",
 "easing": "quad_out"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1500,
 "id": "effect_781243EC_6C17_0B66_41D4_A6DB982F6D96",
 "easing": "quad_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D",
 "thumbnailUrl": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_t.jpg",
 "label": "Cocina",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/b/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/b/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/b/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/b/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/b/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/f/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/f/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/f/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/f/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/f/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/u/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/u/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/u/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/u/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/u/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/r/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/r/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/r/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/r/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/r/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/d/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/d/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/d/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/d/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/d/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/l/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/l/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/l/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/l/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_0/l/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7ABCC88F_71C6_6DBA_41D1_10D6F232E169"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6694784F_7295_8466_41C4_50860639EF58"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B",
 "thumbnailUrl": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_t.jpg",
 "label": "Dist 2",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_66EB3C71_729C_FC3A_41B8_39BDD693EAC1",
  "this.overlay_6654A9B6_729C_8426_41CF_0B31E90B06ED",
  "this.overlay_67923109_729C_85ED_41D3_A12E74B24607"
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1500,
 "id": "effect_786BC722_6C0F_0CE3_41A5_57563DB4CE37",
 "easing": "quad_out"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6694784F_7295_8466_41C4_50860639EF58_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2",
 "thumbnailUrl": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_t.jpg",
 "label": "Cocina",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_67C8B277_72AD_8426_41CA_1CCF349440F9",
  "this.overlay_64EE0C66_72AC_BC27_41D7_C470641E5401"
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1500,
 "id": "effect_78841D23_6C14_FCE1_41D1_194C6C4526B0",
 "easing": "quad_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70",
 "thumbnailUrl": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_t.jpg",
 "label": "Sala-comedor",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/b/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/b/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/b/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/b/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/b/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/f/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/f/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/f/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/f/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/f/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/u/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/u/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/u/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/u/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/u/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/r/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/r/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/r/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/r/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/r/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/d/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/d/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/d/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/d/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/d/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/l/0/{row}_{column}.jpg",
      "width": 5632,
      "rowCount": 11,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/l/1/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/l/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/l/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_0/l/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7D35A04B_71C6_DCBA_41C8_2CF553E00D05",
  "this.overlay_7D35B04B_71C6_DCBA_41D8_E0CE1DA5982E",
  "this.overlay_7D35804B_71C6_DCBA_418A_105F998F2C31"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1500,
 "id": "effect_795DC06D_6C0B_0561_41D1_1A3E1D35F1D9",
 "easing": "quad_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_6694784F_7295_8466_41C4_50860639EF58",
 "thumbnailUrl": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_t.jpg",
 "label": "Estudio V2",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/b/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/f/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/u/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/r/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/d/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/l/0/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_651A5C77_72AD_BC25_41D8_2061E173A1DA"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 0)",
   "media": "this.panorama_6694784F_7295_8466_41C4_50860639EF58",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6694784F_7295_8466_41C4_50860639EF58_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "FadeInEffect",
 "duration": 1500,
 "id": "effect_78712473_6C0D_0D61_41B9_A3972B5E2354",
 "easing": "quad_out"
},
{
 "class": "FadeInEffect",
 "duration": 1500,
 "id": "effect_781253EB_6C17_0B61_4195_02041C7D5B39",
 "easing": "quad_out"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1500,
 "id": "effect_78713473_6C0D_0D61_41D7_8DE5587D4A1B",
 "easing": "quad_out"
},
{
 "class": "FadeInEffect",
 "duration": 1500,
 "id": "effect_795DA06D_6C0B_0561_41B6_79EA8F0BD58E",
 "easing": "quad_out"
},
{
 "class": "FadeInEffect",
 "duration": 1500,
 "id": "effect_78D73D14_6C15_FCA7_41CE_6F08ED1DC5DD",
 "easing": "quad_out"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "minWidth": 100,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "width": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "shadow": false,
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "class": "ViewerArea",
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 50,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "width": 79.05,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "borderSize": 0,
 "right": "2.17%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 641,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "data": {
  "name": "--SETTINGS"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_64931F2E_6BFF_1CE3_41AF_C78231D80F2B",
 "left": "1.81%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "width": 984,
 "children": [
  "this.Image_6416D021_6BF5_04E1_41C1_88E07DE13A9E"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "1.62%",
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 275,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Encabezado"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": "1.33%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "width": 573,
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": 133,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Pie de Pagina Ingreso"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_784D8647_6C15_0CA1_41C0_9869996BB760",
 "left": "1.33%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "width": 573,
 "children": [
  "this.Label_78377617_6C15_0CA1_41AF_F810EF0F45AC",
  "this.Label_78372617_6C15_0CA1_41D7_FB07D8471DFB"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": 133,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Pie de Pagina Estudio"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "visible",
 "visible": false,
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B",
 "left": "1.33%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "width": 573,
 "children": [
  "this.Label_7EF19C26_6C1B_3CE3_41B0_7D884715811D",
  "this.Label_7EF1BC26_6C1B_3CE3_41D8_92351E8978D7"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": 133,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Pie de Pagina Sala Comedor"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "visible",
 "visible": false,
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_7F4CE764_6C1B_0B67_41B1_C952C31B44CC",
 "left": "1.33%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "width": 573,
 "children": [
  "this.Label_7F330729_6C1B_0CE1_41C5_0E692F9DA252",
  "this.Label_7F332729_6C1B_0CE1_41AE_43AF892DA1AE"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": 133,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Pie de Pagina Cocina"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "visible",
 "visible": false,
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_63F8692D_7274_842A_41B5_B3BC1A9C029D",
 "left": "1.33%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "width": 573,
 "children": [
  "this.Label_63028906_7274_85E7_41D8_EE5D77CEA81B",
  "this.Label_6302E906_7274_85E7_41D4_6A28B4ADAF3F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": 133,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Pie de Pagina Estancia"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "visible",
 "visible": false,
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_615132CE_726C_8467_41D0_1C25C8DFC6A5",
 "left": "1.33%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "width": 573,
 "children": [
  "this.Label_615E02AD_726C_8425_41D2_6DDA33D64346",
  "this.Label_615FE2AD_726C_8425_41DB_414AE0D3FCD3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": 133,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Pie de Pagina Comedor"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "visible",
 "visible": false,
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86",
 "left": "1.33%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "width": 573,
 "children": [
  "this.Label_61C1181E_726D_83E7_41D3_1A9D320CBE28",
  "this.Label_61C1381F_726D_83E6_41DA_6C22D89470CD"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": 133,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Pie de Pagina Cocina"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "visible",
 "visible": false,
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "borderSize": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": 0,
 "height": 118,
 "shadow": false,
 "backgroundOpacity": 0.64,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--MENU"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "visible",
 "visible": false,
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "borderSize": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "--INFO photo"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "scroll",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "borderSize": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "--INFO photoalbum"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "scroll",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "borderSize": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "scroll",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "borderSize": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "--LOCATION"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "scroll",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "borderSize": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "--FLOORPLAN"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "scroll",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "borderSize": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "scroll",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "borderSize": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "scroll",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "borderSize": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "--REALTOR"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "scroll",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemThumbnailShadow": true,
 "id": "ThumbnailList_637AD26F_7273_8426_41D3_0585C0680C3E",
 "scrollBarColor": "#FFFFFF",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "normal",
 "minWidth": 20,
 "itemThumbnailShadowVerticalLength": 3,
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "right": "2.55%",
 "itemPaddingRight": 3,
 "itemLabelFontFamily": "Arial",
 "itemThumbnailOpacity": 1,
 "itemThumbnailShadowHorizontalLength": 3,
 "verticalAlign": "top",
 "itemBorderRadius": 0,
 "width": "4.345%",
 "paddingRight": 0,
 "itemOpacity": 1,
 "height": 109,
 "shadow": false,
 "itemThumbnailShadowOpacity": 0.54,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 50,
 "itemThumbnailShadowSpread": 1,
 "propagateClick": false,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "itemBackgroundColorRatios": [],
 "layout": "horizontal",
 "rollOverItemBackgroundOpacity": 0,
 "paddingLeft": 0,
 "rollOverItemLabelFontWeight": "normal",
 "borderSize": 0,
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_637AD26F_7273_8426_41D3_0585C0680C3E_playlist",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 8,
 "bottom": "0%",
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "gap": 10,
 "itemThumbnailHeight": 50,
 "paddingTop": 0,
 "itemLabelFontColor": "#FFFFFF",
 "class": "ThumbnailList",
 "paddingBottom": 10,
 "click": "this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, true, 0, null, null, false); this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, 0, null, null, false); this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, false, 0, null, null, false); this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, false, 0, null, null, false); this.setComponentVisibility(this.Container_7F4CE764_6C1B_0B67_41B1_C952C31B44CC, false, 0, null, null, false); this.setComponentVisibility(this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5, false, 0, null, null, false); this.setComponentVisibility(this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86, false, 0, null, null, false)",
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 9,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemPaddingBottom": 3,
 "horizontalAlign": "left",
 "borderRadius": 5,
 "itemThumbnailWidth": 50,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "itemThumbnailShadowColor": "#000000"
},
{
 "itemThumbnailShadow": true,
 "id": "ThumbnailList_64524FEE_72B4_9C26_41D1_7B86BE10D72C",
 "scrollBarColor": "#FFFFFF",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "normal",
 "minWidth": 20,
 "itemThumbnailShadowVerticalLength": 3,
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "right": "6.77%",
 "itemPaddingRight": 3,
 "itemLabelFontFamily": "Arial",
 "itemThumbnailOpacity": 1,
 "itemThumbnailShadowHorizontalLength": 3,
 "verticalAlign": "top",
 "itemBorderRadius": 0,
 "width": "4.103%",
 "paddingRight": 0,
 "itemOpacity": 1,
 "height": 109,
 "shadow": false,
 "itemThumbnailShadowOpacity": 0.54,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 50,
 "itemThumbnailShadowSpread": 1,
 "propagateClick": false,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "itemBackgroundColorRatios": [],
 "layout": "horizontal",
 "rollOverItemBackgroundOpacity": 0,
 "paddingLeft": 0,
 "rollOverItemLabelFontWeight": "normal",
 "borderSize": 0,
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_64524FEE_72B4_9C26_41D1_7B86BE10D72C_playlist",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 8,
 "bottom": "0%",
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "gap": 10,
 "itemThumbnailHeight": 50,
 "paddingTop": 0,
 "itemLabelFontColor": "#FFFFFF",
 "class": "ThumbnailList",
 "paddingBottom": 10,
 "click": "this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, 0, null, null, false); this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, false, 0, null, null, false); this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, false, 0, null, null, false); this.setComponentVisibility(this.Container_7F4CE764_6C1B_0B67_41B1_C952C31B44CC, false, 0, null, null, false); this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, false, 0, null, null, false); this.setComponentVisibility(this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5, false, 0, null, null, false); this.setComponentVisibility(this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86, false, 0, null, null, false)",
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 9,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemPaddingBottom": 3,
 "horizontalAlign": "left",
 "borderRadius": 5,
 "itemThumbnailWidth": 50,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "itemThumbnailShadowColor": "#000000"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "minWidth": 1,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "shadow": false,
 "maxWidth": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "minWidth": 1,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "shadow": false,
 "maxWidth": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "minWidth": 1,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "shadow": false,
 "maxWidth": 58,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "minWidth": 1,
 "width": 100,
 "borderSize": 0,
 "right": 30,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": 8,
 "height": 75,
 "shadow": false,
 "maxWidth": 49,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 37,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "minWidth": 1,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "shadow": false,
 "maxWidth": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "minWidth": 1,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "shadow": false,
 "maxWidth": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4); if(!this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D.get('visible')){ this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, false, 0, null, null, false) }; if(!this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5.get('visible')){ this.setComponentVisibility(this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5, false, 0, null, null, false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0_HS_0_0.png",
      "width": 98,
      "height": 100
     }
    ]
   },
   "pitch": -26.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1
  }
 ],
 "id": "overlay_6666BA08_7294_87EB_41C8_480566562AF3",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 3.9,
   "yaw": 1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0_HS_0_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -26.08
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6); if(!this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5.get('visible')){ this.setComponentVisibility(this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5, false, 0, null, null, false) }; if(!this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86.get('visible')){ this.setComponentVisibility(this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86, false, 0, null, null, false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0_HS_1_0.png",
      "width": 98,
      "height": 100
     }
    ]
   },
   "pitch": -9.26,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 91.7
  }
 ],
 "id": "overlay_64BDC53C_7294_8C2A_41CF_F93DBB11A596",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.29,
   "yaw": 91.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6691E7E2_7294_8C5E_41D2_3E3DCE2BFD38_0_HS_1_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -9.26
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2); if(!this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')){ this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, 0, this.effect_78841D23_6C14_FCE1_41D1_194C6C4526B0, 'showEffect', false) } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, 0, this.effect_78840D23_6C14_FCE1_41CA_4D69E5905610, 'hideEffect', false) }; if(!this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B.get('visible')){ this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, true, 0, this.effect_78841D23_6C14_FCE1_41D1_194C6C4526B0, 'showEffect', false) } else { this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, false, 0, this.effect_78840D23_6C14_FCE1_41CA_4D69E5905610, 'hideEffect', false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.01,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_1_HS_3_0.png",
      "width": 197,
      "height": 201
     }
    ]
   },
   "pitch": -22.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 12.43
  }
 ],
 "id": "overlay_7C5E326D_71C6_7D7F_41B9_E426CB3B29BD",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.01,
   "yaw": 12.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_1_HS_3_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -22.81
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1); if(!this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')){ this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, 0, this.effect_781253EB_6C17_0B61_4195_02041C7D5B39, 'showEffect', false) } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, 0, this.effect_781243EC_6C17_0B66_41D4_A6DB982F6D96, 'hideEffect', false) }; if(!this.Container_784D8647_6C15_0CA1_41C0_9869996BB760.get('visible')){ this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, true, 0, this.effect_781253EB_6C17_0B61_4195_02041C7D5B39, 'showEffect', false) } else { this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, false, 0, this.effect_781243EC_6C17_0B66_41D4_A6DB982F6D96, 'hideEffect', false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_1_HS_4_0.png",
      "width": 197,
      "height": 201
     }
    ]
   },
   "pitch": -3.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -152.26
  }
 ],
 "id": "overlay_7C5E226D_71C6_7D7F_41D9_81CC31F4079C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.34,
   "yaw": -152.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7C5E426C_71C6_7D7E_41A4_6FFCFD7F1A68_1_HS_4_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -3.89
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0); if(!this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')){ this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, 0, this.effect_78D73D14_6C15_FCA7_41CE_6F08ED1DC5DD, 'showEffect', false) } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, 0, this.effect_78D72D14_6C15_FCA7_41D5_14279C657260, 'hideEffect', false) }; if(!this.Container_784D8647_6C15_0CA1_41C0_9869996BB760.get('visible')){ this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, true, 0, this.effect_78D73D14_6C15_FCA7_41CE_6F08ED1DC5DD, 'showEffect', false) } else { this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, false, 0, this.effect_78D72D14_6C15_FCA7_41D5_14279C657260, 'hideEffect', false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.33,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0_HS_0_0.png",
      "width": 49,
      "height": 50
     }
    ]
   },
   "pitch": -4.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 79.37
  }
 ],
 "id": "overlay_7FDDDE7D_6C17_1D60_41CE_6E590EBC9860",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.33,
   "yaw": 79.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_60FFF649_6BF5_0CA1_41D7_C796F2276E6A_0_HS_0_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -4.78
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2); if(!this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B.get('visible')){ this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, true, 0, this.effect_78712473_6C0D_0D61_41B9_A3972B5E2354, 'showEffect', false) } else { this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, false, 0, this.effect_78713473_6C0D_0D61_41D7_8DE5587D4A1B, 'hideEffect', false) }; if(!this.Container_7F4CE764_6C1B_0B67_41B1_C952C31B44CC.get('visible')){ this.setComponentVisibility(this.Container_7F4CE764_6C1B_0B67_41B1_C952C31B44CC, true, 0, this.effect_78712473_6C0D_0D61_41B9_A3972B5E2354, 'showEffect', false) } else { this.setComponentVisibility(this.Container_7F4CE764_6C1B_0B67_41B1_C952C31B44CC, false, 0, this.effect_78713473_6C0D_0D61_41D7_8DE5587D4A1B, 'hideEffect', false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_1_HS_0_0.png",
      "width": 197,
      "height": 201
     }
    ]
   },
   "pitch": -27.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -115.88
  }
 ],
 "id": "overlay_7ABCC88F_71C6_6DBA_41D1_10D6F232E169",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 3.85,
   "yaw": -115.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7ABCD88F_71C6_6DBA_4186_0CB77BF6824D_1_HS_0_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -27.63
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5); if(!this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D.get('visible')){ this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, false, 0, null, null, false) }; if(!this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5.get('visible')){ this.setComponentVisibility(this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5, false, 0, null, null, false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.96,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_1_HS_0_0.png",
      "width": 98,
      "height": 100
     }
    ]
   },
   "pitch": -24.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.3
  }
 ],
 "id": "overlay_66EB3C71_729C_FC3A_41B8_39BDD693EAC1",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 3.96,
   "yaw": -88.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_1_HS_0_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -24.38
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6); if(!this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D.get('visible')){ this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, false, 0, null, null, false) }; if(!this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86.get('visible')){ this.setComponentVisibility(this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86, false, 0, null, null, false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_1_HS_1_0.png",
      "width": 98,
      "height": 100
     }
    ]
   },
   "pitch": -5.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -114.17
  }
 ],
 "id": "overlay_6654A9B6_729C_8426_41CF_0B31E90B06ED",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.32,
   "yaw": -114.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_1_HS_1_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -5.89
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7); if(!this.Container_784D8647_6C15_0CA1_41C0_9869996BB760.get('visible')){ this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, false, 0, null, null, false) }; if(!this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D.get('visible')){ this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, false, 0, null, null, false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_1_HS_2_0.png",
      "width": 98,
      "height": 100
     }
    ]
   },
   "pitch": -1.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 126.23
  }
 ],
 "id": "overlay_67923109_729C_85ED_41D3_A12E74B24607",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.34,
   "yaw": 126.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_662BE5B9_729C_8C2A_41AF_B659CD54213B_1_HS_2_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -1.17
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5); if(!this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5.get('visible')){ this.setComponentVisibility(this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5, false, 0, null, null, false) }; if(!this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86.get('visible')){ this.setComponentVisibility(this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86, false, 0, null, null, false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0_HS_0_0.png",
      "width": 98,
      "height": 100
     }
    ]
   },
   "pitch": -8.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.15
  }
 ],
 "id": "overlay_67C8B277_72AD_8426_41CA_1CCF349440F9",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.29,
   "yaw": -0.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0_HS_0_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -8.88
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4); if(!this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D.get('visible')){ this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, false, 0, null, null, false) }; if(!this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86.get('visible')){ this.setComponentVisibility(this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86, false, 0, null, null, false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.03,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0_HS_1_0.png",
      "width": 98,
      "height": 100
     }
    ]
   },
   "pitch": -22.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 59.42
  }
 ],
 "id": "overlay_64EE0C66_72AC_BC27_41D7_C470641E5401",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.03,
   "yaw": 59.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_67D24834_7294_843A_41A1_EB2B9D6B23A2_0_HS_1_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -22.02
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0); if(!this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')){ this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, 0, this.effect_795DA06D_6C0B_0561_41B6_79EA8F0BD58E, 'showEffect', false) } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, 0, this.effect_795DC06D_6C0B_0561_41D1_1A3E1D35F1D9, 'hideEffect', false) }; if(!this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B.get('visible')){ this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, true, 0, this.effect_795DA06D_6C0B_0561_41B6_79EA8F0BD58E, 'showEffect', false) } else { this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, false, 0, this.effect_795DC06D_6C0B_0561_41D1_1A3E1D35F1D9, 'hideEffect', false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.91,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_1_HS_0_0.png",
      "width": 197,
      "height": 201
     }
    ]
   },
   "pitch": -25.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -71.98
  }
 ],
 "id": "overlay_7D35A04B_71C6_DCBA_41C8_2CF553E00D05",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 3.91,
   "yaw": -71.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_1_HS_0_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -25.84
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1); if(!this.Container_784D8647_6C15_0CA1_41C0_9869996BB760.get('visible')){ this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, true, 0, this.effect_789A5EBA_6C0D_1DE3_41B5_22218A1745A6, 'showEffect', false) } else { this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, false, 0, this.effect_789A2EBA_6C0D_1DE3_41C8_DDF7679BF259, 'hideEffect', false) }; if(!this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B.get('visible')){ this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, true, 0, this.effect_789A5EBA_6C0D_1DE3_41B5_22218A1745A6, 'showEffect', false) } else { this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, false, 0, this.effect_789A2EBA_6C0D_1DE3_41C8_DDF7679BF259, 'hideEffect', false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_1_HS_1_0.png",
      "width": 197,
      "height": 201
     }
    ]
   },
   "pitch": -1.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -69.64
  }
 ],
 "id": "overlay_7D35B04B_71C6_DCBA_41D8_E0CE1DA5982E",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.34,
   "yaw": -69.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_1_HS_1_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -1.39
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3); if(!this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B.get('visible')){ this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, true, 0, this.effect_786BC722_6C0F_0CE3_41A5_57563DB4CE37, 'showEffect', false) } else { this.setComponentVisibility(this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B, false, 0, this.effect_786BF722_6C0F_0CE3_41D3_94BFF1973CBF, 'hideEffect', false) }; if(!this.Container_7F4CE764_6C1B_0B67_41B1_C952C31B44CC.get('visible')){ this.setComponentVisibility(this.Container_7F4CE764_6C1B_0B67_41B1_C952C31B44CC, true, 0, this.effect_786BC722_6C0F_0CE3_41A5_57563DB4CE37, 'showEffect', false) } else { this.setComponentVisibility(this.Container_7F4CE764_6C1B_0B67_41B1_C952C31B44CC, false, 0, this.effect_786BF722_6C0F_0CE3_41D3_94BFF1973CBF, 'hideEffect', false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_1_HS_2_0.png",
      "width": 197,
      "height": 201
     }
    ]
   },
   "pitch": -24.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -112.3
  }
 ],
 "id": "overlay_7D35804B_71C6_DCBA_418A_105F998F2C31",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 3.95,
   "yaw": -112.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7D0A404B_71C6_DCBA_41DA_0A1AE79C7C70_1_HS_2_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -24.58
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4); if(!this.Container_784D8647_6C15_0CA1_41C0_9869996BB760.get('visible')){ this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_784D8647_6C15_0CA1_41C0_9869996BB760, false, 0, null, null, false) }; if(!this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D.get('visible')){ this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D, false, 0, null, null, false) }",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0_HS_0_0.png",
      "width": 49,
      "height": 50
     }
    ]
   },
   "pitch": -0.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 79.76
  }
 ],
 "id": "overlay_651A5C77_72AD_BC25_41D8_2061E173A1DA",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.34,
   "yaw": 79.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6694784F_7295_8466_41C4_50860639EF58_0_HS_0_0_0_map.gif",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -0.91
  }
 ]
},
{
 "layout": "horizontal",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "width": 110,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "borderSize": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 110,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "data": {
  "name": "button menu sup"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "paddingLeft": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "85.959%",
 "width": "75.901%",
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "data": {
  "name": "-button set"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "visible": false,
 "horizontalAlign": "center"
},
{
 "scaleMode": "fit_to_width",
 "paddingLeft": 0,
 "id": "Image_6416D021_6BF5_04E1_41C1_88E07DE13A9E",
 "left": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "40.65%",
 "url": "skin/Image_6416D021_6BF5_04E1_41C1_88E07DE13A9E.png",
 "verticalAlign": "middle",
 "top": "0.36%",
 "paddingRight": 0,
 "height": "42.909%",
 "shadow": false,
 "maxWidth": 1895,
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingTop": 0,
 "maxHeight": 633,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Image5117"
 },
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderRadius": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 454,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "Casa almendra",
 "verticalAlign": "top",
 "top": "11.95%",
 "paddingRight": 0,
 "height": 76,
 "shadow": false,
 "fontSize": "3.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 388,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "ingreso",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": 8,
 "height": 59,
 "shadow": false,
 "fontSize": "2.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 2"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_78377617_6C15_0CA1_41AF_F810EF0F45AC",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 454,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "Casa almendra",
 "verticalAlign": "top",
 "top": "11.95%",
 "paddingRight": 0,
 "height": 76,
 "shadow": false,
 "fontSize": "3.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_78372617_6C15_0CA1_41D7_FB07D8471DFB",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 388,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "estudio",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": 8,
 "height": 59,
 "shadow": false,
 "fontSize": "2.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 2"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_7EF19C26_6C1B_3CE3_41B0_7D884715811D",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 454,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "Casa almendra",
 "verticalAlign": "top",
 "top": "11.95%",
 "paddingRight": 0,
 "height": 76,
 "shadow": false,
 "fontSize": "3.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_7EF1BC26_6C1B_3CE3_41D8_92351E8978D7",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 388,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "sala-comedor",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": 8,
 "height": 59,
 "shadow": false,
 "fontSize": "2.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 2"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_7F330729_6C1B_0CE1_41C5_0E692F9DA252",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 454,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "Casa almendra",
 "verticalAlign": "top",
 "top": "11.95%",
 "paddingRight": 0,
 "height": 76,
 "shadow": false,
 "fontSize": "3.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_7F332729_6C1B_0CE1_41AE_43AF892DA1AE",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 388,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "cocina",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": 8,
 "height": 59,
 "shadow": false,
 "fontSize": "2.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 2"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_63028906_7274_85E7_41D8_EE5D77CEA81B",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 454,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "Casa almendra",
 "verticalAlign": "top",
 "top": "11.95%",
 "paddingRight": 0,
 "height": 76,
 "shadow": false,
 "fontSize": "3.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_6302E906_7274_85E7_41D4_6A28B4ADAF3F",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 388,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "estancia",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": 8,
 "height": 59,
 "shadow": false,
 "fontSize": "2.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 2"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_615E02AD_726C_8425_41D2_6DDA33D64346",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 454,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "Casa almendra",
 "verticalAlign": "top",
 "top": "11.95%",
 "paddingRight": 0,
 "height": 76,
 "shadow": false,
 "fontSize": "3.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_615FE2AD_726C_8425_41DB_414AE0D3FCD3",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 388,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "comedor",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": 8,
 "height": 59,
 "shadow": false,
 "fontSize": "2.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 2"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_61C1181E_726D_83E7_41D3_1A9D320CBE28",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 454,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "Casa almendra",
 "verticalAlign": "top",
 "top": "11.95%",
 "paddingRight": 0,
 "height": 76,
 "shadow": false,
 "fontSize": "3.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "textShadowVerticalLength": 0,
 "fontFamily": "ASTRO",
 "textShadowColor": "#000000",
 "paddingLeft": 0,
 "id": "Label_61C1381F_726D_83E6_41DA_6C22D89470CD",
 "left": "0%",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "width": 388,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "text": "cocina",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": 8,
 "height": 59,
 "shadow": false,
 "fontSize": "2.5vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "data": {
  "name": "text 2"
 },
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0
},
{
 "paddingLeft": 0,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": 53,
 "height": 2,
 "shadow": false,
 "maxWidth": 3000,
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingTop": 0,
 "maxHeight": 2,
 "paddingBottom": 0,
 "data": {
  "name": "white line"
 },
 "minHeight": 1,
 "propagateClick": true,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "horizontalAlign": "center"
},
{
 "layout": "horizontal",
 "horizontalAlign": "left",
 "paddingLeft": 30,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "width": 1199,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": 51,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-button set container"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "borderSize": 0,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "paddingLeft": 0,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "borderSize": 0,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "5%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "horizontalAlign": "right"
},
{
 "layout": "horizontal",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "borderSize": 0,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "paddingLeft": 0,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "borderSize": 0,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "5%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "horizontalAlign": "right"
},
{
 "layout": "vertical",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "borderSize": 0,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "borderSize": 0,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "paddingLeft": 0,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "borderSize": 0,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "5%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "horizontalAlign": "right"
},
{
 "layout": "vertical",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "borderSize": 0,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "borderSize": 0,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "borderSize": 0,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "borderSize": 0,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "paddingLeft": 0,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "borderSize": 0,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "5%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "horizontalAlign": "right"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "minWidth": 1,
 "width": 60,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 60,
 "shadow": false,
 "maxWidth": 60,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "data": {
  "name": "image button menu"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "minWidth": 1,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "shadow": false,
 "maxWidth": 58,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "click": "this.shareTwitter(window.location.href)",
 "data": {
  "name": "IconButton TWITTER"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "minWidth": 1,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "shadow": false,
 "maxWidth": 58,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href)",
 "data": {
  "name": "IconButton FB"
 },
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "data": {
  "name": "Button house info"
 },
 "paddingLeft": 0,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "minWidth": 1,
 "width": 120,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "fontSize": 12,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingTop": 0,
 "label": "HOUSE INFO",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "iconWidth": 0,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0.01
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "data": {
  "name": "Button panorama list"
 },
 "paddingLeft": 0,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "minWidth": 1,
 "width": 130,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "fontSize": 12,
 "rollOverBackgroundOpacity": 0.8,
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingTop": 0,
 "label": "PANORAMA LIST",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "data": {
  "name": "Button location"
 },
 "paddingLeft": 0,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "minWidth": 1,
 "width": 90,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "fontSize": 12,
 "rollOverBackgroundOpacity": 0.8,
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingTop": 0,
 "label": "LOCATION",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "data": {
  "name": "Button floorplan"
 },
 "paddingLeft": 0,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "minWidth": 1,
 "width": 103,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "fontSize": 12,
 "rollOverBackgroundOpacity": 0.8,
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingTop": 0,
 "label": "FLOORPLAN",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "data": {
  "name": "Button photoalbum"
 },
 "paddingLeft": 0,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "minWidth": 1,
 "width": 112,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "fontSize": 12,
 "rollOverBackgroundOpacity": 0.8,
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingTop": 0,
 "label": "PHOTOALBUM",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "data": {
  "name": "Button realtor"
 },
 "paddingLeft": 0,
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "minWidth": 1,
 "width": 90,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 40,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "fontSize": 12,
 "rollOverBackgroundOpacity": 0.8,
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "class": "Button",
 "paddingTop": 0,
 "label": "REALTOR",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "width": "85%",
 "shadow": false,
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "-left"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingLeft": 50,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "minWidth": 460,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "50%",
 "shadow": false,
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 20,
 "height": "100%",
 "gap": 0,
 "data": {
  "name": "-right"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "minWidth": 50,
 "borderSize": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "width": "25%",
 "paddingRight": 0,
 "height": "75%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "minHeight": 50,
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "width": "85%",
 "shadow": false,
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "-left"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingLeft": 50,
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "minWidth": 460,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "50%",
 "shadow": false,
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 20,
 "height": "100%",
 "gap": 0,
 "data": {
  "name": "-right"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "minWidth": 50,
 "borderSize": 0,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "verticalAlign": "middle",
 "width": "25%",
 "paddingRight": 0,
 "height": "75%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "minHeight": 50,
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 140,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "data": {
  "name": "header"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "backgroundColorRatios": [
  0
 ],
 "itemMaxWidth": 1000,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "scrollBarColor": "#04A3E1",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "normal",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingRight": 3,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "itemMaxHeight": 1000,
 "verticalAlign": "middle",
 "itemOpacity": 1,
 "width": "100%",
 "paddingRight": 70,
 "backgroundColor": [
  "#000000"
 ],
 "selectedItemThumbnailShadowBlurRadius": 16,
 "shadow": false,
 "itemBorderRadius": 0,
 "height": "100%",
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0.05,
 "itemPaddingLeft": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "paddingLeft": 70,
 "backgroundColorDirection": "vertical",
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 14,
 "itemThumbnailScaleMode": "fit_outside",
 "itemMinWidth": 50,
 "itemHeight": 156,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "class": "ThumbnailGrid",
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "paddingBottom": 70,
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 7,
 "data": {
  "name": "ThumbnailList"
 },
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "borderRadius": 5,
 "itemThumbnailWidth": 220,
 "minHeight": 1,
 "horizontalAlign": "center",
 "itemThumbnailShadow": false
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "width": "85%",
 "shadow": false,
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "-left"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingLeft": 50,
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "minWidth": 400,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "15%",
 "shadow": false,
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 20,
 "height": "100%",
 "gap": 0,
 "data": {
  "name": "-right"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "minWidth": 50,
 "borderSize": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "width": "25%",
 "paddingRight": 0,
 "height": "75%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "minHeight": 50,
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 140,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "data": {
  "name": "header"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "minWidth": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "width": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "shadow": false,
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "class": "ViewerArea",
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 140,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "data": {
  "name": "header"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "Container photo"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "Container photo"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "width": "55%",
 "shadow": false,
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "-left"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingLeft": 60,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "minWidth": 460,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "45%",
 "shadow": false,
 "backgroundOpacity": 1,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 20,
 "height": "100%",
 "gap": 0,
 "data": {
  "name": "-right"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "minWidth": 50,
 "borderSize": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "verticalAlign": "middle",
 "width": "25%",
 "paddingRight": 0,
 "height": "75%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "minHeight": 50,
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "scaleMode": "fit_outside",
 "paddingLeft": 0,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "verticalAlign": "middle",
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingTop": 0,
 "maxHeight": 1000,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Image"
 },
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderRadius": 0
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 60,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "data": {
  "name": "Container space"
 },
 "minHeight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "minWidth": 100,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 30,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "Container text"
 },
 "minHeight": 520,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 40,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "data": {
  "name": "Container space"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transitionDuration": 500,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "minWidth": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "right": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "bottom": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "class": "ViewerArea",
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "layout": "horizontal",
 "paddingLeft": 0,
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container arrows"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 60,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "data": {
  "name": "Container space"
 },
 "minHeight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "minWidth": 100,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 30,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "Container text"
 },
 "minHeight": 520,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 40,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "data": {
  "name": "Container space"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.19vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.19vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "paddingLeft": 80,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "width": "77.115%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "class": "HTMLText",
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 },
 "minHeight": 100,
 "scrollBarWidth": 10,
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "paddingLeft": 0,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "minWidth": 50,
 "borderSize": 0,
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "verticalAlign": "top",
 "top": 20,
 "width": "100%",
 "paddingRight": 0,
 "height": "36.14%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "minHeight": 50,
 "horizontalAlign": "right",
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "right": "0%",
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 60,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "data": {
  "name": "Container space"
 },
 "minHeight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "minWidth": 100,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 30,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "Container text"
 },
 "minHeight": 520,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 40,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "data": {
  "name": "Container space"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.19vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.19vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "paddingLeft": 80,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "width": "77.115%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "class": "HTMLText",
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 },
 "minHeight": 100,
 "scrollBarWidth": 10,
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "paddingLeft": 0,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "minWidth": 50,
 "borderSize": 0,
 "right": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "verticalAlign": "top",
 "top": 20,
 "width": "100%",
 "paddingRight": 0,
 "height": "36.14%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "minHeight": 50,
 "horizontalAlign": "right",
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.19vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.19vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "paddingLeft": 80,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "width": "77.115%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "class": "HTMLText",
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 },
 "minHeight": 100,
 "scrollBarWidth": 10,
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "paddingLeft": 0,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "minWidth": 50,
 "borderSize": 0,
 "right": 20,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "verticalAlign": "top",
 "top": 20,
 "width": "100%",
 "paddingRight": 0,
 "height": "36.14%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "minHeight": 50,
 "horizontalAlign": "right",
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "minWidth": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "width": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "shadow": false,
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "class": "ViewerArea",
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "transparencyActive": false,
 "paddingLeft": 0,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "minWidth": 50,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "paddingRight": 0,
 "bottom": "20%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 },
 "minHeight": 50,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "paddingLeft": 0,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "minWidth": 50,
 "borderSize": 0,
 "right": 10,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "paddingRight": 0,
 "bottom": "20%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 },
 "minHeight": 50,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "minWidth": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "width": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "shadow": false,
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "class": "ViewerArea",
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "transparencyActive": false,
 "paddingLeft": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "minWidth": 50,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "paddingRight": 0,
 "bottom": "20%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 },
 "minHeight": 50,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "paddingLeft": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "minWidth": 50,
 "borderSize": 0,
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "paddingRight": 0,
 "bottom": "20%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 },
 "minHeight": 50,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "paddingLeft": 0,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "minWidth": 50,
 "borderSize": 0,
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "verticalAlign": "top",
 "top": 20,
 "width": "10%",
 "paddingRight": 0,
 "height": "10%",
 "shadow": false,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "minHeight": 50,
 "horizontalAlign": "right",
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "scaleMode": "fit_outside",
 "paddingLeft": 0,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "verticalAlign": "bottom",
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingTop": 0,
 "maxHeight": 1000,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Image"
 },
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderRadius": 0
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 60,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "data": {
  "name": "Container space"
 },
 "minHeight": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "minWidth": 100,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 30,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "Container text"
 },
 "minHeight": 520,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 40,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "data": {
  "name": "Container space"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.68vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.49vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.49vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.46vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.46vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.68vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 10,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 10,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 20,
 "class": "HTMLText",
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0
},
{
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Bebas Neue Bold",
 "minWidth": 1,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "46%",
 "iconHeight": 32,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "fontSize": "3vh",
 "rollOverBackgroundOpacity": 1,
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingTop": 0,
 "label": "lorem ipsum",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "gap": 5,
 "fontStyle": "normal",
 "iconWidth": 32,
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "borderRadius": 0,
 "fontWeight": "normal",
 "cursor": "hand",
 "data": {
  "name": "Button"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "minWidth": 70,
 "borderSize": 0,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "verticalAlign": "middle",
 "width": "12%",
 "paddingRight": 0,
 "height": "8%",
 "shadow": false,
 "maxWidth": 150,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "paddingTop": 0,
 "maxHeight": 150,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "data": {
  "name": "IconButton <"
 },
 "minHeight": 70,
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "layout": "absolute",
 "paddingLeft": 0,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": "30%",
 "width": "80%",
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container separator"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "minWidth": 70,
 "borderSize": 0,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "verticalAlign": "middle",
 "width": "12%",
 "paddingRight": 0,
 "height": "8%",
 "shadow": false,
 "maxWidth": 150,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "paddingTop": 0,
 "maxHeight": 150,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "data": {
  "name": "IconButton >"
 },
 "minHeight": 70,
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.68vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.49vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.49vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.46vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.46vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "paddingLeft": 10,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 10,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 20,
 "class": "HTMLText",
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0
},
{
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Bebas Neue Bold",
 "minWidth": 1,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "46%",
 "iconHeight": 32,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "fontSize": "3vh",
 "rollOverBackgroundOpacity": 1,
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingTop": 0,
 "label": "lorem ipsum",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "gap": 5,
 "fontStyle": "normal",
 "iconWidth": 32,
 "textDecoration": "none",
 "minHeight": 1,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "borderRadius": 0,
 "fontWeight": "normal",
 "cursor": "hand",
 "data": {
  "name": "Button"
 }
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.68vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.49vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.46vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.46vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "paddingLeft": 10,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 10,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 20,
 "class": "HTMLText",
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Bebas Neue Bold",
 "minWidth": 1,
 "width": 207,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "horizontalAlign": "center",
 "borderColor": "#000000",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "height": 59,
 "shadow": false,
 "fontSize": 34,
 "rollOverBackgroundOpacity": 1,
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingTop": 0,
 "label": "lorem ipsum",
 "paddingBottom": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "borderRadius": 0,
 "fontWeight": "normal",
 "visible": false,
 "cursor": "hand",
 "data": {
  "name": "Button"
 }
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.68vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.95vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "paddingLeft": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "height": "45%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 10,
 "class": "HTMLText",
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "80%",
 "gap": 10,
 "data": {
  "name": "- content"
 },
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "minWidth": 1,
 "borderSize": 0,
 "width": "25%",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "maxWidth": 200,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "maxHeight": 200,
 "paddingBottom": 0,
 "class": "Image",
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 },
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderRadius": 0
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.46vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.95vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.95vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.95vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.95vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.19vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "paddingLeft": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "75%",
 "paddingRight": 10,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 10,
 "class": "HTMLText",
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 },
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0
}],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_64931F2E_6BFF_1CE3_41AF_C78231D80F2B",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_784D8647_6C15_0CA1_41C0_9869996BB760",
  "this.Container_7F09EC46_6C1B_3CA3_41D9_1CFDA064033B",
  "this.Container_7F4CE764_6C1B_0B67_41B1_C952C31B44CC",
  "this.Container_63F8692D_7274_842A_41B5_B3BC1A9C029D",
  "this.Container_615132CE_726C_8467_41D0_1C25C8DFC6A5",
  "this.Container_61AB7856_726D_8467_41CD_A2F3F2BCFD86",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.ThumbnailList_637AD26F_7273_8426_41D3_0585C0680C3E",
  "this.ThumbnailList_64524FEE_72B4_9C26_41D1_7B86BE10D72C"
 ],
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.ThumbnailList_637AD26F_7273_8426_41D3_0585C0680C3E_playlist,this.ThumbnailList_64524FEE_72B4_9C26_41D1_7B86BE10D72C_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "layout": "absolute",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "defaultVRPointer": "laser",
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "width": "100%",
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "gap": 10,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "minHeight": 20,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "visible"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
