<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('storeproducts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onUpdate('cascade')->onDelete('cascade');;
            $table->foreignId('store_id')->constrained('stores')->onUpdate('cascade')->onDelete('cascade');;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('storeproducts');
    }
};