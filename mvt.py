import mapbox_vector_tile
import os
import sys

args = sys.argv

print(args)

root = f"./public/{args[1]}"
top_dirs = os.listdir(root)
top_dirs_num = [int(x) for x in top_dirs]
top_dirs_num.sort()
second_dirs = os.listdir(f"{root}/{top_dirs_num[0]}/")
second_dirs.sort(reverse=False)
files = os.listdir(f"{root}/{top_dirs_num[0]}/{second_dirs[0]}")
files.sort()

print(f"{root}/{top_dirs_num[0]}/{second_dirs[0]}/{files[0]}")

with open(f"{root}/{top_dirs_num[0]}/{second_dirs[0]}/{files[0]}", "rb") as f:
    data = f.read()
    vt = mapbox_vector_tile.decode(data)

for layer in vt:
    print(layer)
    # print(vt[layer])
    if layer == "tran:Road":
        with open(f"{args[1]}_tran_Road.geojson", "w") as f:
            f.write(str(vt[layer]))
    elif layer == "bldg:Building":
        with open(f"{args[1]}_bldg_Building.geojson", "w") as f:
            f.write(str(vt[layer]))
    else:
        pass
