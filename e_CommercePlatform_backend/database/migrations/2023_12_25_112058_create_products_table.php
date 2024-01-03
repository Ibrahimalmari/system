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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->string('description');
            $table->double('price');
            $table->text('images');
            $table->integer('quantity');
            $table->foreignId('category_id')->constrained("categories")->onUpdate('cascade')->onDelete('cascade')->default(0);
            $table->foreignId('brunch_id')->constrained("brunches")->onUpdate('cascade')->onDelete('cascade')->default(0);
            $table->foreignId('store_id')->constrained('stores')->onUpdate('cascade')->onDelete('cascade')->default(0);
            $table->enum('status',['Active' ,'Inactive'])->default('Inactive');
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
        Schema::dropIfExists('products');
    }
};
