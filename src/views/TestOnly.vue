<template>
  <div>
    <div
      id="container"
      @scroll="handleScroll($event, 'container2')"
      style="
        background-color: yellow;
        height: 400px;
        width: 400px;
        overflow-y: scroll;
      "
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
        corporis eligendi in accusantium. Accusantium nobis qui animi porro,
        quos quisquam aut odit dolore, dolor ab sed hic magnam possimus eius
        fugiat amet. Quae sequi aliquam, rem qui fuga doloremque quaerat
        perspiciatis beatae pariatur. Libero iusto, perspiciatis porro
        perferendis magni fugiat recusandae aut in blanditiis accusamus vitae
        molestiae id, nemo sit ex. Quasi est ex corrupti repellat tempore nisi
        eum natus dolore suscipit. Eveniet, id error libero quibusdam voluptas
        cum vitae facere consectetur, accusantium sit necessitatibus perferendis
        sapiente soluta est quaerat iusto laborum incidunt numquam quisquam
        animi unde hic dolore minus! Consequuntur deleniti aliquam laboriosam
        voluptatibus exercitationem officia ratione explicabo molestias a
        voluptate? Aut sit in itaque deleniti corrupti, laudantium, harum
        reprehenderit veniam, fuga totam ea libero exercitationem. Ex
        dignissimos consectetur similique alias laudantium explicabo dolore
        aperiam illum optio ea quae asperiores inventore pariatur maxime eius
        maiores iusto ad, nobis, eaque in, repellendus cumque totam? Officiis
        magnam tempore commodi sapiente facilis corporis omnis est harum
        architecto deserunt, aliquid facere cupiditate? Expedita, est nostrum!
        Eligendi at cupiditate incidunt accusamus quos vero ipsum quae eaque ut
        ducimus minima sit corrupti molestiae suscipit excepturi quisquam
        impedit quis autem aliquam, voluptatibus provident? Nihil voluptas quo,
        doloremque vero modi incidunt porro expedita necessitatibus quidem
        molestiae. Explicabo autem cupiditate laboriosam sit architecto
        blanditiis quas consequuntur dolorem maiores atque delectus nostrum ad
        eius nisi, nihil ea dignissimos enim animi? In beatae accusamus aliquid
        exercitationem facere ducimus voluptatum laudantium, dignissimos unde
        aperiam ipsa consectetur, dolor fuga sed quam eos autem necessitatibus
        voluptates porro quisquam. Voluptatem nam ipsum beatae aliquid nostrum
        repellendus, saepe nisi recusandae accusantium, explicabo qui, optio
        cupiditate ab autem dolorem iusto eaque eligendi sapiente accusamus a
        fuga voluptate dolore temporibus consequatur. Aut deserunt minus
        temporibus necessitatibus. Autem facilis illo nemo. Obcaecati quibusdam
        inventore consequatur labore culpa autem illum, exercitationem ratione
        repellendus quos nisi illo at explicabo aperiam neque ipsa? Deserunt,
        at, veritatis voluptatem harum sint vel quod error ex quibusdam sapiente
        magni autem tempore asperiores aliquam inventore et laborum? Suscipit
        porro consequuntur, quis praesentium, laborum esse inventore similique
        ratione perspiciatis deleniti labore eligendi sequi, aut aliquid commodi
        culpa? Omnis, provident. Sed repellat natus voluptates qui illo quasi
        sunt perferendis aliquam quae molestias! Ad similique fugit cupiditate,
        eaque officiis eius in rem maiores? Porro, inventore nostrum eligendi,
        qui voluptate ullam pariatur repellendus, quos dignissimos cum quas
        velit exercitationem quibusdam ut molestias molestiae fugit vitae
        facere. Esse ex quisquam atque totam quaerat accusamus ab blanditiis
        tempore fugiat harum, ipsa eaque consequatur? Eligendi voluptatibus
        earum suscipit nesciunt voluptatum molestias in commodi, nulla, nihil,
        totam vel laudantium? Nemo, totam libero alias eius id distinctio facere
        dicta. Neque dolorum velit veniam dolor sit rem iusto vel, laudantium ut
        officiis atque sapiente quis reiciendis dolores quasi repudiandae
        repellendus voluptatibus dignissimos officia minima nesciunt. Ut saepe a
        rem ab nemo culpa nisi quibusdam ex voluptatibus porro, error minus,
        fugit omnis rerum quos placeat recusandae aliquid optio consectetur
        voluptates vero numquam, commodi itaque. Eos expedita magni obcaecati
        incidunt numquam quisquam perferendis, praesentium voluptate animi
        consequatur!
      </p>
    </div>

    <div
      @scroll="handleScroll($event, 'container')"
      id="container2"
      style="
        background-color: green;
        height: 400px;
        width: 400px;
        overflow-y: scroll;
      "
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
        corporis eligendi in accusantium. Accusantium nobis qui animi porro,
        quos quisquam aut odit dolore, dolor ab sed hic magnam possimus eius
        fugiat amet. Quae sequi aliquam, rem qui fuga doloremque quaerat
        perspiciatis beatae pariatur. Libero iusto, perspiciatis porro
        perferendis magni fugiat recusandae aut in blanditiis accusamus vitae
        molestiae id, nemo sit ex. Quasi est ex corrupti repellat tempore nisi
        eum natus dolore suscipit. Eveniet, id error libero quibusdam voluptas
        cum vitae facere consectetur, accusantium sit necessitatibus perferendis
        sapiente soluta est quaerat iusto laborum incidunt numquam quisquam
        animi unde hic dolore minus! Consequuntur deleniti aliquam laboriosam
        voluptatibus exercitationem officia ratione explicabo molestias a
        voluptate? Aut sit in itaque deleniti corrupti, laudantium, harum
        reprehenderit veniam, fuga totam ea libero exercitationem. Ex
        dignissimos consectetur similique alias laudantium explicabo dolore
        aperiam illum optio ea quae asperiores inventore pariatur maxime eius
        maiores iusto ad, nobis, eaque in, repellendus cumque totam? Officiis
        magnam tempore commodi sapiente facilis corporis omnis est harum
        architecto deserunt, aliquid facere cupiditate? Expedita, est nostrum!
        Eligendi at cupiditate incidunt accusamus quos vero ipsum quae eaque ut
        ducimus minima sit corrupti molestiae suscipit excepturi quisquam
        impedit quis autem aliquam, voluptatibus provident? Nihil voluptas quo,
        doloremque vero modi incidunt porro expedita necessitatibus quidem
        molestiae. Explicabo autem cupiditate laboriosam sit architecto
        blanditiis quas consequuntur dolorem maiores atque delectus nostrum ad
        eius nisi, nihil ea dignissimos enim animi? In beatae accusamus aliquid
        exercitationem facere ducimus voluptatum laudantium, dignissimos unde
        aperiam ipsa consectetur, dolor fuga sed quam eos autem necessitatibus
        voluptates porro quisquam. Voluptatem nam ipsum beatae aliquid nostrum
        repellendus, saepe nisi recusandae accusantium, explicabo qui, optio
        cupiditate ab autem dolorem iusto eaque eligendi sapiente accusamus a
        fuga voluptate dolore temporibus consequatur. Aut deserunt minus
        temporibus necessitatibus. Autem facilis illo nemo. Obcaecati quibusdam
        inventore consequatur labore culpa autem illum, exercitationem ratione
        repellendus quos nisi illo at explicabo aperiam neque ipsa? Deserunt,
        at, veritatis voluptatem harum sint vel quod error ex quibusdam sapiente
        magni autem tempore asperiores aliquam inventore et laborum? Suscipit
        porro consequuntur, quis praesentium, laborum esse inventore similique
        ratione perspiciatis deleniti labore eligendi sequi, aut aliquid commodi
        culpa? Omnis, provident. Sed repellat natus voluptates qui illo quasi
        sunt perferendis aliquam quae molestias! Ad similique fugit cupiditate,
        eaque officiis eius in rem maiores? Porro, inventore nostrum eligendi,
        qui voluptate ullam pariatur repellendus, quos dignissimos cum quas
        velit exercitationem quibusdam ut molestias molestiae fugit vitae
        facere. Esse ex quisquam atque totam quaerat accusamus ab blanditiis
        tempore fugiat harum, ipsa eaque consequatur? Eligendi voluptatibus
        earum suscipit nesciunt voluptatum molestias in commodi, nulla, nihil,
        totam vel laudantium? Nemo, totam libero alias eius id distinctio facere
        dicta. Neque dolorum velit veniam dolor sit rem iusto vel, laudantium ut
        officiis atque sapiente quis reiciendis dolores quasi repudiandae
        repellendus voluptatibus dignissimos officia minima nesciunt. Ut saepe a
        rem ab nemo culpa nisi quibusdam ex voluptatibus porro, error minus,
        fugit omnis rerum quos placeat recusandae aliquid optio consectetur
        voluptates vero numquam, commodi itaque. Eos expedita magni obcaecati
        incidunt numquam quisquam perferendis, praesentium voluptate animi
        consequatur!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
    };
  },
  mounted() {},
  methods: {
    handleScroll: function (e, scrollName) {
      var currentScrollPosition = e.srcElement.scrollTop;
      // console.log(currentScrollPosition);
      // console.log(e);
      // console.log(name);

      this.scrollPosition = currentScrollPosition;
      var container = this.$el.querySelector("#" + scrollName);
      container.scrollTop = currentScrollPosition;
    },
  },
};
</script>

<style>
</style>