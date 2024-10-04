<script setup lang="ts">

</script>

<template>
<div class="content">


<div class="container">
  <div class="Shortcut">
    <div class="tnitle">快捷键</div>
    <div class="ng">
      <div class="undo">
        <button class="st" name="Z">
          <div id="shortButton">Z</div>
        </button>
        <div class="sb-name">撤回</div>
      </div>
      <div class="redo">
        <button class="st">
          <div id="shortButton">x</div>
        </button>
        <div class="sb-name">重做</div>
      </div>
      <div class="del">
        <button class="bt">
          <div id="middleButton">del</div>
        </button>
        <div class="sb-name">删除</div>
      </div>
      <div class="moveMap">
        <button class="bt">
          <div id="bigButton">space</div>
        </button>
        <div class="sb-name">移动地图</div>
      </div>
    </div>
  </div>
</div>
</div>
</template>


<style>

.content{
  display: flex;
}

.container {
    display: grid;
    width: 80%;

  }

  .Shortcut {
    margin: 0 auto;
    display: grid;
    flex-direction: column;
    width: 60%;
    height: 21%;
    padding: 12px;
    z-index: 1;
    background-color: rgb(37, 42, 49);
    gap: 10px;
    border-radius: 6px;
    border: 1px solid rgb(37, 42, 49);
    justify-self: center; /* 水平居中 */
    align-self: center; /* 垂直居中 */
  }

  .tnitle {
    font-weight: bold;
   font-size: 1.5rem;
    color: rgb(147, 146, 146);
    user-select: none;
    line-height: 32px;
    opacity: 0.6;
 
  }

  .ng {
    background: rgb(37, 42, 49);
    border-radius: 2px;
    gap: 5px;
    font-size: 0.9rem;
    display: grid;
    flex-direction: column;
  }

  .undo {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-areas: "KeyButton MapName";
    color: white;
    user-select: none;
    column-gap: 8px;
    -webkit-box-align: center;
    align-items: center;
  }
  .redo {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-areas: "KeyButton MapName";
    color: white;
    user-select: none;
    column-gap: 8px;
    -webkit-box-align: center;
    align-items: center;
  }
  .del {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-areas: "KeyButton MapName";
    color: white;
    user-select: none;
    column-gap: 8px;
    -webkit-box-align: center;
    align-items: center;
  }
  .moveMap {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-areas: "KeyButton MapName";
    color: white;
    user-select: none;
    column-gap: 8px;
    -webkit-box-align: center;
    align-items: center;
  }

  .st {
    width: 34px;
    height: 32px;
    background-color: rgb(55, 52, 52);
    padding: 2px 6px 4px 3px;
  }
  .bt {
    width: 64px;
    height: 32px;
    background-color: rgb(55, 52, 52);
    padding: 2px 6px 4px 3px;
  }
  #shortButton {
    width: 100%;
    height: 100%;
    border: 0.5px solid white;
    padding: 2px 0px 0px 4px;
    border-radius: 2px;
    text-align: center;
    color: white;
    font-weight: bold;
  }
  #middleButton {
    width: 100%;
    height: 100%;
    border: 0.5px solid white;
    padding: 2px 0px 0px 4px;
    text-align: center;
    color: white;
    font-weight: bold;
  }

  #bigButton {
    width: 55px;
    height: 26px;
    border: 0.5px solid white;
    text-align: center;
    color: white;
    font-weight: bold;
  }
</style>
