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
        Schema::create('stores', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('address');
            $table->string('personalNumber')->unique();
            $table->string('type');
            $table->string('phone');
            $table->string('cover_photo');
            $table->integer('order_recive');
            $table->integer('order_done');
            $table->integer('order_reject');
            $table->date('open_time');
            $table->foreignId('seller_id')->constrained('seller_men')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('stores');
    }
};
