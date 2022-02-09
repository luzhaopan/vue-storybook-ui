<template>
  <div id="relationship2" />
</template>
<script>
// import axios from "axios";
import * as d3 from 'd3'
import $ from 'jquery'

export default {
  components: {},
  props: {
    pid: {
      type: String,
      default: 'pid'
    },
    grapeData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      loading: false,
      width: 1000,
      height: 800,
      gcontainer: {},
      svg: {},
      zoom: null,
      arrowMarker: {},
      simulation: {},
      isFullscreen: false,
      qaGraphNode: {},
      qaGraphNodeText: {},
      qaGraphLink: {},
      qaGraphLinkText: {},
      graph: {
        nodes: [],
        links: []
      },
      nodeColor: ['#798ff9', '#0aea0a', '#ff0000', '#fdbc2b'],
      nodeColor1: [
        '#ed4db6',
        '#fdbc2b',
        '#2d4db6',
        '#4a63de',
        '#cb4db6',
        '#ff8373',
        '#f9c62c',
        '#a5ca34',
        '#6fce7a',
        '#70d3bd',
        '#ea91b0'
      ],
      selectNode: ''
    }
  },
  watch: {
    grapeData: {
      deep: true,
      handler(val) {
        this.initGraph(val)
        this.refresh()
      }
    }
  },
  mounted() {
    this.initGraphContainer()
    this.addMaker()
    // this.initGraph([]);
  },
  created() {},
  methods: {
    // 初始化画布容器
    initGraphContainer() {
      this.gcontainer = d3.select('#relationship2')
      if (this.isFullscreen) {
        this.width = window.screen.width
        this.height = window.screen.height
      } else {
        this.width = $('#' + this.pid).width()
        this.height = $('#' + this.pid).height()
        // this.width = document.getElementById(this.pid).clientWidth;
        // this.height = document.getElementById(this.pid).clientHeight;
      }
      this.svg = this.gcontainer.append('svg')
      var sWidth = this.width
      var sHeight = this.height
      this.svg.attr('width', sWidth)
      this.svg.attr('height', sHeight)
      // this.svg.attr("viewBox", "0 0 " + sWidth / 2 + " " + sHeight / 2);
      this.svg.attr('id', 'svg_idx')
      this.svg.attr('preserveAspectRatio', 'xMidYMidmeet')
      this.svg.append('defs')
      this.simulation = d3
        .forceSimulation()
        .force('charge', d3.forceManyBody().strength(-1500))
        .force(
          'link',
          d3
            .forceLink()
            .distance(100)
            .id(function(d) {
              return d.name
            })
        )
        .force('collide', d3.forceCollide().strength(-30))
        .force('center', d3.forceCenter(this.width / 2, this.height / 2))
      this.qaGraphLink = this.svg.append('g').attr('class', 'line')
      this.qaGraphLinkText = this.svg.append('g').attr('class', 'linetext')
      this.qaGraphNode = this.svg.append('g').attr('class', 'node')
      this.qaGraphNodeText = this.svg.append('g').attr('class', 'nodetext')
      this.nodebuttonGroup = this.svg.append('g').attr('class', 'nodebutton')
    },

    // 连线箭头
    addMaker() {
      this.svg
        .append('marker') // 添加一个marker标签来绘制箭头
        .attr('id', 'arrow') // 箭头id，用于其他标记进行引用时的url
        .attr('markerUnits', 'userSpaceOnUse') // 定义标记的坐标系统，userSpaceOnUse表示按照引用的元件来决定，strokeWidth按照用户单位决定
        .attr('viewBox', '0 -5 10 10') // 坐标系的区域
        .attr('refX', 20) // 箭头坐标
        .attr('refY', 0)
        .attr('markerWidth', 10) // 标识的大小
        .attr('markerHeight', 10)
        .attr('orient', 'auto') // 绘制方向，可设定为：auto（自动确认方向）和 角度值
        .attr('stroke-width', 1) // 箭头宽度
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5') // 绘制箭头，路径为一个三角形，有疑问参考svg的path http://www.runoob.com/svg/svg-path.html
        .attr('fill', '#ccc') // 箭头颜色
    },

    // 初始化数据并更新力导图
    initGraph(val) {
      var _this = this

      const nodes = {}
      const links = JSON.parse(JSON.stringify(val))

      links.forEach(function(link) {
        link.source =
          nodes[link.source] ||
          (nodes[link.source] = { name: link.source || '', root: true })
        link.target =
          nodes[link.target] ||
          (nodes[link.target] = {
            name: link.target,
            exposure: link.exposure,
            imgsrc: link.imgsrc
          })
      })

      _this.graph.nodes = d3.values(nodes)
      _this.graph.links = val
      _this.updateGraph()
    },

    // 节点绘制
    drawNode(nodes) {
      var _this = this
      var node = this.qaGraphNode.selectAll('circle').data(nodes, function(d) {
        return d.name
      })

      node.exit().remove()
      var nodeEnter = node.enter().append('circle')
      // 节点点击触发
      nodeEnter.on('click', function(d) {
        _this.selectNode = d.name
        event.stopPropagation()
      })
      // 节点双击触发
      nodeEnter.on('dblclick', function() {
        // console.log(d);
        event.preventDefault()
      })
      nodeEnter.on('mouseenter', function() {
        d3.select(this).style('stroke-width', '6')
      })
      nodeEnter.on('mouseleave', function() {
        d3.select(this).style('stroke-width', 2)
        // 其他节点和连线一并显示
        d3.select('.node').style('fill-opacity', 1)
        d3.select('.nodetext').style('fill-opacity', 1)
        d3.selectAll('.link').style('stroke-opacity', 1)
        d3.selectAll('.linktext').style('fill-opacity', 1)
      })
      nodeEnter.on('mouseover', function(d) {
        // 鼠标放上去只显示相关节点，其他节点和连线隐藏
        d3.selectAll('.node').style('fill-opacity', 0.1)
        var relvantNodeIds = []
        var relvantNodes = _this.graph.links.filter(function(n) {
          return n.source === d.name || n.target === d.name
        })
        relvantNodes.forEach(function(item) {
          relvantNodeIds.push(item.source)
          relvantNodeIds.push(item.target)
        })
        // 显示相关的节点
        _this.qaGraphNode
          .selectAll('circle')
          .style('fill-opacity', function(c) {
            if (relvantNodeIds.indexOf(c.name) > -1) {
              return 1.0
            }
          })
        // 透明所有节点文字
        d3.selectAll('.nodetext').style('fill-opacity', 0.1)
        // 显示相关的节点文字
        _this.qaGraphNodeText
          .selectAll('text')
          .style('fill-opacity', function(c) {
            if (relvantNodeIds.indexOf(c.name) > -1) {
              return 1.0
            }
          })
        // 透明所有连线
        d3.selectAll('.line').style('stroke-opacity', 0.1)
        // 显示相关的连线
        _this.qaGraphLink
          .selectAll('.link')
          .style('stroke-opacity', function(c) {
            if (c.lk.target === d.name || c.lk.source === d.name) {
              return 1.0
            }
          })
        // 透明所有连线文字
        d3.selectAll('.linetext').style('fill-opacity', 0.1)
        // 显示相关的连线文字
        _this.qaGraphLinkText
          .selectAll('.linktext')
          .style('fill-opacity', function(c) {
            if (c.lk.target === d.name || c.lk.source === d.name) {
              return 1.0
            }
          })
        // 透明所有箭头  .attr("fill", "#24b3d7")
        // console.log(d3.selectAll("#arrow").attr("class", "ew"));
      })
      nodeEnter.call(
        d3
          .drag()
          .on('start', _this.dragStarted)
          .on('drag', _this.dragged)
          .on('end', _this.dragEnded)
      )
      node = nodeEnter.merge(node).text(function(d) {
        return d.name
      })
      node.style('stroke', function(d) {
        if (d.color) {
          return d.color
        }
        return '#A4ED6C'
      })
      node.style('stroke-opacity', 0.6)
      node.attr('r', function(d) {
        return d.root ? 12 : 10
      })
      node.attr('fill', function(d, i) {
        // 创建圆形图像
        if (d.imgsrc) {
          var img_w = 77
          var img_h = 80
          var defs = d3.selectAll('svg >defs')
          var catpattern = defs
            .append('pattern')
            .attr('id', 'catpattern' + i)
            .attr('height', 1)
            .attr('width', 1)
          catpattern
            .append('image')
            .attr('x', -(img_w / 2 - 25))
            .attr('y', -(img_h / 2 - 30))
            .attr('width', img_w)
            .attr('height', img_h)
            .attr('xlink:href', d.imgsrc)
          return 'url(#catpattern' + i + ')'
        } else {
          if (d.root) {
            return _this.nodeColor[0]
          } else {
            return _this.nodeColor1[i]
          }
        }
      })
      node
        .append('title') // 为每个节点设置title
        .text(function(d) {
          if (d.name) {
            return d.name
          }
          return ''
        })
      return node
    },

    // 节点文字
    drawNodeText(nodes) {
      var _this = this
      var nodetext = this.qaGraphNodeText
        .selectAll('text')
        .data(nodes, function(d) {
          return d.name
        })
      nodetext.exit().remove()
      var nodetextEnter = nodetext.enter().append('text')

      // nodetextEnter.on("mouseenter", function() {
      //   console.log("900909");
      // });

      nodetextEnter.call(
        d3
          .drag()
          .on('start', _this.dragStarted)
          .on('drag', _this.dragged)
          .on('end', _this.dragEnded)
      )
      nodetext = nodetextEnter.merge(nodetext).text(function(d) {
        return d.name
      })
      nodetext
        .style('fill', function() {
          return '#fff'
        })
        .attr('class', 'nodetext')
        .attr('dy', '1.36em') // 将文字下移
        .attr('font-family', '宋体')
        .attr('font-size', 14)
        .attr('font-weight', 500)
        .attr('text-anchor', 'middle') // 在圆圈中加上数据
        .text(function(d) {
          return d.name
        })
      nodetext
        .append('title') // 为每个节点设置title
        .text(function(d) {
          if (d.name) {
            return d.name
          }
          return ''
        })
      return nodetext
    },

    // 连线
    drawLink(links) {
      var _this = this
      var link = this.qaGraphLink.selectAll('.link').data(links, function(d) {
        return d.name
      })
      link.exit().remove()
      var linkEnter = link
        .enter()
        .append('path')
        .attr('class', 'link')
        .style('stroke', function(d) {
          if (d.lk.exposure < 0) {
            return _this.nodeColor[1]
          } else if (d.lk.exposure > 0) {
            return _this.nodeColor[2]
          } else {
            return _this.nodeColor[3]
          }
        }) // 设置线条颜色
        .style('stroke-width', function(d) {
          if (d.lk.exposure) {
            return Math.abs(d.lk.exposure) * 2 + 1
          } else {
            return 1
          }
        }) // 线条粗细
        .attr('fill', 'none')
        .attr('id', function(d) {
          return 'invis_' + d.lk.source + '-' + d.lk.target
        })
        .attr('marker-end', 'url(#arrow)') // 根据箭头标记的id号引用箭头
      link = linkEnter.merge(link)
      return link
    },

    // 连接线文字
    drawLinkText(link) {
      var _this = this
      var linktext = _this.qaGraphLinkText
        .selectAll('.linktext')
        .data(link, function(d) {
          return d.lk.exposure
        })
      linktext.exit().remove()
      var linktextEnter = linktext
        .enter()
        .append('text')
        .attr('class', 'linktext')
        // .append("textPath")
        // .attr("startOffset", "50%")
        .attr('text-anchor', 'middle')
        // .attr("xlink:href", function(d) {
        //   return "#invis_" + d.lk.source + "-" + d.lk.target;
        // })
        .style('fill', '#fff')
        .style('font-size', '12px')
        .style('font-weight', 500)
        .text(function(d) {
          return d.lk.exposure
        })
      // 连线上的文字
      linktext = linktextEnter.merge(linktext).text(function(d) {
        if (d.lk.exposure) {
          return d.lk.exposure
        }
        return ''
      })
      return linktext
    },

    // 数据处理
    formatData() {
      var _this = this
      var lks = _this.graph.links
      var nodes = _this.graph.nodes
      nodes.forEach(function(n) {
        if (n.center === 1 || n.center === '1') {
          n.fx = _this.width / 2
          n.fy = _this.height / 2
        }
        if (typeof n.fx === 'undefined' || n.fx === '') {
          n.fx = null
        }
        if (typeof n.fy === 'undefined' || n.fy === '') {
          n.fy = null
        }
      })
      var links = []
      lks.forEach(function(m) {
        var sourceNode = nodes.filter(function(n) {
          return n.name === m.source
        })[0]
        if (!sourceNode) return
        var targetNode = nodes.filter(function(n) {
          return n.name === m.target
        })[0]
        if (!targetNode) return
        links.push({ source: sourceNode.name, target: targetNode.name, lk: m })
      })
      var data = {}
      data.nodes = nodes
      data.links = links
      return data
    },

    formatLinkAttr(links) {
      var formatLinks = []
      // 每两个节点间的连线，不管正向反向，全算一组，每组连线分别标上序号linkGroupIndex，计算每组连线总条数groupLinkTotal
      links.forEach(function(item) {
        var linkGroup = []
        // 正向
        var forwardItems = links.filter(function(sItem) {
          return sItem.source === item.source && sItem.target === item.target
        })
        // 反向
        var reverseItems = links.filter(function(sItem) {
          return sItem.source === item.target && sItem.target === item.source
        })
        linkGroup = linkGroup.concat(forwardItems)
        linkGroup = linkGroup.concat(reverseItems)
        var groupLinkTotal = forwardItems.length + reverseItems.length
        linkGroup.forEach(function(it, i) {
          // 本组连线序号
          it.linkGroupIndex = i + 1
          it.groupLinkTotal = groupLinkTotal
        })
        formatLinks = formatLinks.concat(linkGroup)
      })
      formatLinks.forEach(function(item) {
        // 线的单双，单数且小于2，则只有一条直线，大于2且单数，有多条弧线和一条直线
        var groupLinkTotalHalf = item.groupLinkTotal / 2
        // 能否被2整除，是否有余数，true=有，false=没有，有余数必然有一条直线
        item.groupLinkUneven = item.groupLinkTotal % 2 !== 0
        // 判断是否是最中间的直线（有余数，并且序号刚好是本组连线的一版，这里向上取整）
        item.groupLinkMiddle =
          item.groupLinkUneven === true &&
          Math.ceil(groupLinkTotalHalf) === item.linkGroupIndex
        // 假设有一条直线，index刚好是groupLinkTotalHalf的值，上方的曲线都为0，下方的曲线都为1
        var groupLinkLowerHalf = item.linkGroupIndex <= groupLinkTotalHalf
        // 上方的曲线和直线方向一致，下方的曲线和直线的方向相反
        // item.groupLinkArcDirection = groupLinkLowerHalf ? 0 : 1
        item.groupLinkArcDirection = 1
        // 都在直线上方，则取当前序号，否则减去中间直线取序号
        item.groupLinkIndexCorrected = groupLinkLowerHalf
          ? item.linkGroupIndex
          : item.linkGroupIndex - Math.ceil(groupLinkTotalHalf)
        item.groupLinkMaxHalf = Math.round(item.groupLinkTotal / 2)
      })
      return formatLinks
    },

    // 更新图像
    updateGraph() {
      var _this = this
      var data = _this.formatData()
      var nodes = data.nodes
      var links = _this.formatLinkAttr(data.links)

      // 更新节点
      var graphNode = _this.drawNode(nodes)

      // 更新节点文字
      var graphNodeText = _this.drawNodeText(nodes)

      // 更新连线 links
      var graphLink = _this.drawLink(links)

      // 更新连线文字
      var graphLinkText = _this.drawLinkText(links)

      _this.simulation
        .nodes(nodes)
        .alphaTarget(0)
        .alphaDecay(0.05)
        .on('tick', tick)

      function tick() {
        // 更新连线坐标
        graphLink.attr('d', function(d) {
          var dx = d.target.x - d.source.x
          var dy = d.target.y - d.source.y
          var dr = Math.sqrt(dx * dx + dy * dy)
          var unevenCorrection = d.groupLinkUneven ? 0 : 0.2
          var curvature = 2
          var arc =
            (1.0 / curvature) *
            ((dr * d.groupLinkMaxHalf) /
              (d.groupLinkIndexCorrected - unevenCorrection))
          if (d.groupLinkMiddle) {
            arc = 0
          }
          var dd =
            'M' +
            d.source.x +
            ',' +
            d.source.y +
            'A' +
            arc +
            ',' +
            arc +
            ' 0 0,' +
            d.groupLinkArcDirection +
            ' ' +
            d.target.x +
            ',' +
            d.target.y
          return dd
        })
        // 刷新连接线上的文字位置
        graphLinkText
          .attr('x', function(d) {
            if (!d.source.x || !d.target.x) return 0
            var x = (parseFloat(d.source.x) + parseFloat(d.target.x)) / 2
            return x
          })
          .attr('y', function(d) {
            if (!d.source.y || !d.target.y) return 0
            var y = (parseFloat(d.source.y) + parseFloat(d.target.y)) / 2
            return y
          })
        // 更新节点坐标
        graphNode
          .attr('cx', function(d) {
            return d.x
          })
          .attr('cy', function(d) {
            return d.y
          })
        // 更新文字坐标
        graphNodeText
          .attr('x', function(d) {
            return d.x
          })
          .attr('y', function(d) {
            return d.y
          })
      }
      _this.simulation.force('link').links(links)
      _this.simulation.force(
        'center',
        d3.forceCenter(_this.width / 2, _this.height / 2)
      )
      _this.simulation.alpha(1).restart()
      // 鼠标滚轮缩放
      _this.zoom = d3
        .zoom()
        .scaleExtent([0.1, 4])
        .on('zoom', _this.zoomed)
      _this.svg.call(_this.zoom)
      // 禁止双击缩放
      _this.svg.on('dblclick.zoom', null)
      // 为按钮组绑定事件
      // _this.bindEventButtonGroup();
    },

    dragStarted(d) {
      if (!d3.event.active) this.simulation.alphaTarget(0.2).restart()
      d.fx = d.x
      d.fy = d.y
    },

    dragged(d) {
      d.fx = d3.event.x
      d.fy = d3.event.y
    },

    dragEnded(d) {
      if (!d3.event.active) this.simulation.alphaTarget(0)
      d.fx = d3.event.x
      d.fy = d3.event.y
    },

    zoomed() {
      d3.selectAll('.node').attr('transform', d3.event.transform)
      d3.selectAll('.nodetext text').attr('transform', d3.event.transform)
      d3.selectAll('.line').attr('transform', d3.event.transform)
      d3.selectAll('.linetext text').attr('transform', d3.event.transform)
      d3.selectAll('.nodebutton').attr('transform', d3.event.transform)
      // this.svg.selectAll("g").attr("transform", d3.event.transform);
    },
    // 每次数据更新还原图形大小
    refresh() {
      this.svg.call(this.zoom.transform, d3.zoomIdentity)
    }
  }
}
</script>
<style scoped>
/* .ss-d {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  border-radius: 50%;
  background: #dedede;
}
.sd1 {
  width: 30px;
  height: 30px;
}
.sd2 {
  width: 26px;
  height: 26px;
}
.sd3 {
  width: 20px;
  height: 20px;
}
.sd4 {
  width: 16px;
  height: 16px;
}
.sd-active {
  background: #08aefc !important;
}
.toolbar {
  margin-left: 150px;
  margin-right: 15px;
  line-height: 18px;
}
ul,
li {
  list-style: none;
}
.toolbar li {
  float: left;
  width: 60px;
}
.notshow {
  display: none;
}
.nodetext {
  pointer-events: all;
  cursor: pointer;
  stroke-dasharray: 0 0 0 0;
  stroke-dashoffset: 10;
  transition: all ease 0.1s;
}
.nodetext:hover {
  stroke-dashoffset: 0;
  stroke-dasharray: 100;
} */
</style>
