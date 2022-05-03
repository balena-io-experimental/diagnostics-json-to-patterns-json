/**
 * This file is js just because it made it easier to convert the massive text into some sample "json" by using backticks for multi-line text
 * but we would expect it to be given as a JSON file that comes from the logs -> JSON converter (and precise key names might be different)
 */

module.exports = {
	'journalctl --no-pager --no-hostname -n 200 -a -u balena': `
2022-05-03 14:11:49.486518220+00:00
-- Logs begin at Tue 2022-05-03 12:02:16 UTC, end at Tue 2022-05-03 14:11:41 UTC. --
May 03 14:10:54 balenad[26250]: time="2022-05-03T14:10:54.935179040Z" level=info msg="Starting up"
May 03 14:10:54 balenad[26250]: time="2022-05-03T14:10:54.935400706Z" level=warning msg="Running experimental build"
May 03 14:10:54 balenad[26250]: time="2022-05-03T14:10:54.947982082Z" level=info msg="libcontainerd: started new balena-engine-containerd process" pid=26268
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.136353137Z" level=info msg="starting containerd" revision= version=1.2.0+unknown
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.138353601Z" level=info msg="loading plugin \"io.containerd.content.v1.content\"..." type=io.containerd.content.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.138599382Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.aufs\"..." type=io.containerd.snapshotter.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.146456706Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.native\"..." type=io.containerd.snapshotter.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.146728060Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.overlayfs\"..." type=io.containerd.snapshotter.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.147146757Z" level=info msg="loading plugin \"io.containerd.metadata.v1.bolt\"..." type=io.containerd.metadata.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.147278736Z" level=info msg="metadata content store policy set" policy=shared
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.147929619Z" level=info msg="loading plugin \"io.containerd.differ.v1.walking\"..." type=io.containerd.differ.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.148058994Z" level=info msg="loading plugin \"io.containerd.gc.v1.scheduler\"..." type=io.containerd.gc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.148278317Z" level=info msg="loading plugin \"io.containerd.service.v1.containers-service\"..." type=io.containerd.service.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.148393681Z" level=info msg="loading plugin \"io.containerd.service.v1.content-service\"..." type=io.containerd.service.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.148522899Z" level=info msg="loading plugin \"io.containerd.service.v1.diff-service\"..." type=io.containerd.service.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.148649305Z" level=info msg="loading plugin \"io.containerd.service.v1.images-service\"..." type=io.containerd.service.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.148759774Z" level=info msg="loading plugin \"io.containerd.service.v1.leases-service\"..." type=io.containerd.service.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.148863940Z" level=info msg="loading plugin \"io.containerd.service.v1.namespaces-service\"..." type=io.containerd.service.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.148967742Z" level=info msg="loading plugin \"io.containerd.service.v1.snapshots-service\"..." type=io.containerd.service.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.149070190Z" level=info msg="loading plugin \"io.containerd.runtime.v1.linux\"..." type=io.containerd.runtime.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.166376658Z" level=info msg="loading plugin \"io.containerd.runtime.v2.task\"..." type=io.containerd.runtime.v2
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.166847595Z" level=info msg="loading plugin \"io.containerd.monitor.v1.cgroups\"..." type=io.containerd.monitor.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.170198784Z" level=info msg="loading plugin \"io.containerd.service.v1.tasks-service\"..." type=io.containerd.service.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.170912793Z" level=info msg="loading plugin \"io.containerd.internal.v1.restart\"..." type=io.containerd.internal.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.171231855Z" level=info msg="loading plugin \"io.containerd.grpc.v1.containers\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.171361959Z" level=info msg="loading plugin \"io.containerd.grpc.v1.content\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.171466958Z" level=info msg="loading plugin \"io.containerd.grpc.v1.diff\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.171563885Z" level=info msg="loading plugin \"io.containerd.grpc.v1.events\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.171657270Z" level=info msg="loading plugin \"io.containerd.grpc.v1.healthcheck\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.171769614Z" level=info msg="loading plugin \"io.containerd.grpc.v1.images\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.171885343Z" level=info msg="loading plugin \"io.containerd.grpc.v1.leases\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.171980811Z" level=info msg="loading plugin \"io.containerd.grpc.v1.namespaces\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.172078728Z" level=info msg="loading plugin \"io.containerd.internal.v1.opt\"..." type=io.containerd.internal.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.172224977Z" level=warning msg="failed to load plugin io.containerd.internal.v1.opt" error="mkdir /opt: read-only file system"
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.172307686Z" level=info msg="loading plugin \"io.containerd.grpc.v1.snapshots\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.172488779Z" level=info msg="loading plugin \"io.containerd.grpc.v1.tasks\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.172719507Z" level=info msg="loading plugin \"io.containerd.grpc.v1.version\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.172827320Z" level=info msg="loading plugin \"io.containerd.grpc.v1.introspection\"..." type=io.containerd.grpc.v1
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.173722630Z" level=info msg=serving... address=/var/run/balena-engine/containerd/balena-engine-containerd-debug.sock
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.174052369Z" level=info msg=serving... address=/var/run/balena-engine/containerd/balena-engine-containerd.sock.ttrpc
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.174321274Z" level=info msg=serving... address=/var/run/balena-engine/containerd/balena-engine-containerd.sock
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.174434035Z" level=info msg="containerd successfully booted in 0.041275s"
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.226292451Z" level=warning msg="[graphdriver] WARNING: the aufs storage-driver is deprecated, and will be removed in a future release"
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.278408731Z" level=info msg="Pruned 2 unused graph driver layers"
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.299735398Z" level=warning msg="Your kernel does not support cgroup rt period"
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.299871856Z" level=warning msg="Your kernel does not support cgroup rt runtime"
May 03 14:10:55 balenad[26250]: time="2022-05-03T14:10:55.300659250Z" level=info msg="Loading containers: start."
May 03 14:10:55 4b981e385d3e[26250]: [[35mdebug[39m]   delta([main] registry2.balena-cloud.com/v2/61f307ae741cb5908b5555a222365f54@sha256:3e8384b6f9da2ebdb14e33e5c24642c4430fe396ea8a444f7aa6732a322f47a7): Delta failed with Error: read ECONNRESET
May 03 14:10:55 4b981e385d3e[26250]: [[36mevent[39m]   Event: Image download error {"error":{"message":"read ECONNRESET","stack":"Error: read ECONNRESET\n    at Pipe.onStreamRead (internal/stream_base_commons.js:205:27)"},"image":{"name":"registry2.balena-cloud.com/v2/3b1db5fc9e6911a44cf9eda199398c18@sha256:54c102362ce3493b06579ed428c9f4773e8d9600e074927883b510a73530b487","appId":1686707,"serviceId":591911,"serviceName":"main","imageId":4614357,"releaseId":2085082,"dependent":0,"dockerImageId":null}}
May 03 14:10:55 4b981e385d3e[26250]: [[31merror[39m]   Updating failed, but there's another update scheduled immediately:  Error: connect ECONNREFUSED /var/run/balena-engine.sock
May 03 14:10:55 4b981e385d3e[26250]: [[31merror[39m]         at PipeConnectWrap.afterConnect [as oncomplete] (net.js:1141:16)
May 03 14:10:55 4b981e385d3e[26250]: [[31merror[39m]   Device state apply error Error: connect ECONNREFUSED /var/run/balena-engine.sock
May 03 14:10:55 4b981e385d3e[26250]: [[31merror[39m]         at PipeConnectWrap.afterConnect [as oncomplete] (net.js:1141:16)
May 03 14:10:55 4b981e385d3e[26250]: [[34minfo[39m]    Applying target state
May 03 14:10:55 4b981e385d3e[26250]: [[31merror[39m]   Scheduling another update attempt in 2000ms due to failure:  Error: connect ECONNREFUSED /var/run/balena-engine.sock
May 03 14:10:55 4b981e385d3e[26250]: [[31merror[39m]         at PipeConnectWrap.afterConnect [as oncomplete] (net.js:1141:16)
May 03 14:10:55 4b981e385d3e[26250]: [[31merror[39m]   Device state apply error Error: connect ECONNREFUSED /var/run/balena-engine.sock
May 03 14:10:55 4b981e385d3e[26250]: [[31merror[39m]         at PipeConnectWrap.afterConnect [as oncomplete] (net.js:1141:16)
May 03 14:10:55 4b981e385d3e[26250]: [[36mevent[39m]   Event: Device state report failure {"error":{"message":"connect ECONNREFUSED /var/run/balena-engine.sock","stack":"Error: connect ECONNREFUSED /var/run/balena-engine.sock\n    at PipeConnectWrap.afterConnect [as oncomplete] (net.js:1141:16)"}}
May 03 14:10:55 4b981e385d3e[26250]: [[31merror[39m]   Error listening to events: Error: connect ECONNREFUSED /var/run/balena-engine.sock
May 03 14:10:55 4b981e385d3e[26250]: [[31merror[39m]         at PipeConnectWrap.afterConnect [as oncomplete] (net.js:1141:16) Error: connect ECONNREFUSED /var/run/balena-engine.sock
May 03 14:10:55 4b981e385d3e[26250]: [[31merror[39m]       at PipeConnectWrap.afterConnect [as oncomplete] (net.js:1141:16)`,
	'journalctl --no-pager --no-hostname -n 1000 -at balenad': `
2022-05-03 14:11:49.550109473+00:00
-- Logs begin at Tue 2022-05-03 12:02:16 UTC, end at Tue 2022-05-03 14:11:41 UTC. --
May 03 13:59:02 balenad[17197]: time="2022-05-03T13:59:02.078782787Z" level=info msg="Removing stale sandbox c0de00c5e0bc85217b07b959a96c7bcbb77e275197e9a81b247e3c117692f1f5 (a12b4e187b8fa35bcacbc7600c814dad24a6cb5a6c9ea07b58eb3d33ef93b7bc)"
May 03 13:59:02 balenad[17197]: time="2022-05-03T13:59:02.122321536Z" level=warning msg="Error (Unable to complete atomic operation, key modified) deleting object [endpoint 6f40427b685fcc95a7c3b0214fcfa24231aa3afc8bebc7c546ca4c3fe982b12c c480c299be20d3f65b212ba8e63076a06fc33c9e7c21c3abc9993f64e0343ab9], retrying...."
May 03 13:59:02 balenad[17197]: time="2022-05-03T13:59:02.219300729Z" level=info msg="There are old running containers, the network config will not take affect"
May 03 13:59:02 balenad[17197]: time="2022-05-03T13:59:02.266651864Z" level=info msg="Loading containers: done."
May 03 13:59:02 balenad[17197]: time="2022-05-03T13:59:02.446319503Z" level=info msg="Docker daemon" commit=074a481789174b4b6fd2d706086e8ffceb72e924 graphdriver(s)=aufs version=19.03.13-dev
May 03 13:59:02 balenad[17197]: time="2022-05-03T13:59:02.447840697Z" level=info msg="Daemon has completed initialization"
May 03 13:59:02 balenad[17197]: time="2022-05-03T13:59:02.491719289Z" level=info msg="API listen on /var/run/balena-engine.sock"
May 03 13:59:02 balenad[17197]: time="2022-05-03T13:59:02.492186163Z" level=info msg="API listen on /var/run/balena-engine.sock"
May 03 13:59:02 balenad[17197]: time="2022-05-03T13:59:02.494316991Z" level=info msg="API listen on /var/run/balena.sock"
May 03 13:59:03 balenad[17197]: time="2022-05-03T13:59:03.643896451Z" level=info msg="shim balena-engine-containerd-shim started" address=/containerd-shim/6f2a367453ea7d26e8c110139422e34e4ac2ec25864c11d928c182500cf7eb52.sock debug=false pid=17441
May 03 13:59:06 balenad[17197]: time="2022-05-03T13:59:06.103200608Z" level=info msg="shim reaped" id=8e7a96c4f184c19b15138eca40bc37745939f668b5d3f9f3ca344be67a10f34c
May 03 13:59:06 balenad[17197]: time="2022-05-03T13:59:06.110594236Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"
May 03 13:59:19 balenad[17197]: time="2022-05-03T13:59:19.491396879Z" level=info msg="Container a12b4e187b8fa35bcacbc7600c814dad24a6cb5a6c9ea07b58eb3d33ef93b7bc failed to exit within 10 seconds of signal 15 - using the force"
May 03 13:59:21 balenad[17197]: time="2022-05-03T13:59:21.015988140Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"
May 03 13:59:21 balenad[17197]: time="2022-05-03T13:59:21.017050117Z" level=warning msg="error locating sandbox id c0de00c5e0bc85217b07b959a96c7bcbb77e275197e9a81b247e3c117692f1f5: sandbox c0de00c5e0bc85217b07b959a96c7bcbb77e275197e9a81b247e3c117692f1f5 not found"
May 03 13:59:24 balenad[17197]: time="2022-05-03T13:59:24.441636575Z" level=info msg="shim balena-engine-containerd-shim started" address=/containerd-shim/a91ed16ac60abcead0a16d7fd8783c677f704123b3ac6ae91915bdabb5b3defb.sock debug=false pid=17676
May 03 13:59:51 balenad[15776]: Parent process exited
May 03 13:59:57 balenad[17197]: panic: runtime error: slice bounds out of range
May 03 13:59:57 balenad[17197]: goroutine 807 [running]:
May 03 13:59:57 balenad[17197]: github.com/docker/docker/pkg/ioutils.(*concatReadSeekCloser).Read(0xd79ac60, 0xb7b8400, 0x200, 0x200, 0x11a67a0, 0x1, 0xb7b8400)
May 03 13:59:57 balenad[17197]: 	/yocto/resin-board/build/tmp/work/cortexa7t2hf-neon-vfpv4-poky-linux-gnueabi/balena/19.03.13-dev+git074a481789174b4b6fd2d706086e8ffceb72e924-r0/git/src/import/.gopath/src/github.com/docker/docker/pkg/ioutils/concat.go:55 +0x330
May 03 13:59:57 balenad[17197]: io.(*LimitedReader).Read(0x462fcc0, 0xb7b8400, 0x200, 0x200, 0x0, 0x0, 0x0)
May 03 13:59:57 balenad[17197]: 	/usr/lib/go/src/io/io.go:448 +0xc4
May 03 13:59:57 balenad[17197]: io.copyBuffer(0x16afe88, 0x486f1f0, 0x16afe40, 0x462fcc0, 0xb7b8400, 0x200, 0x200, 0x11f6718, 0x12755e0, 0x0, ...)
May 03 13:59:57 balenad[17197]: 	/usr/lib/go/src/io/io.go:402 +0xd8
May 03 13:59:57 balenad[17197]: io.Copy(...)
May 03 13:59:57 balenad[17197]: 	/usr/lib/go/src/io/io.go:364
May 03 13:59:57 balenad[17197]: io.CopyN(0x16afe88, 0x486f1f0, 0xa34bd9b0, 0xd79ac60, 0x200, 0x0, 0x0, 0x0, 0x0, 0x0)
May 03 13:59:57 balenad[17197]: 	/usr/lib/go/src/io/io.go:340 +0x8c
May 03 13:59:57 balenad[17197]: github.com/docker/docker/vendor/github.com/balena-os/librsync-go.Patch(0xa522c568, 0xd79ac60, 0x16ad9f8, 0x4784000, 0x16afe88, 0x486f1f0, 0x0, 0x4af641c)
May 03 13:59:57 balenad[17197]: 	/yocto/resin-board/build/tmp/work/cortexa7t2hf-neon-vfpv4-poky-linux-gnueabi/balena/19.03.13-dev+git074a481789174b4b6fd2d706086e8ffceb72e924-r0/git/src/import/.gopath/src/github.com/docker/docker/vendor/github.com/balena-os/librsync-go/patch.go:83 +0x1c0
May 03 13:59:57 balenad[17197]: github.com/docker/docker/distribution/xfer.(*LayerDownloadManager).makeDownloadFunc.func1.1.2(0x16b5468, 0x462fa80, 0x48a08c0, 0x486f1f0, 0xa522c568, 0xd79ac60)
May 03 13:59:57 balenad[17197]: 	/yocto/resin-board/build/tmp/work/cortexa7t2hf-neon-vfpv4-poky-linux-gnueabi/balena/19.03.13-dev+git074a481789174b4b6fd2d706086e8ffceb72e924-r0/git/src/import/.gopath/src/github.com/docker/docker/distribution/xfer/download.go:368 +0x12c
May 03 13:59:57 balenad[17197]: created by github.com/docker/docker/distribution/xfer.(*LayerDownloadManager).makeDownloadFunc.func1.1
May 03 13:59:57 balenad[17197]: 	/yocto/resin-board/build/tmp/work/cortexa7t2hf-neon-vfpv4-poky-linux-gnueabi/balena/19.03.13-dev+git074a481789174b4b6fd2d706086e8ffceb72e924-r0/git/src/import/.gopath/src/github.com/docker/docker/distribution/xfer/download.go:358 +0x101c
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.459063847Z" level=info msg="Starting up"
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.459344784Z" level=warning msg="Running experimental build"
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.493153816Z" level=info msg="libcontainerd: started new balena-engine-containerd process" pid=17895
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.650914893Z" level=info msg="starting containerd" revision= version=1.2.0+unknown
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.652991659Z" level=info msg="loading plugin \"io.containerd.content.v1.content\"..." type=io.containerd.content.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.653281971Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.aufs\"..." type=io.containerd.snapshotter.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.661065442Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.native\"..." type=io.containerd.snapshotter.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.661340128Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.overlayfs\"..." type=io.containerd.snapshotter.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.661872367Z" level=info msg="loading plugin \"io.containerd.metadata.v1.bolt\"..." type=io.containerd.metadata.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.662011533Z" level=info msg="metadata content store policy set" policy=shared
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.662750177Z" level=info msg="loading plugin \"io.containerd.differ.v1.walking\"..." type=io.containerd.differ.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.662913770Z" level=info msg="loading plugin \"io.containerd.gc.v1.scheduler\"..." type=io.containerd.gc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.663131062Z" level=info msg="loading plugin \"io.containerd.service.v1.containers-service\"..." type=io.containerd.service.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.663243197Z" level=info msg="loading plugin \"io.containerd.service.v1.content-service\"..." type=io.containerd.service.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.663391738Z" level=info msg="loading plugin \"io.containerd.service.v1.diff-service\"..." type=io.containerd.service.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.663510696Z" level=info msg="loading plugin \"io.containerd.service.v1.images-service\"..." type=io.containerd.service.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.663630019Z" level=info msg="loading plugin \"io.containerd.service.v1.leases-service\"..." type=io.containerd.service.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.663735487Z" level=info msg="loading plugin \"io.containerd.service.v1.namespaces-service\"..." type=io.containerd.service.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.663848404Z" level=info msg="loading plugin \"io.containerd.service.v1.snapshots-service\"..." type=io.containerd.service.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.663958664Z" level=info msg="loading plugin \"io.containerd.runtime.v1.linux\"..." type=io.containerd.runtime.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.682529973Z" level=info msg="loading plugin \"io.containerd.runtime.v2.task\"..." type=io.containerd.runtime.v2
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.683092576Z" level=info msg="loading plugin \"io.containerd.monitor.v1.cgroups\"..." type=io.containerd.monitor.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.686580588Z" level=info msg="loading plugin \"io.containerd.service.v1.tasks-service\"..." type=io.containerd.service.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.687262045Z" level=info msg="loading plugin \"io.containerd.internal.v1.restart\"..." type=io.containerd.internal.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.687511367Z" level=info msg="loading plugin \"io.containerd.grpc.v1.containers\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.687651836Z" level=info msg="loading plugin \"io.containerd.grpc.v1.content\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.687766940Z" level=info msg="loading plugin \"io.containerd.grpc.v1.diff\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.687911314Z" level=info msg="loading plugin \"io.containerd.grpc.v1.events\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.688013137Z" level=info msg="loading plugin \"io.containerd.grpc.v1.healthcheck\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.688119439Z" level=info msg="loading plugin \"io.containerd.grpc.v1.images\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.688226886Z" level=info msg="loading plugin \"io.containerd.grpc.v1.leases\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.688325688Z" level=info msg="loading plugin \"io.containerd.grpc.v1.namespaces\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.688425271Z" level=info msg="loading plugin \"io.containerd.internal.v1.opt\"..." type=io.containerd.internal.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.688573396Z" level=warning msg="failed to load plugin io.containerd.internal.v1.opt" error="mkdir /opt: read-only file system"
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.688660531Z" level=info msg="loading plugin \"io.containerd.grpc.v1.snapshots\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.688776989Z" level=info msg="loading plugin \"io.containerd.grpc.v1.tasks\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.688897614Z" level=info msg="loading plugin \"io.containerd.grpc.v1.version\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.688997457Z" level=info msg="loading plugin \"io.containerd.grpc.v1.introspection\"..." type=io.containerd.grpc.v1
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.701584927Z" level=info msg=serving... address=/var/run/balena-engine/containerd/balena-engine-containerd-debug.sock
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.702282842Z" level=info msg=serving... address=/var/run/balena-engine/containerd/balena-engine-containerd.sock.ttrpc
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.702757997Z" level=info msg=serving... address=/var/run/balena-engine/containerd/balena-engine-containerd.sock
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.702963205Z" level=info msg="containerd successfully booted in 0.055619s"
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.747902263Z" level=warning msg="[graphdriver] WARNING: the aufs storage-driver is deprecated, and will be removed in a future release"
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.807963107Z" level=info msg="Pruned 2 unused graph driver layers"
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.831081489Z" level=warning msg="Your kernel does not support cgroup rt period"
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.831218832Z" level=warning msg="Your kernel does not support cgroup rt runtime"
May 03 13:59:58 balenad[17877]: time="2022-05-03T13:59:58.831992060Z" level=info msg="Loading containers: start."
May 03 14:00:01 balenad[17877]: time="2022-05-03T14:00:01.528070592Z" level=info msg="Removing stale sandbox 74270ce34b13fe70de355a1674e5580e6da12996ed42618f799f3e33a8bf77a9 (82ade09fe24af0c494dc0fbc5f1af826ef77a3ef2a6e112a9f9caecbb6eefc5e)"
May 03 14:00:01 balenad[17877]: time="2022-05-03T14:00:01.564187901Z" level=warning msg="Error (Unable to complete atomic operation, key modified) deleting object [endpoint 6f40427b685fcc95a7c3b0214fcfa24231aa3afc8bebc7c546ca4c3fe982b12c e0be581b8b9df8b36973e2cf13f7d7db8dd4b2c5a902fbb0c1e1614661a652b5], retrying...."
May 03 14:00:01 balenad[17877]: time="2022-05-03T14:00:01.670034988Z" level=info msg="There are old running containers, the network config will not take affect"
May 03 14:00:01 balenad[17877]: time="2022-05-03T14:00:01.707856668Z" level=info msg="Loading containers: done."
May 03 14:00:01 balenad[17877]: time="2022-05-03T14:00:01.884655199Z" level=info msg="Docker daemon" commit=074a481789174b4b6fd2d706086e8ffceb72e924 graphdriver(s)=aufs version=19.03.13-dev
May 03 14:00:01 balenad[17877]: time="2022-05-03T14:00:01.885217749Z" level=info msg="Daemon has completed initialization"
May 03 14:00:01 balenad[17877]: time="2022-05-03T14:00:01.924285155Z" level=info msg="API listen on /var/run/balena-engine.sock"
May 03 14:00:01 balenad[17877]: time="2022-05-03T14:00:01.924506248Z" level=info msg="API listen on /var/run/balena-engine.sock"
May 03 14:00:01 balenad[17877]: time="2022-05-03T14:00:01.924533383Z" level=info msg="API listen on /var/run/balena.sock"
May 03 14:00:03 balenad[17877]: time="2022-05-03T14:00:03.069073272Z" level=info msg="shim balena-engine-containerd-shim started" address=/containerd-shim/2ecd0c590a8753d26fe9c2444aec05bdba75f829f5daf48d6173f4453ecf9168.sock debug=false pid=18126
May 03 14:00:05 balenad[17877]: time="2022-05-03T14:00:05.460095771Z" level=info msg="shim reaped" id=6d326380babc6fbc318afd60ce6a2dda95767c47bd7ed2a5a27a3f8e8b8ed74c
May 03 14:00:05 balenad[17877]: time="2022-05-03T14:00:05.466403516Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"
May 03 14:00:18 balenad[17877]: time="2022-05-03T14:00:18.982102917Z" level=info msg="Container 82ade09fe24af0c494dc0fbc5f1af826ef77a3ef2a6e112a9f9caecbb6eefc5e failed to exit within 10 seconds of signal 15 - using the force"
May 03 14:00:20 balenad[17877]: time="2022-05-03T14:00:20.526130902Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"
May 03 14:00:20 balenad[17877]: time="2022-05-03T14:00:20.527154024Z" level=warning msg="error locating sandbox id 74270ce34b13fe70de355a1674e5580e6da12996ed42618f799f3e33a8bf77a9: sandbox 74270ce34b13fe70de355a1674e5580e6da12996ed42618f799f3e33a8bf77a9 not found"
May 03 14:00:32 balenad[17877]: time="2022-05-03T14:00:32.340609885Z" level=info msg="shim balena-engine-containerd-shim started" address=/containerd-shim/582e0019590899dc6867964db73a052db8e09d845bb6470453b6ecd07568d686.sock debug=false pid=18362
May 03 14:01:04 balenad[17877]: panic: runtime error: slice bounds out of range
May 03 14:01:04 balenad[17877]: goroutine 870 [running]:
May 03 14:01:04 balenad[17877]: github.com/docker/docker/pkg/ioutils.(*concatReadSeekCloser).Read(0xb607aa0, 0xb7aaa00, 0x200, 0x200, 0x11a67a0, 0x1, 0xb7aaa00)
May 03 14:01:04 balenad[17877]: 	/yocto/resin-board/build/tmp/work/cortexa7t2hf-neon-vfpv4-poky-linux-gnueabi/balena/19.03.13-dev+git074a481789174b4b6fd2d706086e8ffceb72e924-r0/git/src/import/.gopath/src/github.com/docker/docker/pkg/ioutils/concat.go:55 +0x330
May 03 14:01:04 balenad[17877]: io.(*LimitedReader).Read(0x314bfc0, 0xb7aaa00, 0x200, 0x200, 0x0, 0x0, 0x0)
May 03 14:01:04 balenad[17877]: 	/usr/lib/go/src/io/io.go:448 +0xc4
May 03 14:01:04 balenad[17877]: io.copyBuffer(0x16afe88, 0x2a9daa0, 0x16afe40, 0x314bfc0, 0xb7aaa00, 0x200, 0x200, 0x11f6718, 0x12755e0, 0x0, ...)
May 03 14:01:04 balenad[17877]: 	/usr/lib/go/src/io/io.go:402 +0xd8
May 03 14:01:04 balenad[17877]: io.Copy(...)
May 03 14:01:04 balenad[17877]: 	/usr/lib/go/src/io/io.go:364
May 03 14:01:04 balenad[17877]: io.CopyN(0x16afe88, 0x2a9daa0, 0xa33f2ba0, 0xb607aa0, 0x200, 0x0, 0x0, 0x0, 0x0, 0x0)
May 03 14:01:04 balenad[17877]: 	/usr/lib/go/src/io/io.go:340 +0x8c
May 03 14:01:04 balenad[17877]: github.com/docker/docker/vendor/github.com/balena-os/librsync-go.Patch(0xa29f63b0, 0xb607aa0, 0x16ad9f8, 0x2d906c0, 0x16afe88, 0x2a9daa0, 0x29d0a4c, 0x2d94c1c)
May 03 14:01:04 balenad[17877]: 	/yocto/resin-board/build/tmp/work/cortexa7t2hf-neon-vfpv4-poky-linux-gnueabi/balena/19.03.13-dev+git074a481789174b4b6fd2d706086e8ffceb72e924-r0/git/src/import/.gopath/src/github.com/docker/docker/vendor/github.com/balena-os/librsync-go/patch.go:83 +0x1c0
May 03 14:01:04 balenad[17877]: github.com/docker/docker/distribution/xfer.(*LayerDownloadManager).makeDownloadFunc.func1.1.2(0x16b5468, 0x2a9b8e0, 0x2e08620, 0x2a9daa0, 0xa29f63b0, 0xb607aa0)
May 03 14:01:04 balenad[17877]: 	/yocto/resin-board/build/tmp/work/cortexa7t2hf-neon-vfpv4-poky-linux-gnueabi/balena/19.03.13-dev+git074a481789174b4b6fd2d706086e8ffceb72e924-r0/git/src/import/.gopath/src/github.com/docker/docker/distribution/xfer/download.go:368 +0x12c
May 03 14:01:04 balenad[17877]: created by github.com/docker/docker/distribution/xfer.(*LayerDownloadManager).makeDownloadFunc.func1.1
May 03 14:01:04 balenad[17877]: 	/yocto/resin-board/build/tmp/work/cortexa7t2hf-neon-vfpv4-poky-linux-gnueabi/balena/19.03.13-dev+git074a481789174b4b6fd2d706086e8ffceb72e924-r0/git/src/import/.gopath/src/github.com/docker/docker/distribution/xfer/download.go:358 +0x101c
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.240792514Z" level=info msg="Starting up"
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.241087253Z" level=warning msg="Running experimental build"
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.259898510Z" level=info msg="libcontainerd: started new balena-engine-containerd process" pid=18659
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.441119634Z" level=info msg="starting containerd" revision= version=1.2.0+unknown
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.443362337Z" level=info msg="loading plugin \"io.containerd.content.v1.content\"..." type=io.containerd.content.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.444446866Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.aufs\"..." type=io.containerd.snapshotter.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.454236165Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.native\"..." type=io.containerd.snapshotter.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.454561216Z" level=info msg="loading plugin \"io.containerd.snapshotter.v1.overlayfs\"..." type=io.containerd.snapshotter.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.455195537Z" level=info msg="loading plugin \"io.containerd.metadata.v1.bolt\"..." type=io.containerd.metadata.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.455401110Z" level=info msg="metadata content store policy set" policy=shared
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.456215587Z" level=info msg="loading plugin \"io.containerd.differ.v1.walking\"..." type=io.containerd.differ.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.456390847Z" level=info msg="loading plugin \"io.containerd.gc.v1.scheduler\"..." type=io.containerd.gc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.456645326Z" level=info msg="loading plugin \"io.containerd.service.v1.containers-service\"..." type=io.containerd.service.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.456759857Z" level=info msg="loading plugin \"io.containerd.service.v1.content-service\"..." type=io.containerd.service.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.456862617Z" level=info msg="loading plugin \"io.containerd.service.v1.diff-service\"..." type=io.containerd.service.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.456988398Z" level=info msg="loading plugin \"io.containerd.service.v1.images-service\"..." type=io.containerd.service.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.457090533Z" level=info msg="loading plugin \"io.containerd.service.v1.leases-service\"..." type=io.containerd.service.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.457190689Z" level=info msg="loading plugin \"io.containerd.service.v1.namespaces-service\"..." type=io.containerd.service.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.457289855Z" level=info msg="loading plugin \"io.containerd.service.v1.snapshots-service\"..." type=io.containerd.service.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.457400793Z" level=info msg="loading plugin \"io.containerd.runtime.v1.linux\"..." type=io.containerd.runtime.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.479789176Z" level=info msg="loading plugin \"io.containerd.runtime.v2.task\"..." type=io.containerd.runtime.v2
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.480349904Z" level=info msg="loading plugin \"io.containerd.monitor.v1.cgroups\"..." type=io.containerd.monitor.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.485797443Z" level=info msg="loading plugin \"io.containerd.service.v1.tasks-service\"..." type=io.containerd.service.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.486697961Z" level=info msg="loading plugin \"io.containerd.internal.v1.restart\"..." type=io.containerd.internal.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.487633063Z" level=info msg="loading plugin \"io.containerd.grpc.v1.containers\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.487929990Z" level=info msg="loading plugin \"io.containerd.grpc.v1.content\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.488101968Z" level=info msg="loading plugin \"io.containerd.grpc.v1.diff\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.488249468Z" level=info msg="loading plugin \"io.containerd.grpc.v1.events\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.488393686Z" level=info msg="loading plugin \"io.containerd.grpc.v1.healthcheck\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.488539467Z" level=info msg="loading plugin \"io.containerd.grpc.v1.images\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.488709467Z" level=info msg="loading plugin \"io.containerd.grpc.v1.leases\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.488861706Z" level=info msg="loading plugin \"io.containerd.grpc.v1.namespaces\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.489007904Z" level=info msg="loading plugin \"io.containerd.internal.v1.opt\"..." type=io.containerd.internal.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.489181809Z" level=warning msg="failed to load plugin io.containerd.internal.v1.opt" error="mkdir /opt: read-only file system"
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.489310299Z" level=info msg="loading plugin \"io.containerd.grpc.v1.snapshots\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.489471027Z" level=info msg="loading plugin \"io.containerd.grpc.v1.tasks\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.489618006Z" level=info msg="loading plugin \"io.containerd.grpc.v1.version\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.489776704Z" level=info msg="loading plugin \"io.containerd.grpc.v1.introspection\"..." type=io.containerd.grpc.v1
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.491001336Z" level=info msg=serving... address=/var/run/balena-engine/containerd/balena-engine-containerd-debug.sock
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.491371648Z" level=info msg=serving... address=/var/run/balena-engine/containerd/balena-engine-containerd.sock.ttrpc
May 03 14:01:05 balenad[18642]: time="2022-05-03T14:01:05.491697949Z" level=info msg=serving... address=/var/run/balena-engine/containerd/balena-engine-containerd.sock`,
};
